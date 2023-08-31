import React from "react";
import ShopBanner from "./../assets/header/shop.png";
import {Navbar, Header, Newsletter, Footer} from "./../components/";

const Shop = () => {
	return (
		<div>
			{/* Navbar  */}
			<Navbar />

			{/* Header */}
			<Header name="Shop" image={ShopBanner} />

			{/* Product List using maps */}
			<div className="">

				
			</div>

			{/* Subscribe to our newsletter */}
			<Newsletter />
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Shop;
