import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;