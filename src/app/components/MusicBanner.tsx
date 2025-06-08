"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Tag } from "antd";

import "../styles/MusicBanner.scss";
import jbl from "../../../public/assets/jbl.png";

interface MusicBannerProps {
  className?: string;
}

const MusicBanner: React.FC<MusicBannerProps> = ({ className }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });
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

   const features = [
    { number: String(timeLeft.days).padStart(2, '0'), label: "Days" },
    { number: String(timeLeft.hours).padStart(2, '0'), label: "Hours" },
    { number: String(timeLeft.minutes).padStart(2, '0'), label: "Minutes" },
    { number: String(timeLeft.seconds).padStart(2, '0'), label: "Seconds" },
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
function setTimeLeft(arg0: (prev: any) => any) {
  throw new Error("Function not implemented.");
}
