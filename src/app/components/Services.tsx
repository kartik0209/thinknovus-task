"use client";
import React from "react";
import {
  TruckOutlined,
  CustomerServiceOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import "../styles/Services.scss";

interface ServiceItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const serviceItems: ServiceItem[] = [
  {
    id: 1,
    icon: <TruckOutlined />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: <CustomerServiceOutlined />,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: <SafetyOutlined />,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

const Services: React.FC = () => {
  return (
    <div className="services-section">
      <div className="services-container">
        {serviceItems.map((service) => (
          <div key={service.id} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
