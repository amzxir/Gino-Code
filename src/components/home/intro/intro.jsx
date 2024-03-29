import { useContext } from "react";
import styled from "styled-components";
import Context from "../../../context/context";
import IntroImg from './images/hero.svg'
import BottomImg from "./svg/bottom-img";

const Container = styled.div({
    position:'relative',
    marginBottom:'4rem',
    '@media (max-width: 992px)': {
        zIndex:'100000000'
    },
    '&> div.intro':{
        backgroundColor:'#1D2833',
        padding:'3rem 0 3rem 0',

        '@media (min-width: 992px)': {
            paddingBottom:'10rem'
        },

        '&> div.content':{
            textAlign:'center',
            padding:'0 2rem 0 2rem',

            '@media (min-width: 992px)': {
                textAlign:'start',
                marginTop:'6rem',
                display:'flex',
                justifyContent:'space-evenly',
                flexDirection:'row',
            },

            '&> div':{

                marginBottom:'3rem',

                '@media (min-width: 992px)': {
                    flex:'0 0 auto',
                    width:'40%',
                },

                '& h1':{
                    color:'#fff',
                    marginBottom:'3rem',
                    fontWeight:'700',
    
                },
    
                '& p':{
                    color:'#fff',
                    marginBottom:'3rem',
                    fontWeight:'500',
                    lineHeight:'2.17',

                    '@media (max-width: 500px)': {
                        fontSize:'15px',
                    },
                },
    
                '& a.btn':{
                    color:'#fff',
                    fontWeight:'600',
                    backgroundColor:'#FF0F10',
                    borderColor:'#FF0F10',
                    padding:'1rem 3rem 1rem 3rem',
                },
            },

            '& div.imgCenter':{

                '@media (min-width: 992px)': {
                    flex:'0 0 auto',
                    width:'40%',
                },

                '& img':{
                    maxWidth:'100%',
                    height:'auto',

                }
            }
        }
    }
})

const introData = {
    title:'گروه طراحی سامانه آنلاین ژینو' ,
    description:'گروه ژینو فعال در زمینه طراحی و اجرای سامانه آنلاین تحت وب در حوزه‌ی مختلف فروشگاهی،آموزشی،اداری و ...' ,
    buttonName:'اتوماسیون اداری'
}

const Intro = () => {

    const {navItem} = useContext(Context)

    const link = navItem[0].link

    const links = {linkTwo:'product'}


    return ( 
        <Container id={link}>
            <BottomImg/>
            <div className="intro bgImages">
                <div className="content">
                    <div>
                        <h1>{introData.title}</h1>
                        <p>{introData.description}</p>
                        <a href={`#${links.linkTwo}`} className="btn">{introData.buttonName}</a>
                    </div>
                    <div className="imgCenter">
                        <img src={IntroImg} alt="" />
                    </div>
                </div>
            </div>
        </Container>
    );
}
 
export default Intro;