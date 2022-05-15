module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      black: "#343a40",
      gray: {
        1: "#f7fafc",
        2: "#edf2f7",
        3: "#e2e8f0",
        4: "#cbd5e0",
        5: "#a0aec0",
        6: "#718096",
        7: "#4a5568",
        8: "#2d3748",
        9: "#1a202c",
      },
      pink: "#BF7eae",
      purple: {
        1: '#985ebf',
        2: '#753fbf',
        3: '#6530D9',
      },
      orange: "#F2a950",
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
}
