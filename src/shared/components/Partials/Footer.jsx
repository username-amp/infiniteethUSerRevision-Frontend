import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';
import infinilogo from './assets/infinibg.png';
import certified from './assets/dentalCertified.jpg';

const Footer = () => {
  return (
    <div>
      <div className={styles.mainWrapper}>
        <div className={styles.logo}>
          <img src={infinilogo} alt="logo" />
        </div>

        <div>
          <h3 className={styles.title}>SERVICES</h3>
          <ul>
            <li>Tooth Fillings</li>
            <li>Tooth Extraction</li>
            <li>Tooth Cleaning</li>
            <li>X-ray and other Diagnostic Services</li>
            <li>Children's Dentistry</li>
            <li>Tooth Implants</li>
            <li>Dentures and Tooth Capping</li>
            <li>Dental Braces and TMJ Therapy</li>
            <li>Root Canal Treatment (RCT)</li>
            <li>Gum Diseases</li>
            <li>Cosmetics, Smile Management and Teeth Whitening</li>
          </ul>
        </div>

        <div>
          <h3 className={styles.title}>QUICK LINKS</h3>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/aboutus">DENTIST</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/book">BOOK NOW</Link>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <h3 className={styles.title}>SOCIAL MEDIA</h3>
          </div>

          <div className={styles.socialMedia}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.icon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
          </div>

          <div className={styles.dentalCertified}>
            <img src={certified} alt="certified" />
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div>
          <p>Copyright 2019 Abesamis Dental Clinic | Privacy Policy</p>
        </div>

        <div>
          <p>Powered by: iManila.ph</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
