import React from 'react'

function Propsitem({ name, title }) {
  return (
    <div>
      <p>{name}</p>
      <p>{title}</p>
    </div>
  );
}

export default Propsitem