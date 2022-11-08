import { useState } from "react";
import styled from "styled-components";
import { toast } from 'react-toastify';


const Container = styled.div({
    
    '&> form':{
        
        '&> div.formGroup':{
            marginBottom:'1rem',
        },
    
        '& .btnDan':{
            color:'#fff',
            fontWeight:'600',
            backgroundColor:'#FF0F10',
            borderColor:'#FF0F10',
            padding:'0.375rem 0.75rem',
            width:'100%'
        }
    }

})

const Form = () => {

    const [input , setInput] = useState({})

    const [error , setError] = useState({})

    const handelSubmit = (e) => {
        e.preventDefault()
        setError(validate(input))
        console.log(input)

    }

    const handelChange = (e) => {
        const {name , value} = e.target
        setInput({...input , [name]: value})

    }

    const validate = (v) => {

        if (!v.name) {

            toast.error('فیلد نام و نام خانوادگی اجباری است !');

        } else if (!v.mobile) {

            toast.error('فیلد موبایل اجباری است !');

        } else if(v.mobile.length !== 11) {

            toast.error("شماره موبایل باید 11 رقم باشد");

        }else if (!v.message) {

            toast.error('فیلد پیام اجباری است !');

        } else {

            toast.success('پیام با موفقیت ارسال شد');
        }
    }

    return ( 
        <Container>
            <form onSubmit={handelSubmit}>
                <div className="formGroup">
                    <input type="text" className="formControl" name="name" value={input.name || ''} onChange={handelChange} placeholder="نام و نام خانوادگی" />
                </div>
                <div className="formGroup">
                    <input type="text" className="formControl" name="mobile" value={input.mobile || ''} onChange={handelChange} placeholder="شماره موبایل" />
                </div>
                <div className="formGroup">
                    <textarea type="text" className="formControl" name="message" value={input.message || ''} onChange={handelChange} placeholder="پیام" ></textarea>
                </div>
                <button className="btn btnDan">ارسال</button>
            </form>
        </Container>
    );
}
 
export default Form;