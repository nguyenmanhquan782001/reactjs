import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import queryString from "query-string" ; 
import Footer from "./components/frontend/Footer";
import HeaderHomepage from "./components/frontend/Header/HeaderHomepage";
import AddCategorypage from "./page/backend/AddCategorypage";
import Categorypage from "./page/backend/Categorypage";
import Homepage from "./page/frontend/Homepage";
import ProductDetailPage from "./page/frontend/ProductDetailPage";
import UpdateCategorypage from "./page/backend/UpdateCategorypage";
import Productpage from "./page/backend/Productpage";
import Addproductpage from "./page/backend/AddProductpage";
import AllPage from "./page/frontend/AllPage";
import UpdateProductpage from "./page/backend/UpdateProductpage"; 
import AboutPage from "./page/frontend/AboutPage";
import ContactPage from "./page/frontend/ContactPage";
import Search from "./components/frontend/Search";
import ProductPage from "./page/frontend/ProductPage";
function App() {
  const [products, setProduct] = useState([]);
  const [category, setCategory] = useState([]); 
  const [loading , setLoad] = useState(false) ; 

  //  search
  useEffect(() => { 
    
    const getProduct = async () => {
      try { 
        const response = await fetch(`http://localhost:3006/products`)
        const product = await response.json();
        setProduct(product); 

        
      } catch (error) {
        console.log(error)
      }
    } 
    getProduct(); 
     
  }, []); 

  //
  const onHandleAddPro = async (value) => {
    const response = await fetch("http://localhost:3006/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(value)
    });
    const data = await response.json();
    setProduct([
      ...products,
      data
    ])
  }

  const onHandleRemovePro = async (id) => { 
    alert("Đã xóa sản phẩm này ") ;  

    try {
      await fetch(`http://localhost:3006/products/${id}`, {
        method: "DELETE",
      })
      const newProduct = products.filter((item) => item.id != id) 

      setProduct(newProduct);
    } catch (error) {
      console.log(error)
    }
  }
  const onHandleUpdatePro = async (product) => {
    try {
      await fetch(`http://localhost:3006/products/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      })
      const newProduct = products.map(pro => (pro.id == product.id) ? product : pro)
      setProduct(newProduct)
    } catch (error) {
      console.log(error)

    }
  }
  //  start : category  ; 
  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await fetch("http://localhost:3006/category");
        const categories = await response.json();
        setCategory(categories);
      } catch (error) {
        console.log(error)
      }
    }
    getCategory();
  }, []);
  const onHandleAdd = async (value) => {
    const response = await fetch("http://localhost:3006/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify(value)

    });
    const data = await response.json();
    setCategory([
      ...category,
      data
    ])
  }
  const onHandleRemove = async (id) => {
    try {
      await fetch(`http://localhost:3006/category/${id}`, {
        method: "DELETE"
      })
      const newCategory = category.filter((item) => item.id != id)
      setCategory(newCategory);

    } catch (error) {
      console.log(error)
    }
  }
  const onHandleUpdate = async (categorys) => {
    try {
      await fetch(`http://localhost:3006/category/${categorys.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(categorys)
      })
      const newCategory = category.map(cate => (cate.id == categorys.id ? categorys : cate));
      setCategory(newCategory)
    } catch (Error) {
      console.log(Error)
    } 
  } 
  return (
    <Router>
      <HeaderHomepage  products = {products} category = {category} />
      <div className="fullwidth-template">
        <Switch>
          <Route path="/" exact component={() => <Homepage data={products}  />} />
          <Route path="/product/:id" exact component={() => <ProductDetailPage data={products} />} />
          <Route path="/product" exact component={() => <AllPage data={products} />} /> 
          <Route path = "/about" exact component = {() => <AboutPage /> } /> 
          <Route path = "/contact" exact component =  { () => <ContactPage /> } /> 
          <Route path = "/category/:id/products" exact component = { () => <ProductPage products = {products}  categories = {category}  /> } />
          
          {/* // */}

          <Route path="/admin/list-category" exact component={() => <Categorypage data={category} onRemove={onHandleRemove} />} />
          <Route path="/admin/add-category" exact component={() => <AddCategorypage onAdd={onHandleAdd} />} />
          <Route path="/admin/edit-category/:id" exact component={() => <UpdateCategorypage data={category} onUpdate={onHandleUpdate} />} />
         
          {/* // */}

          <Route path="/admin/list-product" exact component={() => <Productpage data={products} onRemovePro={onHandleRemovePro} />} />
          <Route path="/admin/add-product" exact component={() => <Addproductpage onAddPro={onHandleAddPro} category={category} />} />
          <Route path="/admin/edit-product/:id" exact component={() => <UpdateProductpage data={products} onUpdate={onHandleUpdatePro} category={category} />} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
 
}
export default App;
