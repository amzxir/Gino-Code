import { createContext, useContext, useReducer } from "react";
import appReducer from "./app-reducer";
import data from "../../db/data";

const AppContext = createContext();

const initialState = {
    data:data
}


const AppProvider = ({ children }) => {

    const [ state , dispatch ] = useReducer(appReducer , initialState);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider , useAppContext }