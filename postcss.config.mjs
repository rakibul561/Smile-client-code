/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},  // ✅ ঠিক এভাবেই দিতে হবে
    autoprefixer: {},
  },
};

export default config;
