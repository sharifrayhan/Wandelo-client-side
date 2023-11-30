import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { TouristStories } from "./Components/Stories/TouristStories";
import TourTypes from "./Components/TourTypes/TourTypes";
import Tourism from "./Components/Tourism";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <TourTypes></TourTypes>
           <Tourism></Tourism>
           <TouristStories></TouristStories>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;