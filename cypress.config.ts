import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
  viewportWidth: 390,
  viewportHeight: 844,
  retries: 0,
});
