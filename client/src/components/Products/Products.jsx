import "./Products.scss";
import Product from "../Products/Product/Product";
const Products = ({innerPage,headingText,RelatedPage}) => {
    return (
    <>
    <div className="products-container">
        {!innerPage && <div className="sec-heading"> {headingText= "Trending In Casual Wear"} </div>}
        <div className="product-item">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
        <br/>
        {!innerPage && !RelatedPage && <div className="sec-heading" > {headingText= "Trending In Sports Wear"} </div>}
        <div className="product-item">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
        <br/>
        {!innerPage && !RelatedPage && <div className="sec-heading"> {headingText ="Trending In Accessories"} </div>}
        <div className="product-item">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
    </>
    );
};

export default Products;
