import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {wrapperContext} from "./Getapi";
import styles from "./Detailproduct.module.css";

const Detailproduct = (props) => {
    const data=useContext(wrapperContext);
    const id=props.match.params.id;
    const product=data[id-1];
    return (
        <div className="container my-4">
             <div className="row">
                  <div className="col-sm-12 col-md-6">
                  <img src={product.image} alt="img" className={styles.imgdetails}/>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div  className={styles.textdetails}>
                             <h4 className={styles.title}>{product.title}</h4>
                              <p>{product.description}</p>
                              <h5 className={styles.category}><span >category:</span> {product.category}</h5>
                              <div className={styles.price}>
                              <h5>{product.price} $</h5>
                              <Link to="/products">Home product</Link>
                              </div>
                    </div>
                  </div>
             </div>
        </div>
    );
};

export default Detailproduct;