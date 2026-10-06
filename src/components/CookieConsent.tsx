import { useEffect } from 'react';

type ConsentModeValues = {
  adStoragePurposeConsentStatus: number;
  adUserDataPurposeConsentStatus: number;
  adPersonalizationPurposeConsentStatus: number;
  analyticsStoragePurposeConsentStatus: number;
};

type GoogleFc = {
  callbackQueue: Array<Record<string, () => void>>;
  ConsentModePurposeStatusEnum?: Record<string, number>;
  getGoogleConsentModeValues?: () => ConsentModeValues;
  showRevocationMessage?: () => void;
};

declare global {
  interface Window {
    googlefc?: GoogleFc;
    gtag?: (...args: unknown[]) => void;
  }
}

const ADSENSE_SCRIPT_ID = 'lineal-adsense';
const MONETAG_SCRIPT_ID = 'lineal-monetag';

const statusAllowsLoading = (status: number, statuses?: Record<string, number>) => {
  if (!statuses) return status === 1 || status === 3 || status === 4;

  return [
    statuses.CONSENT_MODE_PURPOSE_STATUS_GRANTED,
    statuses.CONSENT_MODE_PURPOSE_STATUS_NOT_APPLICABLE,
    statuses.CONSENT_MODE_PURPOSE_STATUS_NOT_CONFIGURED,
  ].includes(status);
};

const loadAdvertisingScripts = () => {
  if (!document.getElementById(ADSENSE_SCRIPT_ID)) {
    const adsense = document.createElement('script');
    adsense.id = ADSENSE_SCRIPT_ID;
    adsense.async = true;
    adsense.crossOrigin = 'anonymous';
    adsense.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6218065184548996';
    document.head.appendChild(adsense);
  }

  if (!document.getElementById(MONETAG_SCRIPT_ID)) {
    const monetag = document.createElement('script');
    monetag.id = MONETAG_SCRIPT_ID;
    monetag.async = true;
    monetag.dataset.zone = '291122';
    monetag.dataset.cfasync = 'false';
    monetag.src = 'https://quge5.com/88/tag.min.js';
    document.head.appendChild(monetag);
  }
};

const applyConsent = () => {
  const googlefc = window.googlefc;
  const values = googlefc?.getGoogleConsentModeValues?.();
  if (!values) return;

  const statuses = googlefc?.ConsentModePurposeStatusEnum;
  const consent = {
    ad_storage: statusAllowsLoading(values.adStoragePurposeConsentStatus, statuses) ? 'granted' : 'denied',
    ad_user_data: statusAllowsLoading(values.adUserDataPurposeConsentStatus, statuses) ? 'granted' : 'denied',
    ad_personalization: statusAllowsLoading(values.adPersonalizationPurposeConsentStatus, statuses) ? 'granted' : 'denied',
    analytics_storage: statusAllowsLoading(values.analyticsStoragePurposeConsentStatus, statuses) ? 'granted' : 'denied',
  };

  window.gtag?.('consent', 'update', consent);

  if (Object.values(consent).every((value) => value === 'granted')) {
    loadAdvertisingScripts();
  }
};

const CookieConsent = () => {
  useEffect(() => {
    const googlefc = window.googlefc || { callbackQueue: [] };
    window.googlefc = googlefc;
    googlefc.callbackQueue = googlefc.callbackQueue || [];
    googlefc.callbackQueue.push({ CONSENT_MODE_DATA_READY: applyConsent });
  }, []);

  return null;
};

export default CookieConsent;
