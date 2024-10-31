import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="https://twitter.com" target="_blank" rel="">
        <FaTwitter />
      </a>
      <a href="https://facebook.com" target="_blank" rel="">
        <FaFacebook />
      </a>
      <a href="https://instagram.com" target="_blank" rel="">
        <FaInstagram />
      </a>
      <a href="https://github.com" target="_blank" rel="">
        <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
