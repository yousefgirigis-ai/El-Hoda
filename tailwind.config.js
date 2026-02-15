/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#f2f0f1", // light gray / background
          red: "#d71920",   // primary red
          black: "#000000", // black
        },
      },
      animation: {
        'float-slow': 'float 25s ease-in-out infinite',
        'float-medium': 'float 20s ease-in-out infinite',
        'float-slower': 'float 30s ease-in-out infinite',
        'pulse-slow': 'pulse 8s ease-in-out infinite',
        'pulse-slower': 'pulse 12s ease-in-out infinite',
        'pulse-slowest': 'pulse 15s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(0deg) translateX(0)' 
          },
          '33%': { 
            transform: 'translateY(-20px) rotate(120deg) translateX(20px)' 
          },
          '66%': { 
            transform: 'translateY(20px) rotate(240deg) translateX(-20px)' 
          },
        },
        pulse: {
          '0%, 100%': { 
            opacity: 0.5,
            transform: 'scale(1)' 
          },
          '50%': { 
            opacity: 0.8,
            transform: 'scale(1.05)' 
          },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};