import { CiSearch, CiShoppingCart } from "react-icons/ci";
import "./Navbar.css"
export const Navbar = () =>{
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
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Interview Question</a></li>
                <li><a href="#">Join Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
        </div>
    )
};