/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default  withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		colors: {
			gray_1: "#ECEEF1",
			gray_2: "#F7F8FB",
			white: "#FFFFFF",
			blue_btn: "#563BFF",
			blue_btn_ind: "#3734A9",
			dark_1: "#5A5881",
			dark_2: "#15134B",
			cardIcon1: "#3575FF",
			cardIcon2: "#F36643",
			cardIcon3: "#4524F8",
			cardIcon4: "#24D6A5"
		},
	},
	screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
  },
  plugins: [],
})