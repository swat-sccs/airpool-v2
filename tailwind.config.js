/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens:{
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      'xl': '1280px',
      'xxl': '1440px',
    },
    lineHeight:{
      DEFAULT: "1",
    },
    borderRadius:{
      DEFAULT: "15px",
      "slight": "5px",
    },
    dropShadow:{
      DEFAULT: "2px 6px 10px #00000044",
      dropdown: "2px 2px 2px #00000044"
    },
    extend: {
      colors: {
        primary: "#31425f",
        "page-bg": "#b2d6ff",
        "card-bg": "#f1f1f1",
        "accent": "#e1e1e1",
        "alt-blue": "#364a6d",
      },
      fontFamily: {
          sans: ["var(--font-base)"],
      },
    },
  },

  plugins: [],
}

