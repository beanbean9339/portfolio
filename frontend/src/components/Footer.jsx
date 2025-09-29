import React from "react";

function Footer() {
  return (
    <footer style={{ padding: "1rem", textAlign: "center", background: "#f5f5f5", marginTop: "2rem" }}>
      &copy; {new Date().getFullYear()} Isabella Lo. All rights reserved.
    </footer>
  );
}

export default Footer;
