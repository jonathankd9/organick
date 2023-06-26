import React from "react";
import { Navbar, Header, Footer, Newsletter } from "./../components";
import { WwoyData } from "./../components/data/WwoyData";
import { TeamData } from "./../components/data/TeamData";
import { WcuData } from "./../components/data/WcuData";
import AboutBanner from "./../assets/header/aboutus.png";
import WhyChoose from "./../assets/about/why-choose.jpeg";
import Aboutus from "./../assets/about/about.png";
import Icon from "./../assets/about/icon.svg";
import Modern from "./../assets/about/modern.svg";
import Growth from "./../assets/about/no-growth.svg";

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

			{/* We do creative stuff */}
			<div className="md:py-[5rem] sm:py-[5rem] ">
				<div className="container flex md:flex-row sm:flex-col gap-10 items-center mb-20">
					<div className="flex-1">
						<img className="rounded-2xl" src={Aboutus} alt="" />
					</div>

					<div className="flex-1">
						<p className="tail text-white">About Us</p>
						<h2 className="mb-5">We do Creative Things for Success </h2>
						<p className="mb-10">
							Simply dummy text of the printing and typesetting industry. Lorem
							had ceased to been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley. <br /> <br />
							Simply dummy text of the printing and typesetting industry. Lorem
							had ceased to been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley.
						</p>

						<div className="mb-16">
							<div className="flex md:flex-row sm:flex-col sm:gap-5">
								<div className="flex flex-1 gap-5 items-center">
									<img
										className="w-[2.875rem] h-[2.875rem]"
										src={Modern}
										alt=""
									/>
									<p className="text-slate-700 text-[25px] font-medium">
										Modern Agriculture
										<br />
										Equipment
									</p>
								</div>
								<div className="flex flex-1 gap-5 items-center ">
									<img
										className="w-[2.875rem] h-[2.875rem]"
										src={Growth}
										alt=""
									/>
									<p className="text-slate-700 text-[25px] font-medium">
										No growth <br /> hormones are used
									</p>
								</div>
							</div>
						</div>

						<button>Explore More</button>
					</div>
				</div>
			</div>

			{/* Why choose us */}
			<div className="bg-pastel md:py-[10rem] sm:py-[5rem] ">
				<div className="container flex flex-wrap md:gap-20 justify-center items-center mb-20">
					<div className="flex-1">
						<p className="tail text-white">Why Choose us?</p>
						<h2 className="mb-5">
							We do not buy from the open market & traders.
						</h2>
						<p className="mb-10">
							Simply dummy text of the printing and typesetting industry. Lorem
							had ceased to been the industry's standard the 1500s, when an
							unknown
						</p>

						<div className="sm:mb-10">
							<div className="mb-5">
								<div className="bg-gray-200 flex gap-2 w-[339px] h-[81px] pl-[27px]  py-[29px] bg-gray-200 rounded-[49px] mb-4">
									<img src={Icon} alt="" />
									<p className="text-slate-700 text-[20px] font-medium">
										100% Natural Product
									</p>
								</div>
								<div className="ml-16 text-gray-600 text-[18px] font-normal leading-7">
									Simply dummy text of the printing and typesetting industry
									Lorem Ipsum
								</div>
							</div>
							<div className="">
								<div className="bg-gray-200 flex gap-2 w-[339px] h-[81px] pl-[27px] py-[29px] bg-gray-200 rounded-[49px] mb-4">
									<img src={Icon} alt="" />
									<p className="text-slate-700 text-[20px] font-medium">
										Increases resistance
									</p>
								</div>
								<div className="ml-16 text-gray-600 text-[18px] font-normal leading-7">
									Filling, and temptingly healthy, our Biona Organic Granola
									with Wild Berries is just the thing
								</div>
							</div>
						</div>
					</div>
					<div className="flex-1">
						<img className="rounded-2xl" src={WhyChoose} alt="" />
					</div>
				</div>

				<div className="container flex flex-wrap gap-5 justify-center">
					{WcuData.map((wcu) => (
						<div
							className="flex flex-col items-center justify-center text-center w-[270px] h-[335px] bg-white rounded-[30px]"
							key={wcu.id}
						>
							<div className="flex justify-center w-[95px] h-[95px] bg-stone-50 rounded-2xl">
								<img className="" src={wcu.image} alt="" />
							</div>
							<div className="rounded-b-3xl p-8">
								<p className=" font-extrabold font-roboto text-[#274C5B] text-[25px] ">
									{wcu.name}
								</p>
								<p className=" ">{wcu.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>

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
					<div className="flex flex-wrap gap-8 sm:justify-center">
						{filteredData1.map((team) => (
							<div className="container md:flex-1" key={team.id}>
								<div className="h-[30.3125rem]">
									<img
										className="h-full w-[26rem] object-cover rounded-t-3xl"
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
