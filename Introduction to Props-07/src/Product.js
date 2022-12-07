// import React from 'react'
// import ItemDescription from './ItemDescription';

// //2. Use {PROPS} here with DESTRUCTURING
// function Product({ name, description, price }) {
//   return (
//     <div>
//         {/*3.This is way and Place to CONSUME PROPS passed above */}
//       {/* <h1>{name}</h1>
//       <p>{description}</p>
//       <h2>${price}</h2> */}

//        {/*4.Here, we also add one more sub-component ItemDescription and we will put only name, description inside the  itemDescription */}
//        <ItemDescription
//        name={name}
//        description={description}
//        />
//        <h2>${price}</h2>
//     </div>
//   )
// }

// export default Product

//--------------------------------------------------------------
//--------------------class-based-Component--------------------------------

import React, { Component } from "react";
import ItemDescription from "./ItemDescription";

export default class Product extends Component {
  constructor(name, description, price) {
    super();
    this.props = {
      name: name,
      description: description,
      price: price,
    };
  }
  render() {
    const { name, description, price } = this.props;
    return (
      <div>
        {/* <h1>{name}</h1>
        <p>{description}</p>
        <h2>${price}</h2> */}

        <ItemDescription name={name} 
        description={description}  
        />
        <h3>price={price}</h3>

      </div>
    );
  }
}
