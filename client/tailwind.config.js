module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      black: "#2c2c2c", // "Light" Black
      gray: {
        1: "#f7fafc",
        2: "#edf2f7",
        3: "#4a5568",
        4: "#2d3748",
        5: "#1a202c",
      },
      pink: "#bf7eae",
      purple: {
        1: "#985ebf", // Primary
        2: "#6530d9", // Secondary
        3: "#753fbf", // Tertiary
      },
      orange: "#f2a950",
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}
