/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        c1: '#fef6e4',
        c2: '#f3d2c1',
        c3: '#8bd3dd',
        c4: '#f582ae',
        c5: '#001858',
        c55: '#172c66',
    }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}