
"use client";

import React from "react";
import { Button } from "antd";
import Services from "./Services";
import "../styles/NewArrival.scss";
import { arrivalItems } from "../data/products";
import Image from "next/image";

const NewArrival: React.FC = () => {
  const largeCard = arrivalItems.find((item) => item.size === "large");
  const mediumCard = arrivalItems.find((item) => item.size === "medium");
  const smallCards = arrivalItems.filter((item) => item.size === "small");

  return (
    <section className="new-arrival">
      <div className="section-header">
        <div className="section-title-group">
          <div className="section-indicator" />
          <span className="section-subtitle">Featured</span>
        </div>
        <h2 className="main-title">New Arrival</h2>
      </div>

      <div className="arrival-grid">
        {largeCard && (
          <div className="arrival-card large-card">
            <div className="card-image">
              <Image
                src={largeCard.image}
                alt={largeCard.title}
                width={600}   // ← replace with actual width
                height={400}  // ← replace with actual height
                className="arrival-image"
              />
            </div>
            <div className="card-content">
              <h3>{largeCard.title}</h3>
              <p>{largeCard.description}</p>
              <Button className="shop-now-btn" type="link">
                Shop Now
              </Button>
            </div>
          </div>
        )}

        <div className="right-grid">
          {mediumCard && (
            <div className="arrival-card medium-card">
              <div className="card-image">
                <Image
                  src={mediumCard.image}
                  alt={mediumCard.title}
                  width={400}   // ← replace with actual width
                  height={300}  // ← replace with actual height
                  className="arrival-image"
                />
              </div>
              <div className="card-content">
                <h3>{mediumCard.title}</h3>
                <p>{mediumCard.description}</p>
                <Button className="shop-now-btn" type="link">
                  Shop Now
                </Button>
              </div>
            </div>
          )}

          <div className="bottom-row">
            {smallCards.map((item) => (
              <div key={item.id} className="arrival-card small-card">
                <div className="card-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}   // ← replace with actual width
                    height={200}  // ← replace with actual height
                    className="arrival-image"
                  />
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Button className="shop-now-btn" type="link">
                    Shop Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Services />
    </section>
  );
};

export default NewArrival;
