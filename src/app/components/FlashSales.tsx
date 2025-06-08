"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "antd";

import "../styles/FlashSales.scss";

import { flashSalesProducts } from "../data/products";
import ProductCard from "./ProductCard";

const FlashSales: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  const productsContainerRef = useRef<HTMLDivElement>(null);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollBy = (amount: number) =>
    productsContainerRef.current?.scrollBy({
      left: amount,
      behavior: "smooth",
    });

  const handleAddToCart = (productId: string) => {
    console.log("Add to cart:", productId);
  };
  const handleToggleFavorite = (productId: string) => {
    console.log("Toggle favorite:", productId);
  };
  const handleQuickView = (productId: string) => {
    console.log("Quick view:", productId);
  };

  return (
    <section className="flash-sales">
      <div className="section-header">
        <div className="section-title-group">
          <div className="section-indicator" />-{" "}
          <span className="section-subtitle">Today&apos;s</span>+
        </div>
        <div className="section-main-header">
          <h2 className="section-title">Flash Sales</h2>
          <div className="countdown">
            <div className="countdown-row">
              <span className="countdown-label">Days</span>
              <span className="countdown-label">Hours</span>
              <span className="countdown-label">Minutes</span>
              <span className="countdown-label">Seconds</span>
            </div>
            <div className="countdown-values">
              <span className="countdown-value">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="countdown-separator">:</span>
              <span className="countdown-value">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="countdown-separator">:</span>
              <span className="countdown-value">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="countdown-separator">:</span>
              <span className="countdown-value">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
          <div className="navigation-arrows">
            <button className="nav-arrow" onClick={() => scrollBy(-300)}>
              ←
            </button>
            <button className="nav-arrow" onClick={() => scrollBy(300)}>
              →
            </button>
          </div>
        </div>
      </div>

      <div className="products-container">
        <div className="products-grid" ref={productsContainerRef}>
          {flashSalesProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onToggleFavorite={handleToggleFavorite}
              onQuickView={handleQuickView}
              showDiscount
              showActions
              showRating
            />
          ))}
        </div>
      </div>

      <div className="view-all-container">
        <Button type="primary" className="view-all-btn" size="large">
          View All Products
        </Button>
      </div>
    </section>
  );
};

export default FlashSales;
