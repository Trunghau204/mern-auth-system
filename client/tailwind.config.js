/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-purple":
          "radial-gradient(circle, rgba(200, 235, 255, 0.6) 0%, white 60%)",
      },
    },
  },
  plugins: [],
};
