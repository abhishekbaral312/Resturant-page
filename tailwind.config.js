/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
      customgray:'#474747',
      background1:'#F9F9F7',
      background2:'#DBDFD0',
      btnbrown:'#AD343E',
      textblack:'#2C2F24',
      textgrey:'#414536',
      footertext:'#ADB29E',

    },
    fontFamily:{
      primary:['Playfair Display', 'serif'],
      secondary:['DM Sans', 'sans-serif']
    },
    backgroundImage:{
      focus:"url('./images/hero.png')",
      aboutback:"url('./images/aboutbackground.jpg')",
      selecticon:"url('./images/dropdown.svg');",
    },
    screens:{
      md:'750px',
      xl:'1120px'
    },
    backgroundPosition:{
      rightcenter:'96%',
    },
    backgroundSize:{
      small:'30px',
    }
  },
  },
  plugins: [],
}
