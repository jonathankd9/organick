import React from "react";

const Header = ({image, name}) => {
	return (
		<div
			className="bg-cover bg-center w-full flex items-center justify-center"
			style={{
				backgroundImage: `url(${image})`,
			}}>
			<h1 className="font-extrabold text-[70px]">{name} </h1>
		</div>
	);
};

export default Header;
