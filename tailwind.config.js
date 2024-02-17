/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ef",
        secondary: {
          100: "#1f242d",
          200: "#323946",
        },
        blend: {
          100: "#f89b29",
          200: "#ff0f7b",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
