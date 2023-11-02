import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"
const CartItem = () => {
    return (
    <>
    <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img src={prod} alt="" />
            </div>
            <div className="prod-detail">
                <span className="name">product name</span>
                <MdClose
                className="close-btn"
                />
                <div className="quantity">
                    <span>+</span>
                    <span>1</span>
                    <span>-</span>
                </div>
                <div className="text">
                    <span>3</span>
                    <span>x</span>
                    <span className="highlight">Rs 300</span>
                </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default CartItem;
