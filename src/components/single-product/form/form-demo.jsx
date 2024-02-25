import { useContext } from "react";
import Context from "../../../context/context";
import FormProduct from "../form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX  } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { toast } from 'react-toastify';



const Demo = () => {

    const {modal , setModal} = useContext(Context)

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

            toast.error('فیلد شماره موبایل اجباری است !');

        } else if  (v.mobile.length !== 11) {

            toast.error('فیلد شماره موبایل باید 11 رقم باشد !');

        } else if (!v.number) {

            toast.error('فیلد تعداد سازمان اجباری است !');

        } else {
            
            toast.success('پیام با موفقیت برای پشتیبانی ارسال شد');

            setModal(false)
        }
    }

    return ( 
        <div className="modal">
            <div className="modalTitle">فرم <FontAwesomeIcon className="pointer" onClick={()=> setModal(!modal)} icon={faX}/></div>
            <div className="modalBody">
                <FormProduct
                input={input}
                error={error}
                handelSubmit={handelSubmit}
                handelChange={handelChange}
                />
            </div>
            <div className="modalFooter ">
                <button className="btn btnDanger" onClick={()=> setModal(!modal)}>خروج</button>
                <button className="btn btnGold" onClick={handelSubmit}>ارسال</button>
            </div>
        </div>
    );
}
 
export default Demo;