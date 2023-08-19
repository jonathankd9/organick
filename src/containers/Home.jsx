import React from "react";
import {Navbar, Footer, Newsletter} from "./../components";
import {NewsData} from "./../components/data/NewsData";
import Profile from "../assets/news/profile-yellow.svg";

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

			<div className=" flex bg-cover h-[56rem] bg-[url('/src/assets/home/home-background.jpg')]">
				<div className="container flex-col flex-1">
					<p className="font-tail text-[36px] text-[#68A47F]">
						100% Natural Food
					</p>
					<p className="font-roboto font-extrabold text-[70px] text-primary basis-1/2">
						Choose the best healthier way of life
					</p>
					<button
						href=""
						className="text-[20px] font-roboto font-bold bg-accent text-primary">
						Read more
					</button>
				</div>

				<div className="flex-1"></div>
			</div>

			{/* News section */}
			<div className="container sm:my-[2rem] md:my-[2rem] flex-col items-center justify-center">
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
