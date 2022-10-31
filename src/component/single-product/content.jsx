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
            boxShadow:'0 .5rem 1rem rgba(0,0,0,.15)',
            padding:'15px',
            borderRadius:'25px',
            boxSizing:'border-box',
            marginBottom:'1rem',
            '@media (min-width: 992px)': {
                flex:'0 0 auto',
                width:'48%',
            },
    
        },

        '&> div.col5':{
            boxShadow:'0 .5rem 1rem rgba(0,0,0,.15)',
            padding:'15px',
            borderRadius:'25px',
            boxSizing:'border-box',
            marginBottom:'1rem',

            '@media (min-width: 992px)': {
                flex:'0 0 auto',
                width:'48%',
            },

            '&> div.content':{
                textAlign:'center',
                marginTop:'1rem',

                '& h1':{
                    fontSize:'20px',
                    paddingBottom:'1rem',
                    borderBottom:'1.2px solid #CDAC81'
                },

                '&> div.row':{
                    display:'flex',
                    justifyContent:'space-between',
                    flexDirection:'row',
                    flexWrap:'wrap',
                    position:'relative',

                    '&> div.feature':{
                        flex:'0 0 auto',
                        width:'50%',

                        '&> p.title':{
                            fontSize:'16px',
                            fontWeight:'700',
                            color:'#595959',
                        },

                        '&> ul':{

                            '& li':{
                                fontSize:'13px',
                                fontWeight:'bold',
                                color:'#595959',
                                marginBottom:'1rem',

                            }
                        }
                    },

                    '&> div.property':{
                        flex:'0 0 auto',
                        width:'50%',
                        
                        '&> p.title':{
                            fontSize:'16px',
                            fontWeight:'700',
                            color:'#595959',
                        },


                        '&> ul':{

                            '& li':{
                                fontSize:'13px',
                                fontWeight:'bold',
                                color:'#595959',
                                marginBottom:'1rem',

                            }
                        }
                    },
                },



            }

       
        }
    },

    '& .imgFluid':{
        width:'100%',
        height:'auto',
    },

    '& .SamplePrevArrow':{
        position:'absolute',
        top:'50%',
        right:"0",
        borderRadius:'50%',
        width:'27px',
        height:'27px',
        backgroundColor:'#3d4247',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },

    '& .SampleNextArrow':{
        position:'absolute',
        top:'50%',
        left:"0",
        zIndex:'100',
        borderRadius:'50%',
        width:'27px',
        height:'27px',
        backgroundColor:'#3d4247',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }

})

const Content = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
        const {onClick} = props;
        return (
        <div className="SamplePrevArrow" onClick={onClick}>
            <FontAwesomeIcon fontSize={12} color="#fff" icon={faChevronRight}/>            
        </div>
        );
    }
    
    function SamplePrevArrow(props) {

    const {onClick} = props;

    return (
        <div className="SampleNextArrow" onClick={onClick}>
        <FontAwesomeIcon fontSize={12} color="#fff" icon={faChevronLeft}/>            
        </div>
        
    );
    }

    return ( 
        <Container>
            <div className="row">
                <div className="col7">
                    <Slider {...settings}>
                        <div>
                            <img className="imgFluid" src={images1} alt="" />
                        </div>
                        <div>
                            <img className="imgFluid" src={images2} alt="" />
                        </div>
                        <div>
                            <img className="imgFluid" src={images3} alt="" />
                        </div>
                    </Slider>
                </div>
                <div className="col5">
                    <div className="content">
                        <h1>اتوماسیون اداری ژینو</h1>
                        <div className="row">

                            <div className="feature itemProduct">
                                <p className="title">امکانات</p>
                                <ul>
                                    <li>1 لورم ایپسوم</li>
                                    <li>1 لورم ایپسوم</li>
                                    <li>1 لورم ایپسوم</li>
                                    <li>1 لورم ایپسوم</li>
                                    <li>1 لورم ایپسوم</li>
                                    <li>1 لورم ایپسوم</li>
                                </ul>
                            </div>
                            <div className="property">
                                <p className="title">ویژگی ها</p>
                                <ul>
                                    <li>1 لورم ایپسوم</li>
                                    <li>1 لورم ایپسوم</li>
                                    <li>1 لورم ایپسوم</li>
                                    <li>1 لورم ایپسوم</li>
                                    <li>1 لورم ایپسوم</li>
                                    <li>1 لورم ایپسوم</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
 
export default Content;