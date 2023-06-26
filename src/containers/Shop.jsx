import React from "react";
import ShopBanner from "./../assets/header/shop.png";

const Shop = () => {
	return (
		<div>
			{/* Navbar  */}
			<Navbar />

			{/* Header */}
			<Header name="About us" image={ShopBanner} />
			{/* Subscribe to our newsletter */}
			<Newsletter />
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Shop;
