/** @type {import('tailwindcss').Config} */
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
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        // base
        light: "#F7F5F6",
        // blue
        blue: {
          400: "#70B9E0",
          500: "#85A9FF",
          600: "#799AE8",
        },
        // green
        green: {
          400: "#31E981",
          500: "#46D9A1",
          600: "#5BC9C0",
        },
      },
    },
  },
  plugins: [],
};
