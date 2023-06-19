import React from "react";

const Newsletter = () => {
	return (
		<div>
			<div className="container flex items-center gap-10 bg-[url('/src/assets/newsletter/subscribe-bg.jpg')] my-10 p-20 rounded-2xl	">
				<div className="flex-initial w-2/4">
					<h2 className="text-white font-bold leading-none">Subscribe to </h2>
					<h2 className="text-white font-bold leading-none">our Newsletter </h2>
				</div>
				<div className="flex gap-1">
					<input
						class="flex-grow-1 h-20 placeholder:italic placeholder:text-slate-400 block bg-white w-64 border border-slate-300 rounded-2xl pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
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
