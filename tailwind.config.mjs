/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "hero-bg-gradient": "url('/gradient-3.jpeg')",
      "spend-dark": "url('/spend-dark.png')",
    },
  },
};
export const plugins = [];
