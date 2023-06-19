import React from "react";

const Newsletter = () => {
	return (
		<div className="sm:my-[4rem] md:my-[8rem] flex items-center justify-center">
			<div className="container md:grid md:grid-cols-2 md:items-center sm:flex sm:flex-col sm:items-center sm:justify-center gap-10 bg-[url('/src/assets/newsletter/subscribe-bg.jpg')] bg-cover my-10 md:px-16 md:py-20 sm:py-10 rounded-2xl">
				<div className="flex-initial">
					<h2 className="text-white font-bold leading-none md:text-[50px] md:text-left sm:text-[32px] sm:text-center">
						Subscribe to <br /> our Newsletter
					</h2>
					{/* <h2 className="text-white font-bold leading-none"></h2> */}
				</div>
				<div className="md:flex md:gap-1 sm:grid sm:grid-cols-1 sm:gap-3">
					<input
						class="flex-grow-1 h-20 placeholder:italic placeholder:text-slate-400 block bg-white w-64 border border-slate-300 rounded-2xl pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm sm:w-full"
						placeholder="Your Email Address..."
						type="text"
						name="search"
					/>
					<button>Subscribe</button>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
