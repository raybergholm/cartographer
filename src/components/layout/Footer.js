import React from "react";

const footerStyle = {
  "backgroundColor": "#DDDDDD",
  "height": "150px",
  "padding": "20px",
  // "color": "white"
};

const Footer = () => (
  <footer id="app-footer" style={footerStyle} className="app-footer">
    <p>&copy; 2018 Raymond Bergholm</p>
  </footer>
);

export default Footer;
