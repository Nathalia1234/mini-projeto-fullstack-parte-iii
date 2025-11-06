import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  // Define qual backend usar com base no modo
  const apiTargets: Record<string, string> = {
    mongodb: "https://mini-projeto-fullstack-parte2.vercel.app/",         // Backend MongoDB (produção)
    postgresql: "https://backend-express-postgresql-flame.vercel.app/", // Backend PostgreSQL (produção)
  };

  const target = apiTargets[mode] || "http://localhost:3000"; // fallback local

  console.log(`✅ Conectando ao backend: ${target}`);

  return {
    server: {
      host: "0.0.0.0",
      port: 8080,
      proxy: {
        "/api": {
          target,
          changeOrigin: true,
          secure: true,
        },
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
