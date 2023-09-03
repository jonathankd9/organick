import React from "react";
import {Navbar, Footer, Newsletter} from "./../components";
import {NewsData} from "./../components/data/NewsData";
import {HomeProductData} from "./../components/data/HomeProductData";
import Profile from "../assets/news/profile-yellow.svg";
import HomeAbout from "../../src/assets/home/home-about.png";
import Ecofriendly from "../assets/home/eco-friendly.jpg";
import Star from "../assets/shop/Star.png";
import Sara from "../assets/home/sara taylor.jpg";

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

			<div className="bg-[url('/src/assets/home/homebackground.jpg')] md:bg-cover sm:bg-cover">
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

			{/* Category section */}
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

			{/* Testimonial */}
			<div className="md:my-0 sm:my-20">
				<div className="md:bg-[url('/src/assets/home/customer-saying.png')] md:min-h-screen flex flex-col justify-center items-center">
					<div className="mb-10">
						<p className="font-tail text-center text-4xl text-secondary">
							Testimonial
						</p>
						<h2 className="sm:text-center">What Our Customer Saying?</h2>
					</div>
					{/* Image and rating */}
					<div className="flex flex-col  items-center mb-10">
						<img src={Sara} className="rounded-full " alt="" />
						<img src={Star} alt="" />
					</div>
					{/* Testimonial */}
					<div className="flex flex-col items-center">
						<p className="text-center mb-5">
							Simply dummy text of the printing and typesetting industry. Lorem
							Ipsum simply dummy <br /> text of the printing and typesetting
							industry. Lorem Ipsum has been.
						</p>
						<p className="font-roboto font-semibold text-2xl text-primary">
							Sara Taylor
						</p>
						<p>Consumer</p>
					</div>

					<hr className="my-16 border w-[60%] border-[#E0E0E0]" />

					{/* Four Circles  */}
					<div className="md:flex md:flex-row sm:grid sm:grid-cols-2 md:gap-10 sm:gap-1">
						<div className="rounded-full border-4 border-secondary text-center">
							<div className="rounded-full border-none bg-[#F1F1F1] m-1 w-40 h-40 flex flex-col justify-center">
								<p className="font-roboto text-4xl font-extrabold text-primary">
									100%
								</p>
								<p>Organic</p>
							</div>
						</div>

						<div className="rounded-full border-4 border-secondary text-center">
							<div className="rounded-full border-none bg-[#F1F1F1] m-1 w-40 h-40 flex flex-col justify-center">
								<p className="font-roboto text-4xl font-extrabold text-primary">
									286
								</p>
								<p>Active Product</p>
							</div>
						</div>
						<div className="rounded-full border-4 border-secondary text-center">
							<div className="rounded-full border-none bg-[#F1F1F1] m-1 w-40 h-40 flex flex-col justify-center">
								<p className="font-roboto text-4xl font-extrabold text-primary">
									350+
								</p>
								<p>Organic Orchads</p>
							</div>
						</div>
						<div className="rounded-full border-4 border-secondary text-center">
							<div className="rounded-full border-none bg-[#F1F1F1] m-1 w-40 h-40 flex flex-col justify-center">
								<p className="font-roboto text-4xl font-extrabold text-primary">
									25+
								</p>
								<p>Years of Farming</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* The offer products */}
			<div className="bg-primary">
				<div className="container py-40">
					<div className="mb-10">
						<p className="font-tail text-4xl text-secondary mb-5">Offer</p>
						<div className="md:flex md:justify-between">
							<h2 className="text-white">We Offer Organic For You</h2>
							<button
								href=""
								className="text-[20px] font-roboto font-bold bg-accent text-primary">
								View All Product
							</button>
						</div>
					</div>

					{/* Product list */}
					<div className="md:grid md:grid-cols-4 sm:flex sm:flex-wrap justify-center gap-5">
						{HomeProductData.map((product) => (
							<div
								className="bg-white sm:w-full gap-5 py-10 px-5 flex flex-col rounded-2xl "
								key={product.id}>
								{/* Tag */}
								<div className="bg-primary w-fit py-2 px-4 rounded-xl">
									<p className="text-white font-open font-semibold text-[15px]">
										{product.tag}
									</p>
								</div>
								<div className="">
									<img className="w-full h-72" src={product.image} alt="" />
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
			</div>

			{/* Ecofriendly section */}
			<div className="flex md:flex-row sm:flex-col sm:gap-10 justify-center items-center">
				<div className="basis-1/2 w-full h-fit">
					<img
						src={Ecofriendly}
						className="object-contain w-full h-full"
						alt=""
					/>
				</div>
				<div className="basis-1/2 flex">
					<div className="bg-white md:-ml-32 md:p-20 sm:p-10 md:mr-48 rounded-3xl">
						<div className="">
							<p className="font-tail text-4xl text-secondary">Eco Friendly</p>
							<h2 className="mb-10 md:flex sm:hidden">
								Econis is a Friendly <br /> Organic Store
							</h2>
							<h2 className="text-[48px] mb-10 md:hidden">
								Econis is a Friendly <br /> Organic Store
							</h2>
						</div>

						<div className="mb-5">
							<p className="font-robot font-medium text-2xl text-primary">
								Start with Our Company First
							</p>
							<p className="font-open font-normal text-lg text-metallic">
								Sed ut perspiciatis unde omnis iste natus error sit voluptat
								accusantium doloremque laudantium. Sed ut perspiciatis.
							</p>
						</div>

						<div className="mb-5">
							<p className="font-robot font-medium text-2xl text-primary">
								Learn How To Grow Yourself
							</p>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptat
								accusantium doloremque laudantium. Sed ut perspiciatis.
							</p>
						</div>

						<div className="mb-5">
							<p className="font-robot font-medium text-2xl text-primary">
								Farming Strategies of Today
							</p>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit voluptat
								accusantium doloremque laudantium. Sed ut perspiciatis.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Three photo section  */}
			<div className="bg-[#F1F8F4] md:py-40 sm:py-16 md:flex md:flex-wrap justify-center gap-10 items-center">
				<div className="sm:mb-10 bg-[url('/src/assets/home/organic-juice.jpg')] md:w-[37rem] md:h-[36rem] sm:w-full sm:h-[36rem] flex justify-center items-center">
					<p className="bg-white px-8 py-4 rounded-lg font-roboto font-medium text-2xl">
						Organic Juice
					</p>
				</div>
				<div className="sm:mb-10 bg-[url('/src/assets/home/organic-food.jpg')] md:w-[37rem] md:h-[36rem] sm:w-full sm:h-[36rem] flex justify-center items-center">
					<p className="bg-white px-8 py-4 rounded-lg font-roboto font-medium text-2xl">
						Organic Food
					</p>
				</div>
				<div className="sm:mb-10 bg-[url('/src/assets/home/nuts-cookies.jpg')] md:w-[37rem] md:h-[36rem] sm:w-full sm:h-[36rem] flex justify-center items-center ">
					<p className="bg-white px-8 py-4 rounded-lg font-roboto font-medium text-2xl">
						Nuts Cookies
					</p>
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
