import React from "react";

const Newsletter = () => {
	return (
		<div className="my-[4rem] sm:my-[8rem] flex items-center justify-center">
			<div className="container sm:grid sm:grid-cols-2 flex flex-col items-center justify-center gap-10 bg-[url('/src/assets/newsletter/subscribe-bg.jpg')] bg-cover my-10 px-16 sm:py-20 py-10 rounded-2xl">
				<div className="flex-initial">
					<h2 className="text-white font-bold leading-none sm:text-[50px] sm:text-left text-[32px] text-center">
						Subscribe to <br /> our Newsletter
					</h2>
					{/* <h2 className="text-white font-bold leading-none"></h2> */}
				</div>
				<div className="sm:flex sm:gap-1 grid grid-cols-1 gap-3">
					<input
						className="flex-grow-1 h-20 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-2xl pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm w-full sm:w-72"
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
