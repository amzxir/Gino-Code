import styled from "styled-components";
import AboutUs from "./about/about";
import Comment from "./comment/comment";
import Intro from "./intro/intro";
import Package from "./package/package";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Team from "./team/team";

const Homes = styled.div({
    

})

const Home = () => {
    return ( 
        <Homes>
            <Intro/>
            <AboutUs/>
            <Package/>
            <Comment/>
            <Team/>
        </Homes>
    );
}
 
export default Home;