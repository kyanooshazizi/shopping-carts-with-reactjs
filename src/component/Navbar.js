import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {reducercontex} from "./UseReducer";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
    const {state}=useContext(reducercontex);
    return (
        <div className={`container-fluid ${styles.navbar_wrapper}`} >
          <div className="row">
            <div className={"container"}>
            <div className={styles.navbar}>
                 <Link to="/shopping" className={styles.numnershop_link}>
                 <span className="material-symbols-outlined">
                 shopping_cart_checkout
                 </span>
                 <span id={styles.numnershop}>{state.itemcounter}</span>
                 </Link>
                 <Link to="/products">محصولات</Link>
            </div>
            </div>
          </div>
        </div>
    );
};

export default Navbar;