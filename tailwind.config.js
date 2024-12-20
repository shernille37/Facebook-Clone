/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        full: "999px",
      },
      maxWidth: {
        35: "35%",
        50: "50%",
      },
      height: {
        "screen-nav": "calc(100vh - 56px)",
      },
    },
  },
  plugins: [],
};
