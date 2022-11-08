import Slider from "react-slick";
import styled from "styled-components";



const Container = styled.div({

    '& .imgFluid':{
        maxWidth:'100%',
        height:'auto',
        width:'100%',
        borderRadius:'15px',
        maxHeight:'80vh',
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
        customPaging: function (i) {
            return <div className="dot"></div>;
          },
          dotsClass: "slick-dots slick-thumb",
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