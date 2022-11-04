import { useState } from "react";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import styled from "styled-components";
import { faCheckCircle  } from '@fortawesome/free-solid-svg-icons'



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

                    '@media (max-width: 375px)': {
                        display:'flex',
                    },

                    '& button':{
                        backgroundColor:'#FF0F10',
                        borderColor:'#FF0F10',
                        color:'#fff',
                        fontSize:'14px',
                        fontWeight:'bold',
                        margin:'10px',
                        width:'100px',

                    },

                    '& a':{
                        backgroundColor:'#CDAC81',
                        borderColor:'#CDAC81',
                        color:'#fff',
                        fontSize:'14px',
                        fontWeight:'bold',
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
                    display:'flex',
                    // borderRight:'1.5px solid #dddddd',

                    '& a':{
                        // backgroundColor:'#fff',
                        // borderColor:'#dddddd',
                        // borderWidth:'1.5px',
                        // borderRight:'none',
                        // borderBottom:'none',
                        color:'#383838',
                        fontSize:'12px',
                        fontWeight:'bold',
                        borderRadius:'0px !important',
                        width:'50px',
                        padding:'1rem',

                        // '&:hover': {
                        //     borderColor:'#CDAC81',
                        //     backgroundColor:'#CDAC81',
                        //     color:'#fff'
                        // }
                    }
                },

                '&> div.table':{
                    marginTop:'2rem',
                    overflow:'auto',
                    paddingBottom:'.5rem',
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
        borderBottom:'2px solid #FF0F10',
        position:'absolute',
        bottom:'0',
        width:'100%',
        right:'0',
    }


})

const alertDemo = () => {
    toast.info('یپام شما برای مشاهده دمو به پشتیبانی ارسال شد');
}




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

    const dataNav = [
        {name:'پکیج برنز' , nav:<Naving1/>},
        {name:'پکیج نقره‌ای' , nav:<Naving2/>},
        {name:'پکیج طلایی' , nav:<Naving3/>},
    ]

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
                                {dataNav.map((i , index)=> {
                                    return(
                                        <div key={index} style={{ position:'relative'}} onClick={()=> setView(i.nav)}>
                                            <a onClick={()=> setActive(index)} className="btn">{i.name}</a>
                                            <span className={active === index ? 'active' : ''}></span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="table">
                                {view}
                            </div>
                            <div className="button">
                                <button className="btn">خرید</button>
                                <a onClick={alertDemo} className="btn">مشاوره و دمو</a>
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

    const data = [
        {name:'نامه نگاری' , info:[1 , null , 1 , null , null]},
        {name:'کارتابل و گردش مکاتبات' , info:[null , 1 , 1 , null , null]},
        {name:'دبیرخانه تحت وب' , info:[null , null , null , 1 , null]},
        {name:'تبدیل گفتار به متن' , info:[null , 1 , null , null , 1]},
        {name:'چت سازمانی' , info:[null , null , 1 , null , null]},
    ]

    return(
        <table>
            <thead>
                <tr>
                    {data.map((i , index)=> {
                        return(
                            <td key={index}>{i.name}</td>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((i , index)=> {
                    return (
                    <tr key={index}>

                        {i.info.map((i , index)=> {
                            return (
                                
                                <td key={index}>{i === 1 ? <FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/> : ''}</td>
                            )
                        })}
 
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

const Naving2 = () => {

    const data = [
        {name:'مکاتبات دارای طبقه‌بندی' , info:[null , 1 , null , null , null]},
        {name:'پایشگر و هشدار' , info:[null , null , null , 1 , null]},
        {name:'دبیرخانه تحت وب' , info:[null , null , null , 1 , null]},
        {name:'سرویس اطلاع رسانی' , info:[null , 1 , null , null , null]},
        {name:'چت سازمانی' , info:[null , null , 1 , null , null]},
    ]

    return(
        <table>
            <thead>
                <tr>
                    {data.map((i , index)=> {
                        return(
                            <td key={index}>{i.name}</td>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((i , index)=> {
                    return (
                    <tr key={index}>

                        {i.info.map((i , index)=> {
                            return (
                                
                                <td key={index}>{i === 1 ? <FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/> : ''}</td>
                            )
                        })}

                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

const Naving3 = () => {

    const data = [
        {name:'فرم ساز و مدیریت فرآیندها' , info:[1 , null , null , null , null]},
        {name:'فرم ساز فراگستر' , info:[null , 1 , null , null , null]},
        {name:'ارتباط با شبکه‌های اجتماعی' , info:[null , null , null , 1 , null]},
        {name:'مدیریت مستندات' , info:[null , null , null , null , 1]},
        {name:'چت سازمانی' , info:[null , null , 1 , null , null]},
    ]

    return(
        <table>
            <thead>
                <tr>
                    {data.map((i , index)=> {
                        return(
                            <td key={index}>{i.name}</td>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((i , index)=> {
                    return (
                    <tr key={index}>

                        {i.info.map((i , index)=> {
                            return (
                                
                                <td key={index}>{i === 1 ? <FontAwesomeIcon color="#54B435" fontSize={18} icon={faCheckCircle}/> : ''}</td>
                            )
                        })}

                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
 
export default Content;