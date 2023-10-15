import React from "react";
import Logo from "./../assets/Logo.svg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
	return (
		<div className="">
			<div className="container w-full px-0">
				<div className="sm:grid sm:grid-cols-3 sm:pb-20 sm:divide-x sm:divide-y-0 flex flex-col divide-y divide-x-0 text-center ">
					{/* Contact us */}
					<div className="sm:text-right sm:pr-10 px-0 ">
						<h3 className="mb-2">Contact Us</h3>
						{/* Email */}
						<div className="mb-5">
							<p className="font-bold">Email</p>
							<p>needhelp@Organia.com</p>
						</div>
						<div className="mb-5">
							<p className="font-bold">Phone</p>
							<p>666 888 888</p>
						</div>

						<div className="mb-5">
							<p className="font-bold">Address</p>
							<p>88 road, borklyn street, USA</p>
						</div>
					</div>
					{/* Logo Section */}
					<div className="sm:flex sm:flex-col sm:items-center sm:px-5 flex flex-col justify-center">
						<img className="sm:mb-3 object-scale-down" src={Logo} alt="" />
						<p className="text-center">
							Simply dummy text of the printing and typesetting industry. Lorem
							Ipsum simply dummy text of the printing
						</p>
						{/* Social media logos */}
						<div className="flex gap-2 py-4 justify-center">
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

					{/* Utility pages */}
					<div className="px-10">
						<h3 className="sm:mb-2 sm:text-left text-center">Utility Pages</h3>
						<div className="sm:flex sm:flex-col ">
							<div className="mb-5 sm:text-left text-[18px]">
								<a href="">Style Guide</a>
							</div>
							<div className="mb-5 sm:text-left text-[18px]">
								<a href="">404 Not Found</a>
							</div>
							<div className="mb-5 sm:text-left text-[18px]">
								<a href="">Password Protected</a>
							</div>
							<div className="mb-5 sm:text-left text-[18px]">
								<a href="">Licenses</a>
							</div>
							<div className="mb-5 sm:text-left text-[18px]">
								<a href="">Changelog</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr />
			{/* Copyrights */}
			<div className="">
				<p className="text-center py-3">
					Copyright © <span className="font-bold">Organick</span> | Designed by{" "}
					<span className="font-bold">VictorFlow</span> Templates - Powered by{" "}
					<span className="font-bold">Webflow</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
