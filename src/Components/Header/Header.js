import React, { useContext } from "react";
import { Link } from "react-router-dom";
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Button,Navbar,Nav,Form,FormControl,Container } from 'react-bootstrap';
import "./Header.css";
import logo1 from '../../images/logo1.jpg';
import { UserContext } from "../../App";
const Header = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  console.log("name",loggedInUser.displayName);
  return (
    <div>
    <Container>
        <Navbar  expand="lg" sticky="top" >
            <img className="logo1" src={logo1}  alt="" />
           
                
                <Nav className="ml-auto px-5 d-flex align-items-centeR">
                   <li> <Link   to="/home">Home</Link></li>
                   <li> <Link  to="/shop">Products</Link></li>
                    <li><Link   to="/review">Review</Link></li>
                    <li><Link   to="/shipment">Shipment</Link></li>
                  
                    <li><Link   to="/inventory">Manage Inventory</Link></li>
                   <li> <Link   to="/contact">Contact</Link></li>
                  {
                    loggedInUser.email?
                    <>
                       <li><Link   to="/login">{loggedInUser.displayName}</Link></li>
                       <li>
              <Link to="/" >
                <button style={{background:"yellow",fontSize:"18px",fontWeight:"600"}}
                  onClick={() => setLoggedInUser({})}
                  className="btn btn-rounded"
                >
                  Sign Out
                </button>
              </Link>
            </li>
                    </>
                    :
                    <li><Link   to="/login"><FontAwesomeIcon icon={faUser} /></Link></li>
                  }
                    <li><Link   to="/review"><FontAwesomeIcon icon={faCartPlus} /></Link></li>
                    
                    
                    

                </Nav>
            
        </Navbar>
    </Container>
</div>
  );
};

export default Header;

{/* <ul>
             <li className="nav-item">
               <Link className="text-link" to="/home">
                 Home
               </Link>
             </li>
             <li className="nav-item">
               <Link className="text-link" to="/shop">
                Shop
              </Link>
             </li>
            <li className="nav-item">
               <Link className="text-link" to="/review">
                 Order Review
               </Link>
             </li>
             <li className="nav-item">
               <Link className="text-link" to="/contact">
                 Contact
               </Link>
             </li>
             <li className="nav-item" id="cart-title">
               {" "}
               <Link className="text-link" to="/login">
               <FontAwesomeIcon icon={faUser} />
               </Link>
            </li>
            <li className="nav-item" id="cart-title">
              {" "}
              <Link className="text-link" to="cart">
                <FontAwesomeIcon icon={faCartPlus} />
              </Link>               
              <span id="cart-total">0</span> 
  </li>
            
   <li className="nav-item" id="cart-title">
        
             <button onClick={()=>setLoggedInUser({})}>Sign Out</button>
              </li>
            </ul> */}