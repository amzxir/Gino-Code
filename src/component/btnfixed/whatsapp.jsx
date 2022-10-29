import styled from "styled-components";
import WA from "./svg/whatsApp";

const Button = styled.a({
    position:'fixed',
    left:'25px',
    bottom:'25px',
    zIndex:'10000',
    width:'48px',
    height:'48px',

    '&> div.img':{

    }

})

const WhatsApp = () => {

    const link = 'https://web.whatsapp.com/'

    const target = '_blank'

    return ( 
        <Button target={target} href={link}>
            <WA/>
        </Button>
    );
}
 
export default WhatsApp;