import { useContext } from "react";
import Context from "../../../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX  } from '@fortawesome/free-solid-svg-icons'


const Buy = () => {

    const {modal , setModal} = useContext(Context)

    return ( 
        <div className="modal">
            <div className="modalTitle">فرم ثبت سفارش <FontAwesomeIcon onClick={()=> setModal(!modal)} icon={faX}/></div>
            <div className="modalBody">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quas nostrum porro exercitationem est, ex nisi odit a rerum cumque cupiditate similique repellendus ullam illo libero ab debitis maiores quam.
            </div>
            <div className="modalFooter ">
                <button className="btn btnDanger" onClick={()=> setModal(!modal)}>خروج</button>
                <button className="btn btnGold">ارسال</button>
            </div>
        </div>
    );
}
 
export default Buy;