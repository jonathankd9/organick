import React from "react";
import Logo from "./../assets/Logo.svg";

const Footer = () => {
	return (
		<div>
			<div className="container">
				<div className="grid grid-cols-3">
					{/* Contact us */}
					<div>
						<h3 className="">Contact Us</h3>
						{/* Email */}
						<div className="">
							<p className="font-bold">Email</p>
							<p>needhelp@Organia.com</p>
						</div>
						<div className="">
							<p className="font-bold">Phone</p>
							<p>666 888 888</p>
						</div>

						<div className="">
							<p className="font-bold">Address</p>
							<p>88 road, borklyn street, USA</p>
						</div>
					</div>
					{/* Logo Section */}
					<div>
						<img src={Logo} alt="" />
						<p>
							Simply dummy text of the printing and typesetting industry. Lorem
							Ipsum simply dummy text of the printing{" "}
						</p>
						{/* Social media logos */}
						<div className=""></div>
					</div>

					{/* Utility pages */}
					<div>
						<h3 className="">Utility Pages</h3>
						<div className="flex flex-col">
							<div className="">
								<a href="">Style Guide</a>
							</div>
							<div className="">
								<a href="">404 Not Found</a>
							</div>
							<div className="">
								<a href="">Password Protected</a>
							</div>
							<div className="">
								<a href="">Licenses</a>
							</div>
							<div className="">
								<a href="">Changelog</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
