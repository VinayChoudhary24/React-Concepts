import React from 'react';
import Propsitem from './Propsitem';

//Here we pass the props to the main App component i.e name, title, price[use {} curly braces for Destructuring]
function PropsProduct({ name, title, price }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <h3>${price}</h3>

      {/* Here we want to render one more child and pass PROPS to it */}
      <Propsitem name='name' title='title'/>
    </div>
  )
}

export default PropsProduct