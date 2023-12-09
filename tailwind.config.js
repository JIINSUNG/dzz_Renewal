/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dzzfooter: "#231815",
        dzzmain: "#FFA500",
        dzzsub: "#FCD671",
        dzzsub2: "#1D4E89",
        dzzfont: "#333333",
        dzzbutton: "#262626",
      },
    },

    screens: {
      pc: "1200px",
    },
  },
  plugins: [],
};
