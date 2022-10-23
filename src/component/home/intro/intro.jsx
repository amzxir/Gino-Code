import styled from "styled-components";
import IntroImg from './images/hero.svg'

const Container = styled.div({
    position:'relative',
    marginBottom:'4rem',
    '@media (max-width: 992px)': {
        zIndex:'100000'
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
                    fontWeight:'500'
                },
    
                '& button.btn':{
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
    buttonName:'همین الان شروع کن'
    }

const Intro = () => {
    return ( 
        <Container>
            <div className="intro bgImages">
                <div className="content">
                    <div>
                        <h1>{introData.title}</h1>
                        <p>{introData.description}</p>
                        <button className="btn">{introData.buttonName}</button>
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