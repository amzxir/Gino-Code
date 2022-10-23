import styled from "styled-components";
import AboutUs from "./about/about";
import Intro from "./intro/intro";
import Package from "./package/package";

const Homes = styled.div({
    

})

const Home = () => {
    return ( 
        <Homes>
            <Intro/>
            <AboutUs/>
            <Package/>
        </Homes>
    );
}
 
export default Home;