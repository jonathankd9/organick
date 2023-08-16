import React from "react";
import {
	Home,
	About,
	Blog,
	Changelog,
	Contact,
	Error404,
	Licenses,
	PasswordProtect,
	Portfolio,
	Service,
	Shop,
	ShopSingle,
	Team,
	News,
} from "./containers";
import "./App.css";
import {Routes, Route} from "react-router-dom";

const App = () => {
	return (
		<React.Fragment>
			<Routes>
				<Route path="" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/team" element={<Team />} />
				<Route path="/news" element={<News />} />
			</Routes>
		</React.Fragment>
	);
};

export default App;
