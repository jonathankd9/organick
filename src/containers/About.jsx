import React from "react";
import { Navbar, Footer, Newsletter } from "./../components";
import { WwoyData } from "./../components/data/WwoyData";

const About = () => {
  const filteredData = WwoyData.filter((wwoy) => {
    if (wwoy.id === 1 || wwoy.id === 3) {
      return true;
    }
  });

  return (
    <>
      {/* Navbar  */}
      <Navbar />
      {/* What we offer for you */}
      <div className="bg-primary my-20 md:py-[10rem] sm:py-[5rem]">
        <div className="container bg-primary flex flex-col justify-center items-center ">
          <div className="text-center">
            <p className="tail text-white">About us</p>
            <h2 className="text-white mb-5">What We Offer for You</h2>
          </div>
          <div className="flex flex-wrap gap-5 sm:justify-center">
            {filteredData.map((wwoy) => (
              <div className="" key={wwoy.id}>
                <div className="h-72 w-72 rounded-2xl">
                  <img
                    className="h-full w-full object-cover rounded-2xl"
                    src={wwoy.image}
                    alt=""
                  />
                </div>
                <p className="text-white text-center font-medium font-roboto my-[1.5rem] text-[25px] ">
                  {wwoy.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subscribe to our newsletter */}
      <Newsletter />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
