/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b4ffaa",

          secondary: "#44d6a0",

          accent: "#7ca8d3",

          neutral: "#171726",

          bgPrimary: "#12141D",

          info: "#84B1F1",

          success: "#15754D",

          warning: "#EBC624",

          error: "#DF2029",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
