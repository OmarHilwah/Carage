import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out Our Services</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src="images/img-9.jpg"
              text="On road help"
              label="any where maintenance"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="maintain a digital record of your vehicle's service history. This feature enables you to track the services performed, dates, and costs associated with each maintenance event"
              label="follow up"
              path="/services"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/img-3.jpg"
              text="good car service app will help you keep track of your vehicle's maintenance schedule"
              label="good crew"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="custom profile for your car"
              label="feeling special"
              path="/products"
            />

            <CardItem
              src="images/img-8.jpg"
              text="find authorized service centers or mechanics in your area"
              label="maintenance location"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
