import aspectRatio from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["GeneralSans-Regular"],
        medium: ["GeneralSans-Medium"],
        semibold: ["GeneralSans-Semibold"],
        regularSerif: ["Gambetta-Regular"],
        mediumSerif: ["Gambetta-Medium"],
        semiboldSerif: ["Gambetta-Semibold"],
      },
      colors: {
        customGreen: "#52682d",
      },
    },
  },
  plugins: [aspectRatio],
};
