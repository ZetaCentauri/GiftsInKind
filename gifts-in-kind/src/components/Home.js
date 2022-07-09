import HomeHeader from "./HomeHeader";
import Statistics from "./Statistics";
import EasySteps from "./EasySteps";
import AboutUs from "./AboutUs";
import WhoDoWeHelp from "./WhoDoWeHelp";
import Contact from "./Contact";

const Home = () => {
    return (
        <div className="home">
            <HomeHeader/>
            <Statistics/>
            <EasySteps/>
            <AboutUs/>
            <WhoDoWeHelp/>
            <Contact/>
        </div>
    )
}

export default Home;