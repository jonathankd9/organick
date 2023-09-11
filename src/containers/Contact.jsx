import React from "react";
import {Navbar, Header, Newsletter, Footer} from "./../components/";
import ContactBanner from "./../assets/header/contact-header.jpg";

const Contact = () => {
	return (
		<div>
			{/* Navbar  */}
			<Navbar />

			{/* Header */}
			<Header name="Contact" image={ContactBanner} />

			{/* Subscribe to our newsletter */}
			<Newsletter />
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Contact;
