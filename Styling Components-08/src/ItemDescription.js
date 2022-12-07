import React from 'react'

function ItemDescription({ name, description }) {
  return (
    <div>
        <p><i>{name}</i></p>
        <p><i>{description}</i></p>
    </div>
  )
}

export default ItemDescription

//-----------------------------------------------------------------
//--------------------class-based-component-------------------------------

// import React, { Component } from "react";

// export default class itemDescription extends Component {
//   constructor(name, description) {
//     super();
//     this.props = {
//       name: name,
//       description: description,
//     };
//   }

//   render() {
//     const { name, description } = this.props;
//     return (
//       <div>
//         <p>
//           <i>{name}</i>
//         </p>
//         <p>
//           <i>{description}</i>
//         </p>
//       </div>
//     );
//   }
// }
