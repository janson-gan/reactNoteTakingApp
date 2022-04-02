import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Make with ❤️ By Janson Gan Copyright &copy; {currentYear}</p>
    </footer>
  );
}

export default Footer;
