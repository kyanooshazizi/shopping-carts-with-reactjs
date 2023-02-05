import React, { useContext } from 'react';
import {Shorten, Findstate} from "./Helper";
import {reducercontex} from "./UseReducer";
import styles from "./Wrappershoping.module.scss";

const Shopping = (props)=>{
const {state,dispach}=useContext(reducercontex);
const {value}=props;
const {number}=Findstate(state,value.id);

    return (
       <div className={styles.cartshoping}>
       <div className={styles.cartshoping_img}>
       <img src={value.image} alt={value.title}/>
       </div>
       <div className={styles.cartshopingtext}>
       <h5>{Shorten(value.title)}</h5>
       <h5>{value.price} $</h5>
       </div>
       <div className={styles.cartshopingnumber}>
       <p>{number}</p>
       </div>
       <div className={styles.cartshopingbtn}>
       <button onClick={()=>dispach({type:"INCREAS",pyload:value})}>+</button>
    {number>=2?<button onClick={()=>dispach({type:"DECREAS",pyload:value})} className={styles.btndecres}>-</button>:
    <button onClick={()=>dispach({type:"REMOVE-ITEM",pyload:value})} className={styles.btndelet}><span class="material-symbols-outlined">delete</span></button>}
       </div>
       </div>
    );  
};

export default Shopping;