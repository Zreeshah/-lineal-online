import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_ORIGIN = 'https://www.lineal.onl';
const HOST = new URL(SITE_ORIGIN).host;
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const KEY_FILE_NAME = '32cf1deb4922b3f499bacecae60fc20a.txt';
const KEY_LOCATION = `${SITE_ORIGIN}/${KEY_FILE_NAME}`;
const MAX_URLS_PER_REQUEST = 10_000;

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sitemapPath = resolve(projectRoot, 'public', 'sitemap.xml');
const keyPath = resolve(projectRoot, 'public', KEY_FILE_NAME);

const decodeXmlText = (value) =>
  value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'");

const readSitemapUrls = async () => {
  const sitemap = await readFile(sitemapPath, 'utf8');
  return [...sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gu)].map((match) =>
    decodeXmlText(match[1]),
  );
};

const validateUrls = (urls) => {
  const uniqueUrls = [...new Set(urls)];

  if (uniqueUrls.length === 0) {
    throw new Error('No URLs were found to submit.');
  }

  for (const value of uniqueUrls) {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.host !== HOST) {
      throw new Error(`IndexNow URL must use ${SITE_ORIGIN}: ${value}`);
    }
  }

  return uniqueUrls;
};

const submitBatch = async (key, urlList) => {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      host: HOST,
      key,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });

  if (response.status !== 200 && response.status !== 202) {
    const responseBody = (await response.text()).trim();
    throw new Error(
      `IndexNow rejected the submission with HTTP ${response.status}${responseBody ? `: ${responseBody}` : ''}`,
    );
  }

  return response.status;
};

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const requestedUrls = args.filter((arg) => arg !== '--dry-run');
const key = (await readFile(keyPath, 'utf8')).trim();

if (!/^[A-Za-z0-9-]{8,128}$/u.test(key)) {
  throw new Error('The IndexNow key file contains an invalid key.');
}

const urls = validateUrls(requestedUrls.length > 0 ? requestedUrls : await readSitemapUrls());

if (dryRun) {
  console.log(`IndexNow dry run: ${urls.length} validated URL${urls.length === 1 ? '' : 's'}.`);
  console.log(`Key location: ${KEY_LOCATION}`);
  process.exit(0);
}

const statuses = [];
for (let index = 0; index < urls.length; index += MAX_URLS_PER_REQUEST) {
  const batch = urls.slice(index, index + MAX_URLS_PER_REQUEST);
  statuses.push(await submitBatch(key, batch));
}

const verificationPending = statuses.includes(202);
console.log(
  `IndexNow accepted ${urls.length} URL${urls.length === 1 ? '' : 's'} across ${statuses.length} request${statuses.length === 1 ? '' : 's'} (${verificationPending ? 'key verification pending' : 'key verified'}).`,
);
