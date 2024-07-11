import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="desciptionbox-nav-box">Description</div>
        <div className="desciptionbox-nav-box fade ">Reviews (122) </div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that enables businesses to
          sell products or services to customers over the internet. It typically
          includes a product catalog, shopping cart, secure checkout process,
          order management system, customer accounts, mobile optimization, and
          analytics tools, allowing for a convenient, secure, and engaging
          shopping experience for customers while enabling businesses to reach a
          broader audience and expand their sales.
        </p>
        <p>
          E-commerce websites typically display a comprehensive product catalog
          with detailed descriptions, images, and pricing; a virtual shopping
          cart for customers to manage their selections; a secure checkout
          process with various payment options; customer account capabilities
          for personalized shopping and order history; intuitive search and
          navigation; product reviews and ratings; promotional content and
          special offers; order tracking and management tools; customer support
          information; and a mobile-friendly design to ensure a seamless
          shopping experience across devices.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
