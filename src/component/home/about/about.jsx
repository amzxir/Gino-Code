import { useContext } from "react";
import styled from "styled-components";
import Context from "../../../context/context";
import images from './images/about.svg'

const Container = styled.div({
    padding:'0px 4rem 0px 4rem',
    marginBottom:'4rem',

    '@media (max-width: 500px)': {
        padding:'0px 1.5rem 0px 1.5rem',
    },
    
    '&> div.row':{

        '@media (min-width: 992px)': {
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
        },

        '&> div.content':{
            marginBottom:'5rem',

            '@media (min-width: 992px)': {
                flex:'0 0 auto',
                width:'45%'
            },

            '& h1':{
                fontWeight:'700',
                lineHeight:'1.2',
                position:'relative',
                paddingBottom:'30px',
                textAlign:'center',

            },

            '& p':{
                lineHeight:'2',
                color:'#5A5A5A',
            }
        },

        '&> div.imgCenter':{

            '@media (min-width: 992px)': {
                flex:'0 0 auto',
                width:'45%'
            },

            '& img':{
                maxWidth:'100%',
                height:'auto',
            }
        }
    }
})


const data = {
    description:'گروه ژینو از سال ۱۳۹۴ شروع به فعالیت در زمینه طراحی و کدنویسی پلتفرم های تحت وب نموده . در این راستا با شرکت ها و سامانه های زیادی همکاری داشته‌ایم،بعد از گذشت ۶ سالاز شروع فعالیت مجموعه یکپارچه، سازمان‌دهی شده و حرفه ای را در ژینو تشکیل اده ایم. فعالجت اصلی ژینو راه اندازی سامانه های اداری تحت وب، استارت‌آپ های نوپا می باشد، این صفحه جهت حضور گروه طراحی وب سایت ژینو در صفحات وب ایجاد شده است لذا میتوانید با ارسال پیام و شماره تماس خود در پایین صفحه نسبت به هماهنگی تماس تلفنی و مشاوره و یا جلسه‌ی حضوری اقدام فرمایید.', 
    img:images,
}

const AboutUs = () => {

    const {navItem} = useContext(Context)

    const link = navItem[1].link

    return ( 
        <Container id={link}>
            <div className="row">
                <div className="content">
                    <h1 className="contentAfter">به <span className="textGold">ژینوکد</span> خوش آمدید</h1>
                    <p>{data.description}</p>
                </div>
                <div className="imgCenter">
                    <img src={data.img} alt="" />
                </div>
            </div>
        </Container>
    );
}
 
export default AboutUs;