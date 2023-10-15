import React from "react";
import {Navbar, Header, Newsletter, Footer} from "./../components/";
import ContactBanner from "./../assets/header/contact-header.jpg";
import Contact1 from "./../assets/contact/contact1.jpg";
import LocationIcon from "../assets/contact/location_icon.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
	return (
		<div>
			{/* Navbar  */}
			<Navbar />

			{/* Header */}
			<Header name="Contact" image={ContactBanner} />

			{/* We'd love to talk */}
			<div className="sm:py-[5rem] py-[5rem]">
				<div className="container flex gap-20">
					{/* image */}

					<div className="flex flex-1 justify-center items-center">
						<img src={Contact1} className="rounded-2xl" alt="" />
					</div>

					{/* Text part */}
					<div className="flex-1 flex items-center">
						<div className="">
							<h2 className="mb-5">
								We'd love to talk about how we can work together.
							</h2>
							<p>
								Simply dummy text of the printing and typesetting industry.
								Lorem had ceased to been the industry's standard dummy text ever
								since the 1500s, when an unknown printer took a galley.
							</p>

							{/* Social media logos */}
							<div className="flex gap-2 py-4 justify-start my-5">
								<div
									className=""
									style={{
										width: "3.75em",
										height: "3.75em",
										color: "#274C5B",
										backgroundColor: "#EFF6F1",
										borderRadius: 50,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<InstagramIcon />
								</div>
								<div
									className=""
									style={{
										width: "3.75em",
										height: "3.75em",
										color: "#274C5B",
										backgroundColor: "#EFF6F1",
										borderRadius: 50,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<FacebookOutlinedIcon />
								</div>
								<div
									className=""
									style={{
										width: "3.75em",
										height: "3.75em",
										color: "#274C5B",
										backgroundColor: "#EFF6F1",
										borderRadius: 50,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<TwitterIcon />
								</div>
								<div
									className=""
									style={{
										width: "3.75em",
										height: "3.75em",
										color: "#274C5B",
										backgroundColor: "#EFF6F1",
										borderRadius: 50,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}>
									<PinterestIcon />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Location */}

			<div className="">
				<div className="container bg-[url('/src/assets/contact/location.jpg')] bg-cover rounded-2xl flex gap-28">
					<div className="flex-1"></div>
					<div className="flex-1">
						<div className="bg-white py-16 my-24 mr-20 rounded-2xl px-16">
							<p className="tail">Location</p>
							<h2>Our Farms</h2>
							<p className="mb-5">
								Established fact that a reader will be distracted by the
								readable content of a page when looking a layout. The point of
								using.
							</p>

							<div className="flex flex-row gap-2 mb-5">
								<img src={LocationIcon} className="w-10 h-10" alt="" />
								<div className="">
									<p className="font-sans font-bold">New York, USA:</p>
									<p className="">299 Park Avenue New York,</p>
									<p>New York 10171</p>
								</div>
							</div>
							<div className="flex flex-row gap-2">
								<img src={LocationIcon} className="w-10 h-10" alt="" />

								<div className="">
									<p className="font-sans font-bold">London, UK:</p>
									<p className="">30 Stamford Street,</p>
									<p>London SE1 9LQ</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Contact form */}

			{/* Subscribe to our newsletter */}
			<Newsletter />
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Contact;
