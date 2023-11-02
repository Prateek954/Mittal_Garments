import { useEffect, useContext } from "react";
import "./Home.scss";
import { fetchdatafromapi } from "../../utils/api";
import Banner from "./Banner/Banner";
import Category from "../Home/Category/Category";
import Products from "../Products/Products"
import { Context } from "../../utils/context";
const Home = () => {
    // const {products, setProducts, categories, setCategories } = useContext(Context)
    // useEffect(() => {
    //   getCategories();
    //   getProducts();
    // }, [])
    // const getProducts = () => {
    //     fetchdatafromapi("/api/products?populate=*").then((res) => {
    //         console.log(res);
    //         setProducts(res);
    //     });
    // };
    
    // const getCategories = () => {
    //     fetchdatafromapi("/api/categories?populate=*").then((res) => {
    //         console.log(res);
    //         setCategories(res);
    //     });
    // };

    return (
        <>
        <Banner />
            <div className="main-content">
                <div className="layout">
                    {/* <Category categories={categories} />
                    <Products products={products}/> */}
                </div>
            </div>
        </>
    );
    
};

export default Home;
