import React from "react";
import { Form } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <main className="contact-container ">
      <div className="foot-container ">
        <div className="row d-flex align-items-center">
          <div className=" col-md-4 offset-md-1">
            <h2 style={{ color: "brown" }}>
              Let's handle your <br /> project professionally.
            </h2>
            <p style={{ color: "black" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              eveniet necessitatibus corrupti minima.
            </p>
          </div>
          <div className="col-md-5 offset-md-1 pt-5 ">
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Your email address" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Your name/company name"
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control 
                  as="textarea"
                  placeholder="Your message...."
                  rows="3"
                />
              </Form.Group>
              <button className=" shop-btn">Send</button>
            </Form>
          </div>
        </div>
        <div className="text-center mt-5  ">
        <small >Copyright Aifa, 2021</small>
        </div>
       
      </div>
    </main>
  );
};

export default Footer;
