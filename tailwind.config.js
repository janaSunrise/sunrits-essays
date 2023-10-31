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
        title: ['Karla', 'sans-serif'],
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        background: '#FAF9F2'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
