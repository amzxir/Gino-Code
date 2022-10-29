import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faMapMarked , faPhoneAlt , faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram , faTwitter , faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Form from "./form";
import { useContext } from "react";
import Context from "../../context/context";


const Container = styled.footer({

    '&> div.imagesFooter':{
        backgroundColor:'#1D2833',
        padding:'8rem 3rem 3rem 3rem',
        position:'relative',

        '&> svg':{
            position:'absolute',
            top:'-1px',
            width:'100%',
            right:'0',
            left:'0',
        },

        '&> div.row':{
            '@media (min-width: 992px)': {
                display:'flex',
                justifyContent:'space-between',
                flexWrap:'wrap',
                marginTop:'6rem',
                alignItems:'center'
            },

            '@media (max-width: 992px)': {
                textAlign:'center',
                marginRight:'auto',
                marginLeft:'auto',
            },

            
            '&> div.col6':{
                marginBottom:'2rem',
                '@media (min-width: 992px)': {
                    flex:'0 0 auto',
                    width:'33.3%',
                },
                '&> ul':{

                    '&> li':{
                        marginBottom:'.5rem',

                        '& a':{
                            color:'#fff',
                            fontSize:'15px',
                            fontWeight:'500'
                        }
                    }
                },

                '& p':{
                    fontSize:'20px',
                    fontWeight:'700',
                    color:'#fff',
                },

                '&> div':{
                    marginBottom:'.5rem',

                    '& a':{
                        color:'#fff',
                        fontSize:'15px',
                        fontWeight:'bold',
                    }
                },

                '&> div.cardForm':{
                    backgroundColor:'#F2F2F2',
                    padding:'1.5rem 3rem 1.5rem 3rem',
                    borderRadius:'10px',

                    '@media (max-width: 992px)': {
                        marginRight:'auto',
                        marginLeft:'auto',
                        maxWidth:'50%',
                    },
        
                }
            }
        },

        '&> div.media':{
            display:'flex',
            justifyContent:'center',

            '& a':{
                width:'35px',
                height:'35px',
                borderRadius:'35px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                border:'1px solid #fff',
                transition:'.3s',
                color:'#fff',
                margin:'10px'

            }
        }
    },


    '& .col2':{
        '@media (min-width: 992px)': {
            width:'18% !important',
        },
    },

})

const relationship = [
    {content:' البرز ، جهانشهر' , icon:faMapMarked , link:'#'},
    {content:'0937 902 6444 - 02691010046 - 02691010047 - 02691010048 ' , icon:faPhoneAlt , link:'#'},
    {content:'info@example.com ' , icon:faSquareEnvelope , link:'#'},

]

const media = [
    {icon:faInstagram , url:'#'},
    {icon:faTwitter , url:'#'},
    {icon:faLinkedinIn , url:'#'},

    
]


const Footer = () => {

    const {navItem , active , setActive} = useContext(Context) 

    return ( 
        <Container>
            <div className="imagesFooter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,0L48,0C96,0,192,0,288,42.7C384,85,480,171,576,170.7C672,171,768,85,864,74.7C960,64,1056,128,1152,165.3C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                <div className="row">
                    <div className="col6 col2">
                        <ul>
                            {navItem.map((i , index)=> {
                                return(

                                    <li key={index} onClick={()=> setActive(index)} ><a href={`#${i.link}`}><FontAwesomeIcon fontSize={14} icon={faChevronRight} /> {i.name}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col6">
                        <p>در تماس باشید</p>
                        {relationship.map((i , index)=> {
                            return(
                                <div key={index}><a className="content vazir" href={i.link}><FontAwesomeIcon color="#CDAC81" icon={i.icon}/> {i.content}</a></div>
                            )
                        })}
                    </div>
                    <div className="col6">
                        <div className="cardForm">
                            <Form/>
                        </div>
                    </div>
                </div>
                <div className="media">
                    {media.map((i , index)=> {
                        return(
                            <a key={index} href={i.url}><FontAwesomeIcon icon={i.icon}/></a>
                        )
                    })}
         

                </div>
            </div>
        </Container>
    );
}
 
export default Footer;