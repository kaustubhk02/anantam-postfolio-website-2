/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#050d1a',
          800: '#071428',
          700: '#0a1f3d',
          600: '#0d2b52',
          500: '#103567',
        },
        cyan: {
          400: '#22d3ee',
          300: '#67e8f9',
          200: '#a5f3fc',
        },
        neon: {
          green: '#39ff14',
          teal: '#00ffd5',
        },
      },
      fontFamily: {
        display: ['var(--font-orbitron)', 'monospace'],
        body: ['var(--font-exo)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(ellipse at 20% 50%, #071428 0%, #050d1a 50%, #000000 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(7,20,40,0.8) 0%, rgba(10,31,61,0.6) 100%)',
        'cyber-grid': 'linear-gradient(rgba(34,211,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
