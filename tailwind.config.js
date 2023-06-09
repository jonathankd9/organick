/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			roboto: ["Roboto", "sans-serif"],
			open: ["Open Sans", "sans-serif"],
			tail: ["Yellowtail", "cursive"],
		},
		screens: {
			sm: "340px",
			// => @media (min-width: 640px) { ... }

			md: "1024px",
			// => @media (min-width: 1024px) { ... }

			desktop: "1280px",
			// => @media (min-width: 1280px) { ... }
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
				// padding: {
				// 	DEFAULT: "1rem",
				// 	sm: "1rem",
				// 	lg: "4rem",
				// 	xl: "5rem",
				// 	"2xl": "6rem",
				// },
				center: true,
			},
		},
	},
	plugins: [],
};
