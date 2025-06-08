"use client";
import React from "react";
import { Button } from "antd";
import "../styles/BestSellingProducts.scss";

import { bestSellingProducts } from "../data/products";
import ProductCard from "./ProductCard";

const BestSellingProducts: React.FC = () => {
  const handleAddToCart = (productId: string) => {
    console.log("Add to cart:", productId);
  };

  const handleToggleFavorite = (productId: string) => {
    console.log("Toggle favorite:", productId);
  };

  const handleQuickView = (productId: string) => {
    console.log("Quick view:", productId);

  };

  const handleViewAll = () => {
    console.log("View all products");
    
  };

  return (
    <section className="best-selling">
      <div className="section-header">
        <div className="section-title-group">
          <div className="section-indicator"></div>
          <span className="section-subtitle">This Month</span>
        </div>
        <div className="section-main-header">
          <h2 className="section-title">Best Selling Products</h2>
          <Button
            type="primary"
            className="view-all-btn"
            size="large"
            onClick={handleViewAll}
          >
            View All
          </Button>
        </div>
      </div>

      <div className="products-container">
        <div className="products-grid">
          {bestSellingProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onToggleFavorite={handleToggleFavorite}
              onQuickView={handleQuickView}
              showDiscount={true}
              showActions={true}
              showRating={true}
              className="grid-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
