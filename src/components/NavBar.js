
import React from "react";

function NavBar() {
  const links = ["home", "about", "contact"]; // Array with three link strings

  return (
    <nav>
      {links.map((link) => (
        <a key={link} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
