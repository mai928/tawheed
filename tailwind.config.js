/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	
  ],
  theme: {
    extend: {

      colors:{
        primary_color:'#F58800',
        secondary_color:'#fdfde1'
      }
    },

    variants: {
      extend: {
        fill: ['hover', 'focus'], // Enable `fill` variants if needed
        stroke: ['hover', 'focus'], // Enable `stroke` variants if needed
      },
    },
  },
  plugins: [],
}

