import React from "react";
import {Navbar, Header, Footer, Newsletter, NewsList} from "./../components";
import NewsBanner from "../assets/header/news.png";

const News = () => {
	return (
		<div>
			<Navbar />
			<Header name="News" image={NewsBanner} />

			<NewsList />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default News;
