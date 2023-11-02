import Products from "../../Products/Products";
const RelatedProducts = () => {
    return (
        <div className="related-products">
            <Products headingText="Related Products" RelatedPage={true}/>
        </div>
    );
};

export default RelatedProducts;
