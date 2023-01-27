// import React from "react";
// import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

// import "./footer.scss";

// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row>
//           <Col lg="3" md="4" sm="6">
//             <div className=" footer__logo text-start">
//               <img src={"data:image/jpeg;base64,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"} alt="logo" />
//               <h5>BIZZ3</h5>
//               <h1>About us</h1>
//               <p>
//                 Bizz3 is a Bussiness Aggregator Platform for all the Bussiness
//               </p>
//             </div>
//           </Col>

//           <Col lg="3" md="4" sm="6">
//             <h5 className="footer__title">Product Categories</h5>
//             <ListGroup className="Products">
//               <ListGroupItem className="Products">
//                 <span>Emulsion Paints</span>
//                 <span>Interior Paints</span>
//                 <span>Exterior Paints</span>
//                 <span>Wood Paints</span>
//                 <span>Primer</span>
//                 <span>Waterproofing</span>
//               </ListGroupItem>
//             </ListGroup>
//           </Col>

//           <Col lg="3" md="4" sm="6">
//             <h5 className="footer__title">Contact us</h5>
//             <ListGroup className="Products">
//               <ListGroupItem className=" Products border-0 ps-0">
//                 <p>Location: I2IT College</p>
//               </ListGroupItem>
//               <ListGroupItem className=" Products border-0 ps-0">
//                 <span>Phone: 7415837969</span>
//               </ListGroupItem>

//               <ListGroupItem className=" Products border-0 ps-0">
//                 <span>Email: Bizz3@gmail.com</span>
//               </ListGroupItem>
//             </ListGroup>
//           </Col>

//           <Col lg="3" md="4" sm="6">
//             <h5 className="footer__title">Newsletter</h5>
//             <p>Subscribe our newsletter</p>
//             <div className="newsletter">
//               <input type="email" placeholder="Enter your email" />
//               <span>
//                 <i class="ri-send-plane-line"></i>
//               </span>
//             </div>
//           </Col>
//         </Row>

//         <Row className="mt-5">
//           <Col lg="6" md="6">
//             <p className="copyright__text">
//               Copyright - 2023, website made by Bizz3. All Rights
//               Reserved.
//             </p>
//           </Col>
//           <Col lg="6" md="6">
//             <div className="social__links d-flex align-items-center gap-4 justify-content-end">
//               <p className="m-0">Follow: </p>
//               <span>
//                 {" "}
//                 <Link className="Link" to={"./home"}>
//                   <i class="ri-facebook-line"></i>
//                 </Link>
//               </span>

//               <span>
//                 <Link className="Link" to={"./home"}>
//                   <i class="ri-github-line"></i>
//                 </Link>
//               </span>

//               {/* <span>
//                 {" "}
//                 <Link to=" https://www.youtube.com/c/MuhibsTechDiary">
//                   <i class="ri-youtube-line"></i>
//                 </Link>{" "}
//               </span> */}

//               <span>
//                 {" "}
//                 <Link className="Link" to={"./home"}>
//                   <i class="ri-linkedin-line"></i>
//                 </Link>{" "}
//               </span>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
           <div className="top">
             <div className="item">
              <h1>About</h1>
           <span>Bizz3</span>
           <span>Contact us</span>
{/* //           <span>Wood Paints</span>
             <span>Primer</span>
             <span>Waterproofing</span> */}
<div className="item">
             <h1>Product Categories</h1>
             <span>Interior Paints</span>
           <span>Exterior Paints</span>
             <span>Wood Paints</span>
             <span>Primer</span>
             <span>Waterproofing</span>
           </div>
        {/* <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span> */}
        {/* </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span> */}
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">BIZZ3</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

// const Footer = () => {
//   return (
//     < className="footer">
//       < className="top">
//         < className="item">
//           <h1>About</h1>
//           <span>Bizz3</span>
//           <span>Contact us</span>
//           {/* <span>Wood Paints</span>
//             <span>Primer</span>
//             <span>Waterproofing</span> */}
//           <div className="item">
//             <h1>Product Categories</h1>
//             <span>Interior Paints</span>
//             <span>Exterior Paints</span>
//             <span>Wood Paints</span>
//             <span>Primer</span>
//             <span>Waterproofing</span>
//           </div>
//           <div className="item">
//             <h1>Links</h1>
//             <span>FAQs</span>
//             <span>Blogs</span>
//             <span>Products</span>
//             <span>Compare</span>
//           </div>
//
