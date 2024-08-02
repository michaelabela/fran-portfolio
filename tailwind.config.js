/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["GeneralSans-Regular"],
        medium: ["GeneralSans-Medium"],
        semibold: ["GeneralSans-Semibold"],
      },
      colors: {
        customGreen: "#63775A",
      },
    },
  },
  plugins: [],
};
