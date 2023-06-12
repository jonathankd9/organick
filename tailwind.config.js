/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#274C5B",
				secondary: "#7EB693",
				accent: "#EFD372",
				muted: "#D4D4D4",
				pastel: "#F9F8F8",
				neutral: "#EFF6F1",
				metallic: "#525C60",
			},
			container: {
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
				center: true,
				width: "87.5rem",
			},
		},
	},
	plugins: [],
};
