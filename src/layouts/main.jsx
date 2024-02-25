import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const Main = () => {
    return (
        <div dir="rtl">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Main;