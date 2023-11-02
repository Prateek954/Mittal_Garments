import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <>
        <div className="footer-bg">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo eaque
                        ipsa quae ab illo.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Manimajra Market, sector-13, Chandigarh,134114
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 123 1234 123</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: mittal@garment.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Jeans</span>
                    <span className="text">Tshirts</span>
                    <span className="text">Shirts</span>
                    <span className="text">Joggers</span>
                    <span className="text">Jackets</span>
                    <span className="text">Shoes</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                    <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2023 Panchkula,Haryana.Inc all rights reserved.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;
