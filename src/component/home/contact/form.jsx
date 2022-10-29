import { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';


const Forms = styled.div({
    marginBottom:'3rem',

    '@media (min-width: 992px)': {
        flex:'0 0 auto',
        width:'40%',
    },

    '&> form':{

        '&> div.row':{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            flexWrap:'wrap',
            '&> div.formGroup':{
                
                '& input':{

                }
            }
        },

    },

    '& .col6':{
        flex:'0 0 auto',
        width:'48%',
        marginBottom:'1rem',
    },

    '& .col12':{
        flex:'0 0 auto',
        width:'100%',
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
})

const Form = () => {

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
        
        if (!v.name) {

            toast.error('فیلد نام و نام خانوادگی خالی است !');

        } else if (!v.email) {

            toast.error('فیلد ایمیل خالی است !');

        } else if (!v.subject) {

            toast.error('فیلد موضوع خالی است !');

        } else if (!v.message) {

            toast.error('فیلد پیام خالی است !');

        } else {
            toast.success('پیام با موفقیت ارسال شد');
        }
    }

    const returnIsvalidated=(field,value)=>{
        switch (field) {
                case 'email':
                return value?.includes('@')?true:false
                break;
            
                case 'name':
                return value?true:false
                break;

                case 'subject':
                return value?true:false
                break;

                case 'message':
                return value?true:false
                break;
        }
            return true 
    }

    return ( 
        <Forms>
            <form onSubmit={handelSubmit}>
                <div className="row">
                    <div className="col6">
                        <div className="formGroup">
                            <input type="text" style={{ 
                                borderColor:returnIsvalidated('name' , input.name)?'#379237' :'#ced4da'}} className="formControl" name="name" value={input.name || ''} onChange={handelChange} placeholder="نام و نام خانوادگی" />
                        </div>
                    </div>
                    <div className="col6">
                        <div className="formGroup">
                            <input type="text" style={{ borderColor:returnIsvalidated('email' , input.email)?'#379237' :'#ced4da' }} className="formControl" name="email" value={input.email || ''} onChange={handelChange} placeholder="ایمیل" />
                        </div>
                    </div>
                    <div className="col12">
                        <div className="formGroup">
                            <input type="text" style={{ borderColor:returnIsvalidated('subject' , input.subject)?'#379237' :'#ced4da' }} className="formControl" name="subject" value={input.subject || ''} onChange={handelChange} placeholder="موضوع"/>
                        </div>
                    </div>
                    <div className="col12">
                        <div className="formGroup">
                            <textarea className="formControl" style={{ borderColor:returnIsvalidated('message' , input.message)?'#379237' :'#ced4da' }} rows="5" name="message" value={input.message || ''} onChange={handelChange}  placeholder="پیام"></textarea>
                        </div>
                    </div>
                    <div className="col12">
                        <button className="btn btnDan">ارسال</button>
                    </div>
                </div>
            </form>
            <ToastContainer
                rtl={true}
                theme="dark"
                style={{ zIndex:'10000000' }}
            />
        </Forms>
    );
}
 
export default Form;