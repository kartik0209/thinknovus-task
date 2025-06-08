
"use client";

import React from "react";
import { Card, Rate, Button, Tag } from "antd";
import {
  HeartOutlined,
  EyeOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { exploreProducts } from "../data/products";
import "../styles/ExploreProducts.scss";

const { Meta } = Card;

const ColorSelector: React.FC<{ colors: string[]; selectedColor?: string }> = ({
  colors,
  selectedColor,
}) => (
  <div className="color-selector">
    {colors.map((color, index) => (
      <div
        key={index}
        className={`color-dot ${color} ${
          selectedColor === color ? "selected" : ""
        }`}
      />
    ))}
  </div>
);

const ExploreProducts: React.FC = () => {
  return (
    <div className="explore-products">
      <div className="section-header">
        <div className="section-title">
          <div className="title-indicator" />
          <span className="title-text">Our Products</span>
        </div>
        <div className="navigation-arrows">
          <Button icon={<LeftOutlined />} className="nav-arrow" />
          <Button icon={<RightOutlined />} className="nav-arrow" />
        </div>
      </div>

      <h2 className="main-title">Explore Our Products</h2>

      <div className="products-grid">
        {exploreProducts.map((product) => (
          <Card
            key={product.id}
            className="product-card"
            cover={
              <div className="product-image-container">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}    // replace with actual image width
                  height={300}   // replace with actual image height
                  className="product-image"
                />
                <div className="product-actions">
                  <Button
                    icon={<HeartOutlined />}
                    className="action-btn wishlist-btn"
                    shape="circle"
                  />
                  <Button
                    icon={<EyeOutlined />}
                    className="action-btn view-btn"
                    shape="circle"
                  />
                </div>
                {product.isNew && <Tag className="new-tag">NEW</Tag>}
                {product.id === 2 && (
                  <Button className="add-to-cart-btn">Add To Cart</Button>
                )}
              </div>
            }
          >
            <Meta
              title={<span className="product-name">{product.name}</span>}
              description={
                <div className="product-details">
                  <div className="price-rating">
                    <span className="price">${product.price}</span>
                    <div className="rating-section">
                      <Rate
                        disabled
                        defaultValue={product.rating}
                        className="product-rating"
                      />
                      <span className="reviews">({product.reviews})</span>
                    </div>
                  </div>
                  {product.colors && (
                    <ColorSelector
                      colors={product.colors}
                      selectedColor={product.colors[0]}
                    />
                  )}
                </div>
              }
            />
          </Card>
        ))}
      </div>

      <div className="view-all-section">
        <Button className="view-all-btn" size="large">
          View All Products
        </Button>
      </div>
    </div>
  );
};

export default ExploreProducts;
