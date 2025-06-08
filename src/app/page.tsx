"use client";

import React, { useRef } from "react";

// Using relative imports - ensure these paths match your actual file structure
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import NewArrival from "./components/NewArrival";
import FlashSales from "./components/FlashSales";
import BestSellingProducts from "./components/BestSellingProducts";
import ExploreProducts from "./components/ExploreProducts";
import MusicBanner from "./components/MusicBanner";
import { Category } from "./types";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  MobileOutlined,
  DesktopOutlined,
  TwitchOutlined,
  CameraOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const HomePage: React.FC = () => {
  const categories: Category[] = [
    { id: 1, name: "Phones", icon: <MobileOutlined />, isActive: false },
    { id: 2, name: "Computers", icon: <DesktopOutlined />, isActive: false },
    { id: 3, name: "SmartWatch", icon: <TwitchOutlined />, isActive: false },
    { id: 4, name: "Camera", icon: <CameraOutlined />, isActive: false },
    { id: 5, name: "HeadPhones", icon: <AudioOutlined />, isActive: false },
  ];

  const categoriesContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (categoriesContainerRef.current) {
      categoriesContainerRef.current.scrollBy({
        left: -170,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (categoriesContainerRef.current) {
      categoriesContainerRef.current.scrollBy({
        left: 170,
        behavior: "smooth",
      });
    }
  };

  const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
    <div className={`category-card ${category.isActive ? "active" : ""}`}>
      <div className="category-icon">{category.icon}</div>
      <span className="category-name">{category.name}</span>
    </div>
  );

  return (
    <div className="homepage">
      <Header />

      <div className="main-content">
        <div className="container">
          <HeroSection />

          <FlashSales />

          <section className="browse-by-category">
            <div className="section-header">
              <div className="section-title-group">
                <div className="section-indicator" />
                <span className="section-subtitle">Categories</span>
              </div>
              <div className="section-main-header">
                <h2 className="section-title">Browse By Category</h2>
                <div className="navigation-arrows">
                  <Button
                    type="text"
                    icon={<LeftOutlined />}
                    className="nav-arrow"
                    shape="circle"
                    onClick={scrollLeft}
                  />
                  <Button
                    type="text"
                    icon={<RightOutlined />}
                    className="nav-arrow"
                    shape="circle"
                    onClick={scrollRight}
                  />
                </div>
              </div>
            </div>

            <div className="categories-container">
              <div
                className="categories-grid"
                ref={categoriesContainerRef}
              >
                {categories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                  />
                ))}
              </div>
            </div>
          </section>

          <BestSellingProducts />
          <MusicBanner />

          <ExploreProducts />

          <NewArrival />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;