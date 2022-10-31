import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import styled from "styled-components";
import images1 from './images/img1.jpeg'
import images2 from './images/img2.jpeg'
import images3 from './images/img3.jpeg'
import { faChevronLeft , faChevronRight } from '@fortawesome/free-solid-svg-icons'






const Container = styled.div({
    margin:'1.5rem 0rem 1.5rem 0rem',

    '&> div.row':{

        '@media (min-width: 992px)': {
            display:'flex',
            justifyContent:'space-between',
            flexWrap:'wrap',
            flexDirection:'row',
        },


        '&> div.col7':{
            padding:'15px',
            boxSizing:'border-box',
            marginBottom:'1rem',
            backgroundColor:'#F7F7F7',
            padding:'5rem',

            '@media (min-width: 992px)': {
                flex:'0 0 auto',
                width:'48%',
            },
    
        },

        '&> div.col5':{
            padding:'15px',
            borderRadius:'25px',
            boxSizing:'border-box',
            marginBottom:'1rem',

            '@media (min-width: 992px)': {
                flex:'0 0 auto',
                width:'48%',
            },


       
        }
    },

    '& .imgFluid':{
        maxWidth:'100%',
        height:'auto',
    },

    '& .imgDots':{
        maxWidth:'150%',
        position:'absolute',
        height:'auto',
    },


})

const Content = () => {

    const settings = {

        customPaging: function() {
            return (
                <a>
                    <img className="imgDots" src={images1} />
                </a>
            );
        },

      dots: true,
      arrows:false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return ( 
        <Container>
            <div className="row">
                <div className="col7">
                    <Slider {...settings}>
                        <div>
                            <img src={images1} className='imgFluid' alt="" />
                        </div>
                        <div>
                            <img src={images2} className='imgFluid' alt="" />
                        </div>
                    </Slider>
                </div>
                <div className="col5">

                </div>
            </div>
        </Container>
    );
}
 
export default Content;