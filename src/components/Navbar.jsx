import React from 'react'
import { useSelector } from 'react-redux'
import { VscAccount } from "react-icons/vsc";
import "./Navbar.css"


const Navbar = () => {
    const count = useSelector(state => state.counter.value)
    console.log(count);
    return (
        <div className="nav_conatainer">
            <div className='top'>

                <VscAccount />
                <h2> Result:{count}</h2>
            </div>
        </div>
    )
}

export default Navbar