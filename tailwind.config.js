module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f7f4ec',
        sage: '#6b9a7c',
      },
      borderRadius: {
        'md': '12px',
        'lg': '16px'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
