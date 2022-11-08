import { useState } from "react";
import styled from "styled-components";


const Container = styled.div({
    // '@media (min-width: 992px)': {
    //     flex:'0 0 auto',
    //     width:'60%',
    // },

    marginBottom:'1.5rem',
    width:'100%',
    boxShadow:'0 .25rem .25rem .25rem #dddddd',
    borderRadius:'10px',
    padding:'1.5rem',

    '&> div.nav':{
        borderBottom:'1px solid #e2e2e2',
        display:'flex',
        '& a':{
            display:'inline-block',
            margin:'10px',
            fontSize:'14px',
            fontWeight:'700',
            lineHeight:'2.17',
            color:'#81858b',
            cursor:'pointer',

            
        },
    },

    '&> div.tab':{

        '&> p':{

            fontSize:'15px',
            lineHeight:'2',
            color:'#232933',
            textAlign:'justify',
        },

        '&> div.row':{
            borderBottom:'2px dashed #e2e2e2',
            display:'flex',
            justifyContent:'space-between',
            flexDirection:'row',
            whiteSpace:'wrap',

            '&> div.col4':{
                flex:'0 0 auto',
                width:'30%',
                fontSize:'15px',
                fontWeight:'bold',
                color:'#81858b',
            },

            '&> div.col8':{
                flex:'0 0 auto',
                width:'70%',
                fontSize:'14px',
                fontWeight:'500',
                color:'#81858b',
            }
        },

        '&> div.comment':{
            fontSize:'15px',
            lineHeight:'2',
            color:'#232933',
            textAlign:'justify',
            margin:'2rem 0rem 2rem 0rem',
            border:'1px solid #e2e2e2',
            padding:'1rem',
            borderRadius:'10px',
            boxShadow:'0 .125rem .25rem #dddddd',

        }
    },

    '& .active':{
        borderBottom:'2px solid #FF0F10',
        position:'absolute',
        bottom:'0',
        width:'100%',
        right:'0',
    }
})

const Naving = () => {

    const [nav , setNav] = useState(<Tab1/>)

    const data = [
        {name:'توضحیات' , nav:<Tab1/>},
        {name:'مشخصات' , nav:<Tab2/>},
        {name:'نظرات' , nav:<Tab3/>},
    ]

    const [active , setActive] = useState(false)


    return ( 
        <Container>
            <div className="nav">
                {data.map((i , index)=> {
                    return(
                        <div style={{ position:'relative'}} key={index} onClick={()=> setNav(i.nav)}>
                            <a onClick={()=> setActive(index)}>{i.name}</a>
                            <span  className={active === index ? 'active' : ''}></span>
                        </div>
                    )
                })}
                
            </div>
            <div className="tab">
                {nav}
            </div>
        </Container>
    );
}

const Tab1 = () => {

    const data = [
        {description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'}
    ]

    return(
        <>
        {data.map((i , index)=> {
            return(
                <p key={index}>{i.description}</p>
            )
        })}
        </>
    )
}

const Tab2 = () => {

    const data = [
        {name:'پکیچ برنز' , info:['کارتابل و گردش مکاتبات' , 'دبیرخانه تحت وب' , 'تبدیل گفتار به متن' , 'چت سازمانی']},
        {name:'پکیچ نقره ای' , info:['مکاتبات دارای طبقه‌بندی' , 'پایشگر و هشدار' , 'دبیرخانه تحت وب' , 'سرویس اطلاع رسانی' , 'چت سازمانی ']},
        {name:'پکیچ طلایی' , info:['کارتابل و گردش مکاتبات' , 'دبیرخانه تحت وب' , 'تبدیل گفتار به متن' , 'چت سازمانی']},
    ]

    return(
        <>
        {data.map((i , index)=> {
            return(
                <div key={index} className="row">
                    <div className="col4">
                        <p>{i.name}</p>
                    </div>
                    <div className="col8">
                        {i.info.map((i , index)=> {
                            return(
                                <p key={index}>{i}</p>
                            )
                        })}
                    </div>
            </div>
            )
        })}

        </>
    )
}

const Tab3 = () => {

    const data = [
        {comment:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'},
        {comment:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'}
    ]

    return(
        <>
        {data.map((i , index)=> {
            return(
            <div key={index} className="comment">{i.comment}</div>
            )
        })}
        </>
    )
}

 
export default Naving;