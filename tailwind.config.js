/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-up":{
          '0%':{ top: "100%" },
          '100%':{ top: "0%" },
        },
        "slide-down":{
          '0%':{ top: "0%",opacity:1 },
          '100%':{ top: "100%",opacity:0 },
        },
        "slide-in":{
          '0%': { transform: 'translateX(-100%)' , },
          '100%': { transform: 'translateX(1%)' ,},
        },
        "slide-out":{
          '0%': { transform: 'translateX(1%)' , },
          '100%': { transform: 'translateX(-100%)' ,},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-up":"slide-up 0.4s ease-in-out",
        "slide-down":"slide-down 0.4s ease-in-out forwards",
        'slide-in':'slide-in 0.1s ease-in forwards',
        'slide-out':'slide-out 0.1s ease-in-out forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}