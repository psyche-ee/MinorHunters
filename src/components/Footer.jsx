import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/20 text-center py-4 text-sm text-gray-300">
      © {new Date().getFullYear()} MinorHunters. All rights reserved.
    </footer>
  );
};

export default Footer;
