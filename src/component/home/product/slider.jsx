import { faImages } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import styled from "styled-components";



const Container = styled.div({

    '& .imgFluid':{
        maxWidth:'100%',
        height:'auto',
        borderRadius:'15px',
    }

})

const SliderProduct = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true
    };

    return ( 
        <Container>
            <Slider {...settings}>
                {props.images.map((i , index)=> {
                    return(
                        <div key={index}>
                            <img src={i.images} className='imgFluid' alt="" />
                        </div>
                    )
                })}
            </Slider>
        </Container>
    );
}
 
export default SliderProduct;