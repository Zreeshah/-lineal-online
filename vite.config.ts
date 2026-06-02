import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Strip external scripts (gptengineer.js) from index.html during build — SSG can't resolve remote URLs as entries
const stripExternalScripts = () => ({
  name: 'strip-external-scripts',
  enforce: 'pre' as const,
  transformIndexHtml(html: string) {
    return html.replace(
      /\s*<script[^>]*src=["']https?:\/\/[^"']+["'][^>]*><\/script>/g,
      ''
    );
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
