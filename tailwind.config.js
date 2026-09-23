/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F3EA',
        'ivory-soft': '#EFE9DD',
        charcoal: '#242424',
        muted: '#6F6A60',
        gold: '#B49A63',
        border: '#DDD5C7',
      },
      boxShadow: {
        soft: '0 20px 40px rgba(36, 36, 36, 0.06)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        reveal: 'reveal 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
