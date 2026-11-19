import { CiSearch, CiShoppingCart } from "react-icons/ci";
import "./Navbar.css"
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
export const Navbar = () =>{
    const[isopen, serIsopen] = useState(false);
    return(
        <div className="nav-bar">
        <nav>
            <div className="heading">
                <h1 className="logo">WahabTechX</h1>
            </div>
            <div className="search-field">
                <input 
                type="text"
                placeholder="Search React Topics"
                />
                <button> 
                    <CiSearch />
                 </button>
            </div>
            <button
            className="hamburger"
            onClick={() => serIsopen(!isopen)}
            aria-label="Toggle Navigation"
            aria-expanded= {isopen}
            >
                {isopen ? <FiX/> : <FiMenu />}
            </button>
            <ul className={isopen ? "active": ""}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Interview Question</a></li>
                <li><a href="#">Join Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
        </div>
    )
};