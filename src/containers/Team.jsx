import React from "react";
import {Navbar, Header, Footer, Newsletter} from "./../components";
import TeamBanner from "./../assets/header/teambanner.jpg";
import {TeamData} from "./../components/data/TeamData";

const Team = () => {
	const filteredData1 = TeamData.filter((team) => {
		if (team.id <= 3) {
			return true;
		}
	});

	const filteredData2 = TeamData.filter((team) => {
		if (team.id > 3) {
			return true;
		}
	});

	return (
		<div>
			{/* Navbar */}
			<Navbar />

			{/* Header */}
			<Header name="Our Team" image={TeamBanner} />

			{/* Our Organic experts */}
			<div className="py-[5rem]">
				<div className="flex flex-col items-center ">
					<div className="container text-center sm:px-32">
						<p className="tail text-white">Team</p>
						<h2 className="mb-5">Our Organic Experts</h2>
						<p className="mb-10">
							Simply dummy text of the printing and typesetting industry. Lorem
							had ceased to been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley.
						</p>
					</div>
					<div className="flex flex-wrap gap-10 justify-center">
						{filteredData1.map((team) => (
							<div className="container w-[28.125rem]" key={team.id}>
								<div className="h-[30.3125rem]  ">
									<img
										className="h-full w-full object-cover rounded-t-3xl"
										src={team.image}
										alt=""
									/>
								</div>
								<div className="bg-pastel rounded-b-3xl	p-8">
									<p className=" font-extrabold font-roboto text-[#274C5B] text-[25px] ">
										{team.name}
									</p>
									<p className=" tail font-medium text-[22px] ">{team.prof}</p>
								</div>
							</div>
						))}
					</div>

					{/* Next set */}
					<div className="flex flex-wrap gap-10 justify-center mt-10">
						{filteredData2.map((team) => (
							<div className="container w-[28.125rem]" key={team.id}>
								<div className="h-[30.3125rem]">
									<img
										className="h-full w-full object-cover rounded-t-3xl"
										src={team.image}
										alt=""
									/>
								</div>
								<div className="bg-pastel rounded-b-3xl	p-8">
									<p className=" font-extrabold font-roboto text-[#274C5B] text-[25px] ">
										{team.name}
									</p>
									<p className=" tail font-medium text-[22px] ">{team.prof}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<Newsletter />
			<Footer />
		</div>
	);
};

export default Team;
