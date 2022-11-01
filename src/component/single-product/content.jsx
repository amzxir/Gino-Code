import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import styled from "styled-components";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";


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
            padding:'1.5rem',
            height:'100%',

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
            height:'100%',

            '@media (min-width: 992px)': {
                flex:'0 0 auto',
                width:'48%',
            },

            '&> div.content':{

                '& h1':{
                    fontSize:'20px',
                    color:'#383838',
                },

                '&> div.button':{
                    margin:'1rem 0rem 1rem 0rem',

                    '& button':{
                        backgroundColor:'#fff',
                        borderColor:'#D3D3D3',
                        color:'#585858',
                        fontSize:'12px',
                        fontWeight:'bold',
                        borderRadius:'0 !important',
                        margin:'10px',
                        width:'100px',

                    },

                    '& a':{
                        backgroundColor:'#CDAC81',
                        borderColor:'#CDAC81',
                        color:'#fff',
                        fontSize:'12px',
                        fontWeight:'bold',
                        borderRadius:'0 !important',
                        margin:'10px',
                        width:'100px',

                    }
                },

                '&> p':{
                    fontSize:'15px',
                    lineHeight:'1.7',
                    textAlign:'justify',
                    marginBlockStart:'2rem',
                    marginBlockEnd:'2rem',
                },

                '&> div.nav':{
                    overflow:'auto',
                    whiteSpace:'nowrap',
                    borderBottom:'1.5px solid #dddddd',
                    borderRight:'1.5px solid #dddddd',

                    '& a':{
                        backgroundColor:'#fff',
                        borderColor:'#dddddd',
                        borderWidth:'1.5px',
                        borderRight:'none',
                        borderBottom:'none',
                        color:'#585858',
                        fontSize:'12px',
                        fontWeight:'bold',
                        borderRadius:'0px !important',
                        width:'100px',
                        padding:'1rem',

                        '&:hover': {
                            borderColor:'#CDAC81',
                            backgroundColor:'#CDAC81',
                            color:'#fff'
                        }
                    }
                },

                '&> div.table':{
                    marginTop:'2rem',
                    overflow:'auto',
                    whiteSpace:'nowrap',
                    '&> table':{

                        fontSize:'13px',
                        fontWeight:'bold',
                        color:'#41464b',
                        
                        '&> thead':{
                            textAlign:'center',

                            '&> tr':{


                                '&> td':{

                                }
                            }
                        },

                        '&> tbody':{

                            '&> tr':{


                                '&> td':{
                                    textAlign:'center',
                                }
                            }
                        }
                    }
                }

            }


       
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

    '& .active':{
        color:'red',
    }


})

const Content = (props) => {

    const settings = {

        customPaging: function(i) { 
          return (  
            <a>
                <img className="imgDots" src={props.imgSlider[i].img} />
            </a>
          )

        },

      dots: true,
      arrows:false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const [view , setView] = useState(<Naving1/>)

    const [active , setActive] = useState(false)

    return ( 
        <Container>
            <div className="row">
                <div className="col7">
                    <Slider {...settings}>
                        {props.imgSlider.map((i , index)=> {
                            return(
                                <div key={index}>
                                    <img src={i.img} className='imgFluid' alt="" />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <div className="col5">
                    {props.data.map((i , index)=> {
                        return(
                        <div className="content" key={index}>
                            <h1>{i.name}</h1>
                            <p>{i.description}</p>
                            <div className="nav">
                                <a className="btn" onClick={()=> setView(<Naving1/>)}>پکیج برنز</a>
                                <a className="btn" onClick={()=> setView(<Naving2/>)}>پکیج نقره‌ای</a>
                                <a className="btn" onClick={()=> setView(<Naving3/>)}>پکیج طلایی</a>
                            </div>
                            <div className="table">
                                {view}
                            </div>
                            <div className="button">
                                <button className="btn">خرید</button>
                                <a className="btn">مشاوره</a>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    );
}

const Naving1 = () => {
    return(
        <table>
            <thead>
                <tr>
                    <td>لورم ایپسوم 1</td>
                    <td>لورم ایپسوم 2</td>
                    <td>لورم ایپسوم 3</td>
                    <td>لورم ایپسوم 4</td>
                    <td>لورم ایپسوم 5</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td></td>
                </tr>
                <tr>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                </tr>
                <tr>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                </tr>
            </tbody>
        </table>
    )
}

const Naving2 = () => {
    return(
        <table>
            <thead>
                <tr>
                    <td>لورم ایپسوم 1</td>
                    <td>لورم ایپسوم 2</td>
                    <td>لورم ایپسوم 3</td>
                    <td>لورم ایپسوم 4</td>
                    <td>لورم ایپسوم 5</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td></td>
                </tr>
                <tr>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                </tr>
                <tr>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                </tr>
            </tbody>
        </table>
    )
}

const Naving3 = () => {
    return(
        <table>
            <thead>
                <tr>
                    <td>لورم ایپسوم 1</td>
                    <td>لورم ایپسوم 2</td>
                    <td>لورم ایپسوم 3</td>
                    <td>لورم ایپسوم 4</td>
                    <td>لورم ایپسوم 5</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td></td>
                </tr>
                <tr>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                </tr>
                <tr>
                    <td></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                    <td><FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/></td>
                </tr>
            </tbody>
        </table>
    )
}
 
export default Content;