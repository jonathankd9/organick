import React from "react";
import Logo from "./../assets/Logo.svg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
	return (
		<div>
			<div className="container">
				<div className="grid grid-cols-3 pb-20 divide-x">
					{/* Contact us */}
					<div className="text-right px-10">
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
					<div className="flex flex-col items-center px-5">
						<img className="mb-3" src={Logo} alt="" />
						<p className="text-center">
							Simply dummy text of the printing and typesetting industry. Lorem
							Ipsum simply dummy text of the printing{" "}
						</p>
						{/* Social media logos */}
						<div className="flex gap-2 py-4">
							<div
								className=""
								style={{
									width: 60,
									height: 60,
									color: "#274C5B",
									backgroundColor: "#EFF6F1",
									borderRadius: 50,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<InstagramIcon />
							</div>
							<div
								className=""
								style={{
									width: 60,
									height: 60,
									color: "#274C5B",
									backgroundColor: "#EFF6F1",
									borderRadius: 50,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<FacebookOutlinedIcon />
							</div>
							<div
								className=""
								style={{
									width: 60,
									height: 60,
									color: "#274C5B",
									backgroundColor: "#EFF6F1",
									borderRadius: 50,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<TwitterIcon />
							</div>
							<div
								className=""
								style={{
									width: 60,
									height: 60,
									color: "#274C5B",
									backgroundColor: "#EFF6F1",
									borderRadius: 50,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<PinterestIcon />
							</div>
						</div>
					</div>

					{/* Utility pages */}
					<div className="px-10">
						<h3 className="mb-2">Utility Pages</h3>
						<div className="flex flex-col">
							<div className="mb-5">
								<a href="">Style Guide</a>
							</div>
							<div className="mb-5">
								<a href="">404 Not Found</a>
							</div>
							<div className="mb-5">
								<a href="">Password Protected</a>
							</div>
							<div className="mb-5">
								<a href="">Licenses</a>
							</div>
							<div className="mb-5">
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
