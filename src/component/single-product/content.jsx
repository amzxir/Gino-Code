import { useState } from "react";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import styled from "styled-components";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import Context from "../../context/context";
import Modal from "../modal/modal";
import Demo from "./form/form-demo";
import Buy from "./form/form-buy";



const Container = styled.div({
    margin:'1.5rem 0rem 1.5rem 0rem',

    '&> div.row':{

        '@media (min-width: 992px)': {
            display:'flex',
            justifyContent:'space-between',
            flexWrap:'wrap',
            flexDirection:'row',
            alignItems:'start',
        },


        '&> div.col7':{
            padding:'0px 15px 0px 15px',
            boxSizing:'border-box',
            marginBottom:'1rem',
            // backgroundColor:'#F7F7F7',
            // padding:'1.5rem',
            // height:'100%',

            '@media (min-width: 992px)': {
                flex:'0 0 auto',
                width:'60%',
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
                width:'40%',
            },

            '&> div.content':{

                '& h1':{
                    fontSize:'20px',
                    color:'#383838',
                },


                '&> p':{
                    fontSize:'15px',
                    lineHeight:'1.7',
                    textAlign:'justify',
                    marginBlockStart:'2rem',
                    marginBlockEnd:'2rem',
                },



            }


       
        },

        '&> div.col12':{
            padding:'1.5rem 1.5rem  0rem  1.5rem',
            boxSizing:'border-box',
            margin:'1rem 0 1rem 0 ',
            height:'100%',
            boxShadow:'0 .25rem .25rem .25rem #dddddd',
            borderRadius:'10px',

            '@media (min-width: 992px)': {
                flex:'0 0 auto',
                width:'100%',
            },

            '&> div.nav':{
                overflow:'auto',
                whiteSpace:'nowrap',
                borderBottom:'1px solid #e2e2e2',
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
        }
    },

    '& .imgFluid':{
        maxWidth:'100%',
        height:'auto'
    },

    '& .imgDots':{
        maxWidth:'100%',
        height:'auto',
    },

    '& .positionImg':{
        position:'absolute',
        right:'0',
        left:'0',
        width:'100%',
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
            <a className="positionImg">
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

    const {modal , setModal} = useContext(Context)

    
    return ( 
        <Container>
            <div className="row">
                <div className="col7">
                    <Slider {...settings}>
                        {props.imgSlider.map((i , index)=> {
                            return(
                                <div key={index}>
                                    <img src={i.img} style={{ borderRadius:'10px' }} className='imgFluid' alt="" />
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
                        </div>
                        )
                    })}
                </div>
                <div className="col12">
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
                    <button className="btn" onClick={()=> setModal('buy')}>خرید</button>
                    <a onClick={()=> setModal('demo')} className="btn">مشاوره و دمو</a>
                </div>
                </div>
            </div>
            <div>
               
                <Modal show={modal==='buy'}>
                    <Buy/>
                </Modal>

                <Modal show={modal==='demo'}>                   
                    <Demo/>
                </Modal>
            
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