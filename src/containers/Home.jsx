import React from "react";
import { Navbar, Footer, Newsletter } from "./../components";

const Home = () => {
	return (
		<div className="container">
			{/* Navbar */}
			<Navbar />
			<div className="container">
				<h1>Hello World</h1>
			</div>

			<Newsletter />
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Home;
