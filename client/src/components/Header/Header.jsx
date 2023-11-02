import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// react icons 
import { BiSearchAlt } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai"

// Components
import LogoImg from "../../assets/logo.png"
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context"

// CSS
import "./Header.scss";


const Header = () => {
    // const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    
    return (
        <>
            <header className="header-bg">{/* {`header-bg ${scrolled ? "sticky-header" : ""}`} */}
                
                <div className="content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                         <span className="logo" > <img src={LogoImg} alt="" /> </span>
                    </div>
                    <div className="right">
                        <BiSearchAlt onClick={()=> setShowSearch(true)}/>
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={()=> setShowCart(true)}>
                            <BsCart4 />
                            <span>69</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart = {setShowCart}/>}
            {showSearch && <Search setShowSearch = {setShowSearch}/>}
        </>
    );
};

export default Header;
