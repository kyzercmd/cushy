import daisyui from "daisyui"; // Import the plugin

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Use the imported variable here
  daisyui: {
    themes: ["light"],
    darkTheme: "light",
  },
};
