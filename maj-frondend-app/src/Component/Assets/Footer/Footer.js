
import "./Footer.css";
import BGLOGO from "../../Images/BGLOGO.png 2.png";
import whatsapp from '../../Images/WhatsApp.png'
 import Insta from '../../Images/Instagram.png'
 import Twitter from '../../Images/Twitter Circled.png'
 import FaceBook from '../../Images/Facebook F.png'


export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* Company details */}
        <div className="footer-company">
          <a href="/" aria-label="MAJGOLD home" className="footer-logo">
            <img src={BGLOGO} alt="MAJGOLD" />
          </a>

          <a className="footer-phone" href="tel:+9104424353916">
            +91 044 2435 3916
          </a>

          <p className="footer-address">
            #27/6, Madurai Veeran Koil St,
            <br />
            CIT Nagar East, T. Nagar,
            <br />
            Chennai, Tamil Nadu 600017
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="WhatsApp">
              <img src={whatsapp}/>
            </a>
            <a href="#" aria-label="Instagram">
              <img src={Insta}/>
            </a>
            <a href="#" aria-label="Facebook">
              <img src={FaceBook}/>
            </a>
            <a href="#" aria-label="tweeter">
              <img src={Twitter}/>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h4>ABOUT</h4>
          <a href="#about">About Us</a>
          <a href="/products.html">Our Products</a>
          <a href="/clientales.html">Our Clientales</a>
          <a href="#location">Location</a>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Subscribe To Our Newsletter</h4>

          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter Your Email Address"
              aria-label="Your email address"
              required
            />
            <button type="submit" aria-label="Subscribe">
              →
            </button>
          </form>
        </div>
      </div>

      <small className="footer-copyright">
        COPYRIGHT © {new Date().getFullYear()} &nbsp; ALL RIGHTS RESERVED.
      </small>
    </footer>
  );
}
