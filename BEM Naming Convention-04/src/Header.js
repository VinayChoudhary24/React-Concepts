import React from 'react'

function Header() {
  return (
    //here, header is the BLOCK
    <div className="header"> 
        
        {/*header__title, header__user are ELEMENTS */}
        <h1 className="header__title">This is header</h1>
        <h2 className="header__user">Vinay</h2>
    </div>
  )
}

export default Header