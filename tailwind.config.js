/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        dmsans: ['DMSans', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "cyan": "#00E2C7",
        "green": "#008D7C",
        "blue": "#03A1FF",
        "dark blue": "#003559",
        "grey": "#D9D9D9"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/HeroBG.svg')",
        'howitworks': "url('assets\images\HowItWorksBG.svg')",
        'aboutus': "url('assets\images\AboutUsBG.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}