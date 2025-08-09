/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
	extend: {
  	fontFamily: {
    	myfont: ['Noto Color Emoji', 'sans-serif'],
      myfont2: ['Liberation Mono', 'sans-serif'],
         myfont3: ['Consolas', 'sans-serif'],
  	},
	},
  },

  plugins: [],
}



