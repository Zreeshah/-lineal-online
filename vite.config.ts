import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Strip the gptengineer.js external script during production build (SSG cannot resolve it as an entry)
const stripExternalScripts = () => ({
  name: 'strip-external-scripts',
  transformIndexHtml: {
    order: 'pre' as const,
    handler(html: string) {
      return html.replace(
        /\s*<script[^>]*src=["']https:\/\/cdn\.gpteng\.co\/gptengineer\.js["'][^>]*><\/script>/g,
        ''
      );
    },
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode !== 'development' && stripExternalScripts(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
}));
