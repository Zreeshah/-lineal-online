import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Inject the Lovable dev script only during local development.
// It cannot live in index.html because vite-react-ssg tries to resolve it as an SSR entry.
const injectLovableDevScript = () => ({
  name: 'inject-lovable-dev-script',
  apply: 'serve' as const,
  transformIndexHtml(html: string) {
    return html.replace(
      '</body>',
      '  <!-- IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS VERY COMMENT! -->\n    <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>\n  </body>'
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
    injectLovableDevScript(),
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
