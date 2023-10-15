import React from "react";
import {NewsData} from "./data/NewsData";
import Profile from "../assets/news/profile-green.svg";

const NewsList = () => {
	return (
		<div className="">
			{/* Background image */}
			<div className="container sm:grid sm:grid-cols-2 flex flex-col items-center justify-center gap-10 sm:py-20 py-10 rounded-2xl">
				{NewsData.map((news) => (
					<div className="container relative" key={news.id}>
						<div className="h-[32.75rem]">
							<img
								className="h-full w-full object-cover rounded-3xl"
								src={news.image}
								alt=""
							/>
						</div>
						{/* Card */}
						<div className="sm:-mt-40 -mt-56">
							<div className="bg-[#ffffff] sm:mx-8 mx-4 rounded-3xl p-8 shadow-lg relative z-10">
								<div className="flex flex-row gap-5 items-center mb-2">
									<img src={Profile} alt="" />
									<p className="text-[18px]">By {news.author}</p>
								</div>
								<p className="font-roboto font-extrabold text-[25px] text-primary">
									{news.title}
								</p>
								<p className="mb-2">{news.meta}</p>
								<a href="" className="text-[20px] font-roboto font-bold">
									Read more
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default NewsList;
