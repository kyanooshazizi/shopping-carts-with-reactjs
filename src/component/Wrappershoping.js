import React, { useContext } from 'react';
import {reducercontex} from "./UseReducer";
import Shopping from "./shopping";
import {Link} from "react-router-dom";
import styles from "./Wrappershoping.module.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Wrappershoping = (props) => {

    const {state,dispach}=useContext(reducercontex);

    const caderfinall=()=>{
      return(
        <div>
          <h5><span className={styles.totalshop}>تعداد خرید:</span>
          <span className={styles.totalshopnumber}>{state.itemcounter}</span></h5>
          <h5><span className={styles.totalshop}>مجموع قیمت خرید ها:</span>
          <span className={styles.totalshopnumber}>{`$ ${state.total}`}</span></h5>
        </div>
      )
    }
    const checkout=()=>{
      toast.success("تسویه حساب با موفقیت انجام شد👲", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
        })
      
        return(
          <div className={styles.checkout}>
          <h5>سبد خریدتون خالی شد</h5>
          <Link to="/products">می خوای بیشتر خرید کنی؟</Link>
          <ToastContainer />

          </div>
                )
      }    


  const Clearshop=()=>{
  
    return(
      <div className={styles.clear}>
      <h5>سبد خرید شما خالی است</h5>
      <Link to="/products">می خوای خریدت رو انجام بدی؟ 😃</Link>
      </div>
            )
  }
        return (
       <div className="container">
        <div className="row">
        <div className="col-sm-12 col-md-8">
         <div>
         {state.selectItems.map( x => <Shopping value={x} key={x.id}/>)}
         </div>
         </div>
         <div className="col-sm-12 col-md-4">
         <div className={styles.boxtotal}>
         {state.itemcounter>0 && caderfinall()}
         {state.checkout&& checkout()}
         {!state.checkout&& state.itemcounter===0 && Clearshop()}
         <button onClick={()=>dispach({type:"CHECKOUT"})} className={styles.btnTsvie}>تسویه حساب</button>
         <button onClick={()=>dispach({type:"CLEAR"})} className={styles.btnClear}>سبد خرید رو خالی کن!</button>
          </div>
         </div>
        </div>
       
       </div>
    );
}

export default Wrappershoping;