module.exports = {
  darkMode: 'media', // Use the user's system preference
  content: [
    "./src/**/*.{html,js}", // For React
    "./pages/**/*.{html,js}", // For Next.js
  ],
  theme: {
    extend: {
      colors: {
        gradientStart: '#6a11cb',
        gradientEnd: '#2575fc',
      },
    },
  },
  plugins: [],
}