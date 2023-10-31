import Banner from "../Components/Banner";
import About from "../Components/Page/About";
import Services from "../Components/Page/Services";
import Footer from "../Components/SharedPage/Footer";
import Nav from "../Components/SharedPage/Nav";


const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Nav></Nav>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;