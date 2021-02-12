import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";
import NotFound from "./Components/NotFound/NotFound";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Login from "./Components/Login/Login";
import Shipment from "./Components/Shipment/Shipment";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Home from "./Components/Home/Home";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
       
        <Header></Header>
        <Switch>
        <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
