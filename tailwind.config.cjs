/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"Open-Sans": ["Open Sans", "sans-serif"],
				Poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [require("prettier-plugin-tailwindcss")],
};
