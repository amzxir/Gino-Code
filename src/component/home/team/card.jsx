import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cards = styled.div({
    flex:'0 0 auto',
    width:'23%',

    '@media (max-width: 992px)': {
        width:'45%',
        marginBottom:'1rem',
    },

    '@media (max-width: 500px)': {
        width:'100%',
        marginBottom:'1rem',
    },
    
    '&> div.col3':{

        '&> div.member':{
            borderRadius:'8px',
            borderTop:'5px solid #CDAC81',
            boxShadow:'0 0.5rem 1rem rgb(0 0 0 / 15%)',
            transition:'150ms',

            '&:hover': {
                borderColor:'#FF0F10'
            },

            '&> div.p4':{

                padding:'1.5rem',

                '&> div.imgCenter':{
                    display:'flex',
                    justifyContent:'center',
                    marginBottom:'1.5rem',
    
                    '& img':{
                        maxWidth:'100%',
                        height:'auto',
                        borderRadius:'50%',

                        '@media (max-width: 500px)': {
                            width:'200px',
                            height:'200px',
                        },
                    }
                },
    
                '&> div.content':{
                    textAlign:'center',
                    '& h2':{
                        fontSize:'18px',
                        marginBlockStart:'0'
                    },

                    '& p':{
                        fontSize:'12px',
                        fontWeight:'600',
                        color:'#5A5A5A',
                        marginBlockStart:'0',

                    }
                },
            },

            

            '&> div.media':{
                padding:'1rem',
                backgroundColor:'#CDAC81',
                display:'flex',
                justifyContent:'center',
                borderEndEndRadius:'8px',
                borderEndStartRadius:'8px',
                '&> a':{
                    padding:'0',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    fontWeight:'normal',
                    borderRadius:'8px',
                    width:'38px',
                    height:'38px',
                    color:'#CDAC81',
                    backgroundColor:'#fff',
                    margin:'0px 8px 0px 8px',

                    '&:hover': {
                        color:'#5A5A5A'
                    }
                }
            }

        }

    }
})

const Card = (props) => {

    return ( 
        <Cards>
            <div className="col3">
                <div className="member">
                    <div className="p4">
                        <div className="imgCenter">
                            <img src={props.images} alt="" />
                        </div>
                        <div className="content">
                            <h2>{props.name}</h2>
                            <p>{props.profession}</p>
                        </div>
                    </div>
                    <div className="media">
                        {props.media.map((i , index)=> {
                            return(
                                <a key={index} href={i.url}><FontAwesomeIcon icon={i.icon}/></a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Cards>
    );
}
 
export default Card;