import { useState } from "react";
import styled from "styled-components";
import { toast } from 'react-toastify';


const Container = styled.div({
    '@media (min-width: 992px)': {
        flex:'0 0 auto',
        width:'30%',
    },
    width:'100%',

    '&> div.card':{
        // backgroundColor:'#F7F7F7',
        boxShadow:'0 .125rem .25rem #dddddd',


        '&> form.cardBody':{
            padding:'1.5rem',
            marginRight:'auto',
            marginLeft:'auto',


            '&> p':{
                fontSize:'18px',
                marginBlockStart:'0',
                fontWeight:'500',
                
            },

            '&> div.formGroup':{
                marginBottom:'1rem',
                
                '& input':{

                }
            },

            '&> button':{
                backgroundColor:'#FF0F10',
                borderColor:'#FF0F10',
                color:'#fff',
                width:'100%',
            }
        }
    }
})


const FormProduct = () => {

    const [input , setInput] = useState({})

    const [error , setError] = useState({})

    const handelChange = (e) => {
        const {name , value} = e.target
        setInput({...input , [name]: value})

    }

    const handelSubmit = (e) => {
        e.preventDefault()
        setError(validate(input))
        console.log(input)
    }

    const validate = (v) => {
        
        if(!v.mobile){

            toast.error('فیلد شماره موبایل خالی است !');

        } else if  (v.mobile.length !== 11) {

            toast.error('فیلد شماره موبایل باید 11 رقم باشد !');

        } else if (!v.number) {

            toast.error('فیلد تعداد سازمان خالی است !');

        } else {
            
            toast.success('پیام با موفقیت برای پشتیبانی ارسال شد');
        }
    }

    return ( 
        <Container>
            <div className="card">
                <form onSubmit={handelSubmit} className="cardBody">
                    <p>فرم ثبت سفارش</p>
                    <div className="formGroup">
                        <input type="text" className="formControl" placeholder="شماره موبایل" name="mobile" value={input.mobile || ''} onChange={handelChange}  />
                    </div>
                    <div className="formGroup">
                        <select onChange={handelChange} className="formControl" name="number">
                            <option value={''}>تعداد سازمان</option>
                            <option value={10 || input.number}>10</option>
                            <option value={25 || input.number}>25</option>
                            <option value={50 || input.number}>50</option>
                            <option value={100 || input.number}>100</option>
                        </select>
                    </div>
                    <button className="btn">ارسال</button>
                </form>
            </div>
        </Container>
    );
}
 
export default FormProduct;