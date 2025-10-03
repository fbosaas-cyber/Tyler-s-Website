/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-hover': 'var(--surface-hover)',
        nav: 'var(--nav)',
        muted: 'var(--muted)',
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        accent: 'var(--accent)',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(135deg, var(--gradient-1), var(--gradient-2), var(--gradient-3))',
      },
      boxShadow: {
        'custom': 'var(--card-shadow)',
      }
    }
  },
  plugins: []
}
