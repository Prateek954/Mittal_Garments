import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { MdClose } from "react-icons/md";
const Search = ({ setShowSearch }) => {
    return (
        <>
            <div className="search-bg">
                <div className="form-field">
                    <input type="text"
                        autoFocus
                        placeholder="Search For Products"
                    />
                    <MdClose
                        className="close-btn"
                        onClick={() => setShowSearch(false)}
                    />
                </div>
                <div className="search-result-content">
                    <div className="search-results">
                        <div className="search-result-item">
                            <div className="img-container">
                                <img src={prod} alt="" />
                            </div>
                            <div className="prod-detail">
                                <span className="name">Product name</span>
                                <span className="desc">Product Description</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
