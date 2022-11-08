import { useContext } from "react";
import Context from "../../../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX  } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import { useState } from "react";
import { toast } from 'react-toastify';

const Forms = styled.form({

    '&> div.formGroup':{
        marginBottom:'1rem',
    }
})

const Buy = () => {

    const {modal , setModal} = useContext(Context)

    // Function Create Form //
    
    const [input , setInput] = useState({})

    const [error , setError] = useState({})

    const handelChange = (e) => {

        const {name , value} = e.target
        setInput({...input , [name] : value})
    }

    const handelSubmit = (e) => {

        e.preventDefault()
        setError(validate(input))
        console.log(input)

    }

    const validate = (v) => {

        if(!v.name){

            toast.error('فیلد نام و نام خانوادگی اجباری است !');

        } else if (!v.mobile){

            toast.error('فیلد شماره موبایل اجباری است !');

        } else if (v.mobile.length !== 11){

            toast.error('فیلد شماره موبایل باید 11 رقم است !');

        } else if (!v.company){

            toast.error('فیلد نام سازمان اجباری است !');

        } else {

            toast.success('درخواست شما با موفقیت برای پشتیبانی ارسال شد');
        }
    }

    return ( 
        <div className="modal">
            <div className="modalTitle">فرم ثبت سفارش <FontAwesomeIcon onClick={()=> setModal(!modal)} icon={faX}/></div>
            <div className="modalBody">
                <Forms>
                    <div className="formGroup">
                        <input type="text" className="formControl" placeholder="نام و نام خانوادگی" name="name" value={input.name || ''} onChange={handelChange} />
                    </div>
                    <div className="formGroup">
                        <input type="text" className="formControl" placeholder="شماره موبایل" name="mobile" value={input.mobile || ''} onChange={handelChange} />
                    </div>
                    <div className="formGroup">
                        <input type="text" className="formControl" placeholder="نام سازمان" name="company" value={input.company || ''} onChange={handelChange} />
                    </div>
                </Forms>
            </div>
            <div className="modalFooter ">
                <button className="btn btnDanger" onClick={()=> setModal(!modal)}>خروج</button>
                <button className="btn btnGold" onClick={handelSubmit}>ارسال</button>
            </div>
        </div>
    );
}
 
export default Buy;