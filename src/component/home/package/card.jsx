import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const CardProduct = styled.div({

    '&> div.row':{

        '&> div.col':{
            margin:'25px 15px 25px 15px',

            '&> div.product':{
                position:'relative',
                borderTop:'5px solid #CDAC81',
                borderRadius:'8px',
                boxShadow:'0 0.5rem 1rem rgb(0 0 0 / 15%)',

                '&> div.itemCenter':{
                    display:'flex',
                    justifyContent:'center',
                    '&> div.icon':{
                        position:'absolute',
                        top:'-25px',
                        width:'45px',
                        height:'45px',
                        backgroundColor:'#CDAC81',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:'50%',
                        color:'#fff',
                    }
                },

                '&> div.content':{
                    padding:'2rem 1.5rem 2rem 1.5rem',
                    borderBottom:'1px solid #dee2e6',
                    textAlign:'center',

                    '& h1':{
                        fontSize:'25px',

                    },

                    '& p':{
                        fontSize:'14px',
                        lineHeight:'2',
                        color:'#5A5A5A',
                    }
                },

                '&> div.price':{
                    padding:'2rem 1.5rem 2rem 1.5rem',
                    borderBottom:'1px solid #dee2e6',
                    textAlign:'center',

                    '& small':{
                        color:'#CDAC81',
                        fontWeight:'bold'
                    },

                    '& p':{
                        fontWeight:'500',
                        fontSize:'24px',
                        marginBlockEnd:'10px',
                        marginBlockStart:'10px',
                    },

                    '& a':{
                        backgroundColor:'#FF0F10',
                        borderColor:'3FF0F10',
                        color:'#fff',
                        padding:'.5rem 1.5rem .5rem 1.5rem',
                        fontSize:'12px',
                        fontWeight:'bold'
                    }
                },

                '&> div.feature':{
                    padding:'2rem 1.5rem 2rem 1.5rem',
                    borderBottom:'1px solid #dee2e6',
                    textAlign:'right',

                    '& p':{
                        borderBottom:'1px solid #dee2e6',
                        paddingBottom:'1rem',
                        color:'#5A5A5A',
                        fontSize:'14px',
                        fontWeight:'500'
                    }
                }

            }
        }
    }
})

const Card = (props) => {
    return ( 
        <CardProduct>
            <div className="row">
                <div className="col">
                    <div className="product">
                        <div className="itemCenter">
                            <div className="icon">
                                <FontAwesomeIcon icon={props.icon}/>
                            </div>
                        </div>
                        <div className="content">
                            <h1>{props.title}</h1>
                            <p>{props.des}</p>
                        </div>
                        <div className="price">
                            <small>تخفیف - {props.discount}%</small>
                            <p><span className="vazir">{props.price}</span> تومان</p>
                            <a className="btn">الان بخرید</a>
                        </div>
                        <div className="feature">

                            {
                                props.features.map((i , index)=>{
                                    return(
                                        <p key={index}><FontAwesomeIcon color="#CDAC81" icon={faCheck}/> {i}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </CardProduct>
    );
}
 
export default Card;