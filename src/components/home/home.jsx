import styled from "styled-components";
import AboutUs from "./about/about";
import Comment from "./comment/comment";
import Intro from "./intro/intro";
import Package from "./package/package";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Team from "./team/team";
import Contact from "./contact/contact";
import BtnTop from "../btnfixed/btntop";
import WhatsApp from "../btnfixed/whatsapp";
import Product from "./product/product";

const Homes = styled.div({
    

})

const Home = () => {
    return ( 
        <Homes>
            <Intro/>
            <AboutUs/>
            {/* <Package/> */}
            <Product/>
            {/* <Comment/> */}
            <Team/>
            <Contact/>
            <BtnTop/>
            <WhatsApp/>
        </Homes>
    );
}
 
export default Home;