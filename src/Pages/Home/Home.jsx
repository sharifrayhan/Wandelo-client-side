import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { TouristStories } from "./Components/Stories/TouristStories";
import Tourism from "./Components/Tourism";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
           <Tourism></Tourism>
           <TouristStories></TouristStories>
           <Footer></Footer>
        </div>
    );
};

export default Home;