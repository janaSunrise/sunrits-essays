/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Open Sans', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif']
      },
      fontWeight: {
        normal: 600
      }
    }
  },
  plugins: []
};
