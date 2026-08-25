/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#081A3A',
          900: '#06132D',
          800: '#081A3A',
          700: '#0E2856',
          600: '#173E7D',
        },
        brand: {
          blue: '#1769E0',
          'blue-bright': '#168BFF',
          'blue-dark': '#0E52B5',
          'blue-light': '#38BDF8',
          purple: '#6638E8',
          violet: '#8B3FE8',
          'purple-light': '#B59CFF',
          'purple-dark': '#5224CC',
          cyan: '#00D2FF',
        },
        dark: {
          text: '#101828',
          secondary: '#667085',
          muted: '#98A2B3',
        },
        surface: {
          bg: '#F7F9FC',
          card: '#FFFFFF',
          border: '#E4E7EC',
          borderLight: '#F2F4F7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(8, 26, 58, 0.05), 0 2px 6px -1px rgba(8, 26, 58, 0.03)',
        'medium': '0 12px 32px -4px rgba(8, 26, 58, 0.08), 0 4px 12px -2px rgba(8, 26, 58, 0.04)',
        'elevated': '0 20px 48px -6px rgba(8, 26, 58, 0.12), 0 8px 16px -4px rgba(8, 26, 58, 0.05)',
        'glow-blue': '0 0 40px -10px rgba(23, 105, 224, 0.35)',
        'glow-purple': '0 0 40px -10px rgba(102, 56, 232, 0.35)',
        'glass': '0 8px 32px 0 rgba(8, 26, 58, 0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4.5s ease-in-out infinite 1s',
        'float-fast': 'float 3.5s ease-in-out infinite 2s',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'wave-flow': 'waveFlow 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        waveFlow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
