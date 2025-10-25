import FooterLogo from "../assets/footerLogo.svg";
import GoogleImg from "../assets/google.svg";

import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Tiktok from "../assets/TikTok.png";
import Snapchat from "../assets/Snapchat.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-logo">
            <a href="#">
              <img src={FooterLogo} alt="" />
            </a>
            <div className="application">
              <img src={GoogleImg} alt="google-logo" />
              <img src={GoogleImg} alt="google-logo" />
            </div>

            <p>
              Company # 490039-445, Registered with <br /> House of companies.
            </p>
          </div>

          <div className="footer-input">
            <p>Get Exclusive Deals in your Inbox</p>
            <div className="input-btn">
              <input type="text" placeholder="youremail@gmail.com" />
              <button>Subscribe</button>
            </div>
            <span>we wont spam, read our email policy</span>

            <div className="social-icons">
              <a href="#">
                <img src={Facebook} alt="facebook" />
              </a>
              <a href="#">
                <img src={Instagram} alt="instagram" />
              </a>
              <a href="#">
                <img src={Tiktok} alt="tiktok" />
              </a>
              <a href="#">
                <img src={Snapchat} alt="snapchat" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link1">
              <p>Legal Pages</p>
              <a href="">Terms and conditions</a>
              <a href="">Privacy</a>
              <a href="">Cookies</a>
              <a href="">Modern Slavery Statement</a>
            </div>

            <div className="link1">
              <p>Important Links</p>
              <a href="">Get help</a>
              <a href="">Add your restaurant</a>
              <a href="">Sign up to deliver</a>
              <a href="">Create a business account</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
