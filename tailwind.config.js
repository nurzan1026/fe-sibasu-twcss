/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      padding: "24px",
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        primary: "#047857",
        hijau: "#1B8E5F",
        hitam: "#1f2937",
        biru: "#0891b2",
      },
    },
  },
  plugins: [],
};
