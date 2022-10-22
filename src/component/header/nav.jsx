import styled from "styled-components";
import Logo from './images/logo.png'

const Navbar = styled.nav({
    padding:'15px',
    position:'fixed',
    display:'flex',
    width:'100%',

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
        }
    },

    '&> div.linkPage':{

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
    return ( 
        <Navbar>
            <div className="logo">
                <img src={Logo} alt="" />
                <h2>ژینوکد</h2>
            </div>
            <div className="linkPage">
                <ul>
                    {navItem.map((i , index)=> {
                        return(
                            <li key={index}><a href={i.link}>{i.name}</a></li>
                        )
                    })}
                </ul>
            </div>
        </Navbar>
    );
}
 
export default Nav;