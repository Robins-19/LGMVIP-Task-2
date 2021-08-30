import React from 'react'
import "./Navbar.css"

const Header=({onSetIsClicked})=> {
    const clicked=()=>{
        onSetIsClicked(1);
    }
    
    return (
        <div className="Navbar">
            <ul>
                <li className="brand">Zippy</li>
                <button onClick={clicked}className="button button1">Get Users</button>
            </ul>
        </div>
    )
}

export default Header;