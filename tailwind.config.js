/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.{ts,tsx}",
    "./src/**/**/*.{ts,tsx}"
  ],
  theme: {
    fontSize: {
      xs: ['13px', '16px'],
      sm: ['14px', '20px'],
      base: ['15px', '24px'],
    },
    extend: {
      colors: {
        'bg-primary': '#070C15',
        'bg-hover': '#131D2F',
        'bg-active': '#0D1522',
        'bg-disabled': '#A9B5C7',
        'bg-disabled-light': '#F8FAFD',
        'border-primary': '#DFE6F0',
        'border-hover': '#A9B5C7',
        'border-active': '#131D2F',
        'text-primary': '#131D2F',
        'red-primary':'#F03F3F',
      },
    },
  },
  plugins: [],
}

