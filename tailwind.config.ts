import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#633CFF",
        hover: "#BEADFF",
        error: "#FF3939",
        white: "#FFFFFF",
        lightPurple: "#EFEBFF",
        darkGray: "#333333",
        gray: "#737373",
        borderGray: "#D9D9D9",
        lightGray: "#FAFAFA",
      },
      fontSize: {
        large: "32px",
        medium: "16px",
        small:"12px"
      },
    },
  },
  plugins: [],
} satisfies Config;
