/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily : {
        'bruno-ace-sc': ['Bruno Ace SC'],
        'open-sans': ['Open Sans'],
        'montserrat': ['Montserrat']
      },
      colors: {
        "nav-background": "#101024",
        "nav-text": "#FFFFFF",
        "nav-menu-text": "#A4A4A4",
        "website-background": "#090909",
        "website-text": "#FFFFFF",
        "header-color-1": "#FFFFFF",
        "header-color-2": "#179DEB",
        "line-color-1": "#FFFFFF",
        "line-color-2": "#FFC908",
        "newsletter-backfround":"#17184B",
        "product-card-btn-active": "#0E0B5B"
      }
    },
  },
  plugins: [],
}
