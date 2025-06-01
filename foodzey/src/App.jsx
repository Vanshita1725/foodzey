import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from "react-router";
import Home1 from "./Home1";
import Category from "./Category";
import Products from "./Products";
import Pages from "./Pages";
import Blog from "./Blog";
import Element from "./Element";
import Nevbar from "./Componenets/Nevbar";


function App() {


  return (

      <div>
       
        <Routes>
          <Route path="/" element={<Nevbar />}>
            <Route path="/" element={<Home1 />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Pages" element={<Pages />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Element" element={<Element />} />
            </Route>
        </Routes>
      </div>  

  )
}

export default App;
