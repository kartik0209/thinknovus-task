"use client";

import React, { useState } from "react";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import "../styles/HeroSection.scss";
import applelogo from "../../../public/assets/apple-logo.png";
import iphone14 from "../../../public/assets/iphone-14.png";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(2);

  const categoryItems = [
    { name: "Woman's Fashion", hasSubMenu: true },
    { name: "Men's Fashion", hasSubMenu: true },
    { name: "Electronics", hasSubMenu: false },
    { name: "Home & Lifestyle", hasSubMenu: false },
    { name: "Medicine", hasSubMenu: false },
    { name: "Sports & Outdoor", hasSubMenu: false },
    { name: "Baby's & Toys", hasSubMenu: false },
    { name: "Groceries & Pets", hasSubMenu: false },
    { name: "Health & Beauty", hasSubMenu: false },
  ];

  return (
    <div className="hero-section">
      <aside className="sidebar">
        <ul className="category-list">
          {categoryItems.map((item, index) => (
            <li key={index} className="category-item">
              <span className="category-name">{item.name}</span>
              {item.hasSubMenu && <RightOutlined className="arrow-icon" />}
            </li>
          ))}
        </ul>
      </aside>

      <div className="hero-banner">
        <div className="banner-content">
          <div className="brand-info">
            <Image
              src={applelogo}
              alt="Apple"
              width={40}
              height={40}
              className="brand-logo"
            />
            <span className="brand-text">iPhone 14 Series</span>
          </div>

          <h2 className="main-heading">
            Up to 10%
            <br />
            off Voucher
          </h2>

          <Button
            type="text"
            className="shop-now-btn"
            icon={<RightOutlined />}
            iconPosition="end"
          >
            Shop Now
          </Button>
        </div>

        <div className="banner-image">
          <Image
            src={iphone14}
            alt="iPhone 14"
            width={496}
            height={352}
            className="phone-image"
            priority
          />
        </div>

        <div className="banner-dots">
          {[0, 1, 2, 3, 4].map((dot) => (
            <button
              key={dot}
              className={`dot ${dot === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(dot)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
