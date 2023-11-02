import "./Cart.scss";
import {MdClose} from "react-icons/md"
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
const Cart = ({setShowCart}) => {
    return (
        <>
        <div className="cart-bg">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-button" onClick={()=> setShowCart(false)}>
                    <MdClose/>
                    </span>
                </div>
                {/* <div className="empty-cart">
                    <BsCartX/>
                    <span>No products in cart</span>
                    <button className="return-cta">SHOP</button>
                </div> */}
                <CartItem/>
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal:</span>
                        <span className="text total">Rs 1000</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta">CheckOut</button>
                    </div>
                </div>
                
            </div>

        </div>
        </>
    );
};

export default Cart;
