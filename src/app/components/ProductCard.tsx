"use client";
import React from "react";
import { Button, Rate } from "antd";
import { HeartOutlined, EyeOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Product } from "../types";
import "../styles/ProductCard.scss";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  onToggleFavorite?: (productId: string) => void;
  onQuickView?: (productId: string) => void;
  showDiscount?: boolean;
  showActions?: boolean;
  showRating?: boolean;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,

  showDiscount = true,
  showActions = true,
  showRating = true,
  className = "",
}) => {
  const handleAddToCart = () => {};

  const handleToggleFavorite = () => {};

  const handleQuickView = () => {};

  return (
    <div className={`product-card ${className}`}>
      <div className="product-image-container">
        {showDiscount && product.discount && (
          <div className="discount-badge">-{product.discount}%</div>
        )}

        {showActions && (
          <div className="product-actions">
            <Button
              type="text"
              icon={<HeartOutlined />}
              className="action-btn"
              shape="circle"
              onClick={handleToggleFavorite}
              title="Add to Wishlist"
            />
            <Button
              type="text"
              icon={<EyeOutlined />}
              className="action-btn"
              shape="circle"
              onClick={handleQuickView}
              title="Quick View"
            />
          </div>
        )}

        <div className="product-image">
          <Image
            src={product.image}
            alt={product.name}
            width={190}
            height={180}
            className="product-img"
          />
        </div>

        <Button
          type="primary"
          className="add-to-cart-btn"
          block
          onClick={handleAddToCart}
        >
          Add To Cart
        </Button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        <div className="product-pricing">
          <span className="current-price">${product.price}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>

        {showRating && product.rating && (
          <div className="product-rating">
            <Rate
              disabled
              defaultValue={product.rating}
              className="rating-stars"
            />
            {product.reviews && (
              <span className="review-count">({product.reviews})</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
