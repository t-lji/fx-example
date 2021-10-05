import React from "react";
import { Button, Tooltip, TriangleUpIcon } from '@fluentui/react-northstar'

// scroll to the top
export function TopJumper() {
  const [show, switchShow] = React.useState(false);

  React.useEffect(() => {
    const listener = () => {
      switchShow(window.scrollY > 150)
    };
    document.addEventListener('scroll', listener);
    // remove listener to avoid infinite loop
    return () => document.removeEventListener('scroll', listener);
  }, [show])

  return show ? (
    <Tooltip 
      style={{
        position: "fixed",
        right: "11%",
        bottom: "15%",
        width: "100px"
      }}
      trigger={ <Button 
        icon={ <TriangleUpIcon size="large"/> }
        onClick={ () => window.scrollTo(0, 0) } 
        primary 
        />} 
      content="Back To Top" 
      position="below"
    />
    ) : null;
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