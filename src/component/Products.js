import React, { useContext } from 'react';
import { Shorten , Findstate} from './Helper';
import {Link} from "react-router-dom"; 
import {reducercontex} from "./UseReducer";
import styles from "./Products.module.css";


const Products = ({value}) => {
    const {state,dispach}=useContext(reducercontex);
    const {bool,number}=Findstate(state,value.id);
    return (
            <div className="col-xs-1 col-sm-2 col-md-3">
               <div className={styles.product}>
               {/* start hover for img */}
               <div className={`${styles.ih_item1} ih-item square effect13 left_to_right`}><a href="#">
            <div className="img"><img src={value.image} alt="img"/></div>
               <div className="info">
               <h3>Heading here</h3>
                <p>Description goes here</p>
              </div></a></div>
             {/* end hover img */}
            <h6>{Shorten(value.title)}</h6>
            <span className={styles.price}> {`${value.price} $`}</span>
            <div className={styles.btncard}>
                <Link to={`/products/${value.id}`}>Details...</Link>
                <div id={styles.btn}>
                   {bool?
                   <button className={styles.btnincres} onClick={()=>dispach({type:"INCREAS",pyload:value})}>+</button>:
                   <button className={styles.btnaddcart} onClick={()=>dispach({type:"ADD-ITEM",pyload:value})}>Add to cart</button>}
                  {number>1 && <button className={styles.btndecres} onClick={()=>dispach({type:"DECREAS",pyload:value})}>-</button>}
                 { number===1&&<button className={styles.btndelet} onClick={()=>dispach({type:"REMOVE-ITEM",pyload:value})}>
                <span class="material-symbols-outlined">delete</span>
                    </button>}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Products;
