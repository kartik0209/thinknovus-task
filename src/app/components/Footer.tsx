import React from "react";
import { Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "../styles/footer.scss";
import qr from "../../../public/assets/Qr Code.png";
import as from "../../../public/assets/as.png";
import gp from "../../../public/assets/gp.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="column-title">Exclusive</h3>
            <div className="column-content">
              <h4 className="subscribe-title">Subscribe</h4>
              <p className="subscribe-text">Get 10% off your first order</p>
              <div className="email-subscription">
                <Input
                  placeholder="Enter your email"
                  className="email-input"
                  suffix={
                    <Button
                      type="text"
                      icon={<SendOutlined />}
                      className="send-button"
                    />
                  }
                />
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="column-title">Support</h3>
            <div className="column-content">
              <p className="address">
                111 Bijoy sarani, Dhaka,
                <br />
                DH 1515, Bangladesh.
              </p>
              <p className="contact-info">exclusive@gmail.com</p>
              <p className="contact-info">+88015-88888-9999</p>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="column-title">Account</h3>
            <div className="column-content">
              <ul className="footer-links">
                <li>
                  <a href="/account">My Account</a>
                </li>
                <li>
                  <a href="/auth">Login / Register</a>
                </li>
                <li>
                  <a href="/cart">Cart</a>
                </li>
                <li>
                  <a href="/wishlist">Wishlist</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="column-title">Quick Link</h3>
            <div className="column-content">
              <ul className="footer-links">
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms Of Use</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="column-title">Download App</h3>
            <div className="column-content">
              <p className="app-text">Save $3 with App New User Only</p>
              <div className="app-download-section">
                <div className="qr-code">
                  <Image src={qr} alt="QR Code" />
                </div>
                <div className="app-stores">
                  <div className="store-button">
                    <Image src={gp} alt="Get it on Google Play" />
                  </div>
                  <div className="store-button">
                    <Image src={as} alt="Download on App Store" />
                  </div>
                </div>
              </div>
              <div className="social-icons">
                <a href="#" className="social-link">
                  <FacebookOutlined />
                </a>
                <a href="#" className="social-link">
                  <TwitterOutlined />
                </a>
                <a href="#" className="social-link">
                  <InstagramOutlined />
                </a>
                <a href="#" className="social-link">
                  <LinkedinOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <p>© Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
