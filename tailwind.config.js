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
    },
    lineHeight:{
      DEFAULT: "1",
    },
    borderRadius:{
      DEFAULT: "15px",
    },
    dropShadow:{
      DEFAULT: "2px 6px 10px #00000044",
    },
    extend: {
        fontFamily: {
            sans: ["var(--font-base)"],
        },
        colors: {
            primary: "#31425f",
            "page-bg": "#b2d6ff",
            "card-bg": "#f1f1f1",
            accent: "#f46523",
            "alt-blue": "#364a6d",
        },
    },
  },

  plugins: [],
}

