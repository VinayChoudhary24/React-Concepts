// import "./App.css";
import Product from "./Product";

import styles from "./App.module.css"

function App() {
  return (
    <div>
      <h2 className={styles.error}>Error</h2>
      <Product name="One Plus 6" description="Best Mobile phone" price={500} />

      <Product name="Acer" description="The Fastest laptop" price={2320} />

      <Product
        name="Fully automatic table"
        description="Best home furniture"
        price={89.67}
      />
    </div>
  );
}

export default App;

//------------------------------------------------------------
//---------------class-Based-component-------------------------------------

// import React, { Component } from 'react';
// import Product from './Product';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//        {/*1.This is where we Render the PRODUCT and Insert the INFORMATION for the Product, Now we Create a Product.JS file */}

//         <Product
//         name='One Plus 6'
//         description='Best Mobile phone'
//         price={500} />

//         <Product
//         name='Acer'
//         description='The Fastest laptop'
//         price={2320} />

//         <Product
//         name='Fully automatic table'
//         description='Best home furniture'
//         price={89.67} />

//       </div>
//     )
//   }
// }
