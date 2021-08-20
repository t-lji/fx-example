import React, { useState } from "react";
import Overall from "./ui/Overall"
import Component from "./ui/Component"
import Prototypes from "./ui/Prototypes"
import { Menu } from '@fluentui/react-northstar'

function Catalogue() {
  const steps = ["Overall", "Component", "Prototypes"];
  const [selectedMenuItem, setSelectedMenuItem] = useState("Overall");
  const items = steps.map((step) => {
    return {
      key: step,
      content: step || "",
      onClick: () => setSelectedMenuItem(step),
    };
  });
  return (
  <div>
    <Menu defaultActiveIndex={0} items={items} underlined secondary />
    <div>
      <div>
        {selectedMenuItem === "Overall" && (
          <Overall />
        )}
        {selectedMenuItem === "Component" && (
          <Component />
        )}
        {selectedMenuItem === "Prototypes" && (
          <Prototypes />
        )}
      </div>
    </div>
  </div>
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