const Banner = () => {
    return (
        <div className="bg-cover flex items-center justify-between -mt-[100px] md:-mt-[70px] lg:-mt-[70px]  bg-[url(https://i.ibb.co/9YH1bZN/noyaa.png)] h-[300px] md:h-[600px] lg:h-[800px]">
            <div className="p-1 px-4 md:px-12 justify-between w-[70%]  flex items-center ">
                <div className="ml-2 flex flex-col gap-3 md:gap-7 items-center">
                <img className="h-4 lg:h-8" src="https://i.ibb.co/NKgBCQP/fb-white.png" alt="Facebook" />
                <img className="h-3 w-3 lg:h-6 lg:w-6" src="https://i.ibb.co/4tSfSfp/insta-white.png" alt="Instagram" />
                <img className="h-3 w-3 lg:h-6 lg:w-6" src="https://i.ibb.co/jk9J84V/twitter-white.png" alt="Twitter" />
                </div>
        
                <div className="-mt-20 md:-mt-24 -mr-9 md:-mr-[62px] lg:-mt-24 lg:mr-8 text-center">
                <h1 className="text-3xl md:text-6xl lg:text-7xl font-antonio uppercase text-white">
                    <span className="text-base md:text-2xl text-gray-300 inline-block mb-2 md:mb-0">Explore Bangladesh with</span>
                    <br /> Wandelo
                </h1>
                </div>
            </div>
        </div>
    );
  };
  
  export default Banner;
  