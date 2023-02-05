import React, { useEffect, useState ,createContext} from 'react';
import axios from "axios";

export const wrapperContext=createContext();
const Getapi = ({children}) => {
const[product,setProduct]=useState([])
useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then(res=>{setProduct(res.data)})
    .catch(err=>{console.log(err)})
},[])
    return (
       <>
            <wrapperContext.Provider value={product}>
               {children}
            </wrapperContext.Provider> 
       </>
   
       
    );
}

export default Getapi;