const Banner = () => {
    return (
        <div className="bg-cover flex items-center justify-between -mt-[60px]  bg-[url(https://i.ibb.co/6F6dXrc/bg.jpg)] min-h-[700px]">
            <div className="p-1 px-4 md:px-12 justify-between w-[70%]  flex items-center ">
                <div className="ml-2 flex flex-col md:gap-7 items-center">
                <img className="h-8" src="https://i.ibb.co/NKgBCQP/fb-white.png" alt="Facebook" />
                <img className="h-6 w-6" src="https://i.ibb.co/4tSfSfp/insta-white.png" alt="Instagram" />
                <img className="h-6 w-6" src="https://i.ibb.co/jk9J84V/twitter-white.png" alt="Twitter" />
                </div>
        
                <div className="md:-mt-24 md:mr-8 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-antonio uppercase text-white">
                    <span className="text-base md:text-2xl text-gray-300 block md:inline-block mb-2 md:mb-0">Explore Bangladesh with</span>
                    <br /> Wandelo
                </h1>
                </div>
            </div>
        </div>
    );
  };
  
  export default Banner;
  