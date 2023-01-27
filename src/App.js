import "./App.css";
import Home from "./components/Page/Home/home";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Contact from "./components/Page/Contact/Contact";
import ProductList from "./components/Page/ProductList/product-list";
import Login from "./components/Page/Login/login";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route match="exact" path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="contact">
              <Contact></Contact>
            </Route>
            <Route path="/products">
              <ProductList></ProductList>
            </Route>           
             <Redirect from="/" to="/login" /> 


        
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
