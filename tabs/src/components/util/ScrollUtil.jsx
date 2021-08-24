import React, { useState, useEffect } from "react";
import "./ScrollUtil.css";

// scroll to the top
export function TopJumper() {
  const [show, switchShow] = useState(false);

  useEffect(() => {
    const listener = () => {
      switchShow(window.scrollY > 150)
    };
    document.addEventListener('scroll', listener);
    // remove listener to avoid infinite loop
    return () => document.removeEventListener('scroll', listener);
  }, [show])

  return show ? (
    <div className="top-jumper" onClick={ () => window.scrollTo(0, 0) }>
      <span className="text"> </span>
    </div>) : null;
}

// scroll by the name
export function ScrollToAnchor(anchorName) {
  if (anchorName) {
    const anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView({ behavior:'smooth', block:'start' });
    }
  }
}