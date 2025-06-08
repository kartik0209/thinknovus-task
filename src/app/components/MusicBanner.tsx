import React from "react";
import Image from "next/image";
import { Button, Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "../styles/MusicBanner.scss";
import jbl from "../../../public/assets/jbl.png";

interface MusicBannerProps {
  className?: string;
}

const MusicBanner: React.FC<MusicBannerProps> = ({ className }) => {
  const features = [
    { number: "23", label: "Hours" },
    { number: "05", label: "Days" },
    { number: "59", label: "Minutes" },
    { number: "35", label: "Seconds" },
  ];

  return (
    <div className={`music-banner ${className || ""}`}>
      <div className="music-banner__content">
        <div className="music-banner__left-section">
          <Tag color="green" className="music-banner__category-tag">
            Categories
          </Tag>

          <h1 className="music-banner__title">
            Enhance Your
            <br />
            Music Experience
          </h1>

          <div className="music-banner__features">
            {features.map((feature, index) => (
              <div key={index} className="music-banner__feature-item">
                <div className="music-banner__feature-circle">
                  <span className="music-banner__feature-number">
                    {feature.number}
                  </span>
                  <span className="music-banner__feature-label">
                    {feature.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Button
            type="primary"
            size="large"
            icon={<ShoppingCartOutlined />}
            className="music-banner__buy-button"
          >
            Buy Now!
          </Button>
        </div>

        <div className="music-banner__right-section">
          <div className="music-banner__speaker-container">
            <div className="music-banner__speaker-image">
              <Image
                src={jbl}
                alt="JBL Speaker"
                width={400}
                height={300}
                className="music-banner__speaker"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicBanner;
