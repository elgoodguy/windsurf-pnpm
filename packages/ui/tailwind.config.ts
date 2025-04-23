import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
    '../../apps/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: "#007AFF",
          50: "#E6F2FF",
          100: "#CCE5FF",
          200: "#99CCFF",
          300: "#66B2FF",
          400: "#3399FF",
          500: "#007AFF",
          600: "#0062CC",
          700: "#004999",
          800: "#003166",
          900: "#001833",
        },
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
