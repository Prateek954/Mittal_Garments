import RelatedProducts from "./RelatedProducts/RelatedProducts";
import Prod from "../../assets/products/earbuds-prod-1.webp";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
const SingleProduct = () => {
    return (
    <>
    <div className="single_product_main">
        <div className="layout">
            <div className="single_product_page">
                <div className="left">
                    <img src={Prod} alt="" />
                </div>
                <div className="right">
                    <span className="name">Product Name</span>
                    <span className="price">Product Price</span>
                    <span className="desc">Product Description</span>
                    <div className="cart_button">
                        <div className="quantity">
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                        <button className="add_to_cart">
                            <FaCartPlus size={20}/>
                            ADD TO CART
                        </button>
                    </div>
                    <span className="divider"/>
                    <div className="info_item">
                        <span className="bold">
                            Category:
                        <span>Headphones</span>
                        </span>
                        <span className="bold">
                            Share:
                        <span className="social_icons">
                            <FaFacebookF size={16} />
                            <FaTwitter size={16} />
                            <FaInstagram size={16} />
                            <FaLinkedinIn size={16} />
                            <FaPinterest size={16} />
                        </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts/>
        </div>
    </div>
    </>
    );
};

export default SingleProduct;
