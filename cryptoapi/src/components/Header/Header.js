import React from "react";
import "../Header/styles.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-info">
        <p className="header-p1">NOMBRE</p>
        <p className="header-p2">SIMBOLO</p>
        <p className="header-p3">PRECIO</p>
        <p className="header-p4">24h CHANGE</p>
      </div>
    </div>
  );
}
