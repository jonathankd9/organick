import React from "react";
import {Navbar, Footer, Newsletter} from "./../components";
import {NewsData} from "./../components/data/NewsData";
import Profile from "../assets/news/profile-yellow.svg";
import HomeAbout from "../../src/assets/home/home-about.png";

const Home = () => {
	const NewsFiltered = NewsData.filter((news) => {
		if (news.id <= 2) {
			return true;
		}
	});
	return (
		<div className="">
			{/* Navbar */}
			<Navbar />

			{/* Hero section */}

			<div className="bg-[url('/src/assets/home/home-background.jpg')] md:bg-cover sm:bg-cover">
				<div className="container flex justify-center items-center md:h-[56rem] sm:h-[36rem] ">
					<div className="md:flex-1 flex-col ">
						<p className="font-tail text-[36px] text-[#68A47F]">
							100% Natural Food
						</p>
						<p className="font-roboto font-extrabold md:text-[72px] sm:text-[3rem] text-primary basis-1/2">
							Choose the best healthier way of life
						</p>
						<button
							href=""
							className="text-[20px] font-roboto font-bold bg-accent text-primary">
							Explore Now
						</button>
					</div>
					<div className="flex-1"></div>
				</div>
			</div>

			{/* Category seection */}
			<div className="container flex sm:my-[5rem] md:flex-row sm:flex-col md:my-[10rem] gap-10 ">
				<div className="flex-1">
					<div className="bg-[url('/src/assets/home/getfreshfruits.jpg')] md:bg-cover sm:bg-contain h-[22rem] md:p-20 sm:p-5 flex items-center rounded-3xl">
						<div className="flex flex-col">
							<p className="font-tail text-[2.2rem] text-white">Natural!!</p>
							<p className="sm:hidden md:flex font-roboto text-[2.5rem] font-bold text-white">
								Get Garden <br /> Fresh Fruits
							</p>
							<p className="md:hidden font-roboto text-[2rem] font-bold text-white">
								Get Garden Fresh Fruits
							</p>
						</div>
					</div>
				</div>
				<div className="flex-1">
					<div className="bg-[url('/src/assets/home/getvegetables.jpg')] md:bg-cover sm:bg-contain h-[22rem] md:p-20 sm:p-5 flex items-center rounded-3xl">
						<div className="flex flex-col">
							<p className="font-tail text-[2.2rem] text-primary">Offer!!</p>
							<p className="font-roboto text-[2.5rem] font-bold text-primary">
								Get 10% off <br /> on Vegetables
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* About us */}
			<div className="md:py-[10rem] sm:py-[5rem] bg-pastel ">
				<div className="container flex md:flex-row sm:flex-col gap-10 items-center mb-20">
					<div className="flex-1">
						<img className="rounded-2xl" src={HomeAbout} alt="" />
					</div>

					<div className="flex-1">
						<p className="tail text-white">About Us</p>
						<h2 className="mb-5">We Believe in Working Accredited Farmers </h2>
						<p className="mb-10">
							Simply dummy text of the printing and typesetting industry. Lorem
							had ceased to been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley.
						</p>

						<div className="mb-16">
							<div className="flex md:flex-row sm:flex-col sm:gap-5">
								<div className="flex flex-1 gap-5 items-center">
									{/* <img
										className="w-[2.875rem] h-[2.875rem]"
										src={Modern}
										alt=""
									/> */}
									<p className="text-slate-700 text-[25px] font-medium">
										Modern Agriculture
										<br />
										Equipment
									</p>
								</div>
								<div className="flex flex-1 gap-5 items-center ">
									{/* <img
										className="w-[2.875rem] h-[2.875rem]"
										src={Growth}
										alt=""
									/> */}
									<p className="text-slate-700 text-[25px] font-medium">
										No growth <br /> hormones are used
									</p>
								</div>
							</div>
						</div>

						<button>Show More</button>
					</div>
				</div>
			</div>

			{/* News section */}
			<div className="container sm:my-[2rem] md:my-[5rem] flex-col items-center justify-center">
				<div>
					<p className="font-extrabold font-tail text-[36px] text-secondary">
						News
					</p>
				</div>
				<div className="flex flex-wrap md:items-center">
					<div className="flex md:basis-3/6">
						<p className="font-roboto text-[50px] text-primary font-extrabold leading-[4rem] sm:text-[45px] ">
							Discover weekly content about organic food, & more
						</p>
					</div>
					<div className="flex md:basis-3/6 md:justify-end">
						<button className="bg-[#fff00000] border-2 text-primary text-[20px]">
							More News
						</button>
					</div>
				</div>
			</div>

			<div className="container md:grid md:grid-cols-2 sm:flex sm:flex-col sm:items-center sm:justify-center gap-10 rounded-2xl">
				{NewsFiltered.map((news) => (
					<div className="container relative" key={news.id}>
						<div className="h-[32.75rem]">
							<img
								className="h-full w-full object-cover rounded-3xl"
								src={news.image}
								alt=""
							/>
						</div>
						{/* Card */}
						<div className="md:-mt-40 sm: -mt-56">
							<div className="bg-[#ffffff] md:mx-8 sm:mx-4 rounded-3xl p-8 shadow-lg relative z-10">
								<div className="flex flex-row gap-5 items-center">
									<img src={Profile} alt="" />
									<p className="text-[18px]">By {news.author}</p>
								</div>
								<p className="font-roboto font-extrabold text-[25px] text-primary">
									{news.title}
								</p>
								<p className="mb-2">{news.meta}</p>
								<button
									href=""
									className="text-[20px] font-roboto font-bold bg-accent text-primary">
									Read more
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			<Newsletter />
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Home;
