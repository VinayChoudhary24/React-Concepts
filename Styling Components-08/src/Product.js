// //STYLING WITH BEM CONVENTION
// import React from "react";
// import ItemDescription from "./ItemDescription";

// //Import CSS file
// import "./Product.css";

// function Product({ name, description, price }) {
//   return (
//     //give className for the CSS
//     <div className="product">
//       <ItemDescription name={name} description={description} />
//       <h3 className="product__error">An error occured</h3>
//       <h2 className="product__price">${price}</h2>
//     </div>
//   );
// }

// export default Product;

//------------------------------------------------------------
//-------------CSS MODULES----------------------------------
//STYLING WITH CSS MODULES

import React from "react";
import ItemDescription from "./ItemDescription";

//Import module.CSS file
import styles from './Product.module.css'

function Product({ name, description, price }) {
  return (
    //give className for the module.CSS is different i.e we use JSX{}
    <div className={styles.product}>
      <ItemDescription name={name} description={description} />

      {/*IMPORTANT:- ERROR HAS tWO DIFFERENT CLASSES WITH THE SAME className BUT STILL IT DOSEN'T OVERWRITE EACH OTHER BECAUSE, modules gives a UNIQUE IDENTIFIER  TO EACH CLASSNAME AND WE CAN CHECK IT BY INSPECT ELEMENT*/}
      <h3 className={styles.error}>An error occured</h3>
      <h2 className={styles.price}>${price}</h2>
    </div>
  );
}

export default Product;


//--------------------------------------------------------------
//--------------------class-based-Component--------------------------------

// import React, { Component } from "react";
// import ItemDescription from "./ItemDescription";

// export default class Product extends Component {
//   constructor(name, description, price) {
//     super();
//     this.props = {
//       name: name,
//       description: description,
//       price: price,
//     };
//   }
//   render() {
//     const { name, description, price } = this.props;
//     return (
//       <div>
//         {/* <h1>{name}</h1>
//         <p>{description}</p>
//         <h2>${price}</h2> */}

//         <ItemDescription name={name}
//         description={description}
//         />
//         <h3>price={price}</h3>

//       </div>
//     );
//   }
// }
