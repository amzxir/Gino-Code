import styled from 'styled-components'
import Logo from './images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'


const Navs = styled.nav({
    position:'fixed',
    top:'0',
    width:'100%',
    right:'0',
    left:'0',
    zIndex:'10000',

    '@media (max-width: 992px)': {
        position:'relative',
    },

    '&> div.navbar':{
        padding:'15px 20px 15px 20px',
        display:'flex',
        zIndex:'1000',

        '@media (max-width: 992px)': {
            backgroundColor:'#fff'
        },

        '&> div.itemNav':{
            display:'flex',

            '&> div.logo':{
                display:'flex',
        
                '& img':{
                    width:'50px',
                    height:'50px',
                },
        
                '& h2':{
                    fontSize:'20px',
                    fontWeight:'bold',
                    marginRight:'1rem',
                    display:'flex',
                    alignItems:'center',
                    marginBlockStart:'0',
                    marginBlockEnd:'0',
                    '@media (min-width: 992px)': {
                        color:'#fff'
                    },
                }
            },
        
            '&> div.linkPage':{

                '@media (max-width: 992px)': {
                    display:'none'
                },
        
                '&> ul':{
                    display:'flex',
        
                    '&> li':{
                        marginRight:'25px',
        
                        '&> a':{
                            fontSize:'15px',
                            fontWeight:'500',
                        }
                    }
                }
            },
        },
    

        '&> div.btnCollapse':{
            display:'flex',
            alignItems:'center',
            marginRight:'auto',
            cursor:'pointer',

            '@media (min-width: 992px)': {
                display:'none'
            },
        }
    },

    '&> div.collapse':{
        backgroundColor:'#fff',

        '&> div.collapseContent':{
            textAlign:'center',

            '&> ul':{

                '&> li':{
                    padding:'5px 0px 5px 0px',
                    '&> a':{
                        fontSize:'15px',
                        fontWeight:'500',
                    }
                }
            }
        }

    },

    '& .openCollapse':{
        height:'200px',
        transition:'800ms',
    },

    '& .CloseCollapse':{
        height:'0px',
        transition:'800ms',
    },

    '& .hidden':{
        opacity:'0',
        visibility:'hidden',
        transition:'150ms',
    },

    '& .show':{
        opacity:'1',
        visibility:'visible',
        transition:'150ms',
    },

    '& .textWhite':{
        color:'#fff',
    },

    '& .textDanger':{
        color:'#FF0F10',
    },

    '& .textDark':{
        color:'#1D2833'
    }

})


const navItem = [
    {id:1 , name:'خانه' , link:'#'},
    {id:1 , name:'درباره ما' , link:'#'},
    {id:1 , name:'پکیج‌ ها' , link:'#'},
    {id:1 , name:'تیم ما' , link:'#'},
    {id:1 , name:'تماس با ما' , link:'#'},
]


const Nav = () => {

    const [open , setOpen] = useState(false)

    const [active , setActive] = useState()

    return ( 
        <Navs>        
            <div className='navbar'>
                <div className="itemNav">
                    <div className="logo">
                        <img src={Logo} alt="" />
                        <h2>ژینوکد</h2>
                    </div>
                    <div className="linkPage">
                        <ul>
                            {navItem.map((i , index)=> {
                                return(
                                    <li key={index} onClick={()=> setActive(index)}><a className={active==index?'textDanger':'textWhite'} href={i.link}>{i.name}</a></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="btnCollapse" onClick={()=> setOpen(!open)}>
                    <FontAwesomeIcon icon={faBars} fontSize='18' color='#747474'/>
                </div>
            </div>
            <div className={open?'collapse openCollapse': 'collapse CloseCollapse'}>
                <div className='collapseContent' style={{ 
                    borderTop:open?'.7px solid #DDDDDD':'',
                    marginLeft:'20px',
                    marginRight:'20px'
                    }}>
                    <ul style={{ display:open?'block' : 'none'}}>
                        {navItem.map((i , index)=>{
                            return(
                                <li key={index} onClick={()=> setActive(index)}><a style={{ color:active===index?'#FF0F10':'#1D2833' }} className={open?'show':'hidden'} href={i.link}>{i.name}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </Navs>
    );
}
 
export default Nav;