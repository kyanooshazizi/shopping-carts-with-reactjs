import React, { useContext } from 'react';
import {wrapperContext} from "./Getapi";
import  Products from './Products';


const Wrapperproduct = (props) => {
    const product=useContext(wrapperContext);
    return (
        <div className="container">
        <div className="row">
        {product.map(item => <Products value={item} key={item.id}/>)};
        </div>

        </div>
         
        
    )
       
}

export default Wrapperproduct;