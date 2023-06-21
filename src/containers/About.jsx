import React from "react";
import { Navbar, Header, Footer, Newsletter } from "./../components";
import { WwoyData } from "./../components/data/WwoyData";
import { TeamData } from "./../components/data/TeamData";
import AboutBanner from "./../assets/header/aboutus.png";

const About = () => {
	const filteredData1 = TeamData.filter((team) => {
		if (team.id <= 3) {
			return true;
		}
	});

	return (
		<>
			{/* Navbar  */}
			<Navbar />

			{/* Header */}
			<Header name="About us" image={AboutBanner} />

			{/* Team */}
			<div className="sm:py-[5rem]">
				<div className="flex flex-col items-center ">
					<div className="container text-center md:px-32">
						<p className="tail text-white">Team</p>
						<h2 className="mb-5">Our Organic Experts</h2>
						<p className="mb-10">
							Simply dummy text of the printing and typesetting industry. Lorem
							had ceased to been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley.
						</p>
					</div>
					<div className="flex flex-wrap gap-10 sm:justify-center">
						{filteredData1.map((team) => (
							<div className="container" key={team.id}>
								<div className="h-[30.3125rem]">
									<img
										className="h-full w-full object-cover rounded-t-3xl"
										src={team.image}
										alt=""
									/>
								</div>
								<div className="bg-pastel rounded-b-3xl	p-8">
									<p className=" font-extrabold font-roboto text-[#274C5B] text-[25px] ">
										{team.name}
									</p>
									<p className=" tail font-medium text-[22px] ">{team.prof}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* What we offer for you */}
			<div className="bg-primary md:py-[10rem] sm:py-[5rem]">
				<div className="container bg-primary flex flex-col justify-center items-center ">
					<div className="text-center">
						<p className="tail text-white">About us</p>
						<h2 className="text-white mb-5">What We Offer for You</h2>
					</div>
					<div className="flex flex-wrap gap-5 sm:justify-center">
						{WwoyData.map((wwoy) => (
							<div className="" key={wwoy.id}>
								<div className="h-72 w-72 rounded-2xl">
									<img
										className="h-full w-full object-cover rounded-2xl"
										src={wwoy.image}
										alt=""
									/>
								</div>
								<p className="text-white text-center font-medium font-roboto my-[1.5rem] text-[25px] ">
									{wwoy.name}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Subscribe to our newsletter */}
			<Newsletter />
			{/* Footer */}
			<Footer />
		</>
	);
};

export default About;
