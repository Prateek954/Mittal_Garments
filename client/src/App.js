import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Category from "./components/Category/Category";
import Products from "./components/Products/Products";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import NewsLetter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <>
         <BrowserRouter>
             <Header/>
             <Routes>
                 <Route path="/" element={<Home/>} />
                 <Route path="/category/:id" element={<Category/>} />
                 <Route path="/single-product/:id" element={<SingleProduct/>}/>
             </Routes>
             <NewsLetter/>
             <Footer/>
         </BrowserRouter>
        </>
    );
}

export default App;
