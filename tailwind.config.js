module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        104: "26rem",
        112: "28rem",
      },
      height: {
        72: "18rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        104: "26rem",
        112: "28rem",
      },
    },
  },
  plugins: [],
}
