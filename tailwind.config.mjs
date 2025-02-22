/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        zluta: "#FBC80B",
        modra: "#3FA9F5",
      },
      screens: {
        md_2: { min: "900px" }, // Vlastní breakpoint pro max-width: 900px
      },
    },
  },
  plugins: [],
};
