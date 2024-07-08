import {createContext, useState} from "react";
export const Formcontext=createContext();

export const FormProvider=({childComp})=>{
    const[localDB,setDB]=useState([])
return(
    <Formcontext.Provider
    value={{localDB,setDB}}>
{childComp}
</Formcontext.Provider>
)
}