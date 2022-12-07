//with the help of props component gets re-usable
//they are READ only so we cannot modify after Passing to the Components i.e we will write the components once and use it several times
//PROPS are PASSED from top to bottom i.e pass the props on the top of the  component, till down the products

import React from 'react'
import PropsProduct from './PropsProduct'

function App() {
  return (
    <div>

      {/*here We render the Products, they have name, title, price..  */}
      <PropsProduct name='CC' title='CS' price={23442} />
      <PropsProduct name='AC' title='SS' price={23542} />
      <PropsProduct name='HH' title='AS' price={09088} />
    </div>
  )
}

export default App