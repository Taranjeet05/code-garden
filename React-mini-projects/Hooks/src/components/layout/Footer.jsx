import React from "react";

const Footer = () => {
  return (
    <footer className="text-center p-4 bg-gray-100 text-gray-800">
      &copy; {new Date().getFullYear()} React Hooks. All rights reserved.
    </footer>
  );
};

export default Footer;
