/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			roboto: ["Roboto", "sans-serif"],
			open: ["Open Sans", "sans-serif"],
			tail: ["Yellowtail", "cursive"],
		},

		backgroundImage: {
			"newletter-back": "url('/src/assets/newsletter/subscribe-bg.jpg')",
			"footer-texture": "url('/img/footer-texture.png')",
		},
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
				padding: "1rem",
				center: true,
			},
		},
	},
	plugins: [],
};
