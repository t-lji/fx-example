import React from "react";
import Overall from "./ui/Overall"
import Component from "./ui/Component"
import Prototypes from "./ui/Prototypes"
import { Box, Menu } from '@fluentui/react-northstar'
import "./App.css";

function Catalogue() {
  const steps = ["Overall", "Component", "Prototypes"];
  const [selectedMenuItem, setSelectedMenuItem] = React.useState("Overall");
  const items = steps.map((step) => {
    return {
      key: step,
      content: step || "",
      onClick: () => setSelectedMenuItem(step),
    };
  });
  return (
  <Box className="page">
    <Menu defaultActiveIndex={0} items={items} underlined secondary />
    <Box>
      <Box>
        {selectedMenuItem === "Overall" && (
          <Overall />
        )}
        {selectedMenuItem === "Component" && (
          <Component />
        )}
        {selectedMenuItem === "Prototypes" && (
          <Prototypes />
        )}
      </Box>
    </Box>
  </Box>
  )
}

class UI extends React.Component {
  
  render() {
    return (
    <Catalogue />
    )
  }
}

export default UI;