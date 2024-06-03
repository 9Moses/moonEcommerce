import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  define: {
    "process.env": {
      STRIPE_ID:
        "pk_test_51PJFcSP9ELxumx14Q8bzWCOWSWT9r6Q321fT7wZS93VkV7qXhnh7RXU9HxgabFNRU397bL0FnHBUxoHVJd4ABsZx00WQbasho2",
    },
  },
});
