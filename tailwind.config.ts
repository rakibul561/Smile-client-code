/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // ✅ ঠিক path
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
  };
  