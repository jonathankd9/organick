import React from "react";
import ShopBanner from "./../assets/header/shop.png";
import {Navbar, Header, Newsletter, Footer} from "./../components/";
import {ShopData} from "../components/data/ShopData";
import Star from "../assets/shop/Star.png";

const Shop = () => {
	return (
		<div>
			{/* Navbar  */}
			<Navbar />

			{/* Header */}
			<Header name="Shop" image={ShopBanner} />

			{/* Product List using maps */}
			<div className="container my-20">
				<div className="sm:grid sm:grid-cols-4 flex flex-wrap justify-center gap-5">
					{ShopData.map((product) => (
						<div
							className="bg-[#eeeeee] sm:w-full gap-5 py-10 px-5 flex flex-col rounded-xl "
							key={product.id}>
							{/* Tag */}
							<div className="bg-primary w-fit py-2 px-4 rounded-xl">
								<p className="text-white font-open font-semibold text-[15px]">
									{product.tag}
								</p>
							</div>
							<div className="">
								<img className="w-full h-60" src={product.image} alt="" />
							</div>
							{/* Product name and stars */}
							<div className="">
								<p className="mb-2 font-roboto text-xl font-semibold text-primary">
									{product.name}
								</p>
								<hr className="border border-[#DEDDDD]" />

								<div className="flex justify-between items-center mt-2">
									<div className="flex gap-3  items-center">
										<p className="text-[#B8B8B8] text-base line-through">
											${product.initialprice}
										</p>
										<p className="font-open font-bold text-lg text-primary">
											${product.sellingprice}{" "}
										</p>
									</div>
									<div className="">
										<img src={Star} className="" alt="" />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Subscribe to our newsletter */}
			<Newsletter />
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Shop;
