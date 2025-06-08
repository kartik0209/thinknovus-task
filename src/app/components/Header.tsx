"use client";

import React, { useState } from "react";
import { Input, Button, Dropdown, Badge, Drawer, Space, MenuProps } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  DownOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "../styles/Header.scss";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languageItems: MenuProps["items"] = [
    {
      key: "1",
      label: "English",
    },
    {
      key: "2",
      label: "Spanish",
    },
    {
      key: "3",
      label: "French",
    },
  ];

  const navigationItems = [
    { key: "home", label: "Home", href: "/", active: true },
    { key: "contact", label: "Contact", href: "/contact", active: false },
    { key: "about", label: "About", href: "/about", active: false },
    { key: "signup", label: "Sign Up", href: "/signup", active: false },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="top-banner">
        <div className="banner-content">
          <span className="banner-text">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <Button type="link" className="shop-now-btn">
            ShopNow
          </Button>
        </div>
        <Dropdown menu={{ items: languageItems }} placement="bottomRight">
          <Button type="text" className="language-selector">
            <Space>
              English
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>

      <header className="main-header">
        <div className="header-container">
          <div className="logo">
            <h1>Exclusive</h1>
          </div>

          <nav className="desktop-nav">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`nav-link ${item.active ? "active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <div className="search-container">
              <Input
                placeholder="What are you looking for?"
                className="search-input"
                suffix={<SearchOutlined />}
              />
            </div>

            <div className="action-icons">
              <Button
                type="text"
                icon={<HeartOutlined />}
                className="icon-btn"
              />
              <Badge count={3} size="small">
                <Button
                  type="text"
                  icon={<ShoppingCartOutlined />}
                  className="icon-btn"
                />
              </Badge>
            </div>

            <Button
              type="text"
              icon={<MenuOutlined />}
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </header>

      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleMobileMenu}
        open={mobileMenuOpen}
        className="mobile-nav-drawer"
        closeIcon={<CloseOutlined />}
      >
        <div className="mobile-nav">
          {navigationItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={`mobile-nav-link ${item.active ? "active" : ""}`}
              onClick={toggleMobileMenu}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="mobile-search">
          <Input
            placeholder="What are you looking for?"
            suffix={<SearchOutlined />}
            size="large"
          />
        </div>
      </Drawer>
    </>
  );
};

export default Header;
