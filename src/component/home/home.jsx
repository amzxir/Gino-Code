import styled from "styled-components";
import AboutUs from "./about/about";
import Intro from "./intro/intro";

const Homes = styled.div({
    

})

const Home = () => {
    return ( 
        <Homes>
            <Intro/>
            <AboutUs/>
        </Homes>
    );
}
 
export default Home;