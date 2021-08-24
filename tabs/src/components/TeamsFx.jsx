import React, { useState } from "react";
import Tab from "./teamsfx/Tab"
import Bot from "./teamsfx/Bot"
import MessagingExtension from "./teamsfx/MessagingExtension"
import AzureFunction from "./teamsfx/AzureFunction"
import { Menu } from '@fluentui/react-northstar'
import "./App.css"

function Catalogue() {
  const steps = ["Tab", "Bot", "MessagingExtension", "AzureFunction"];
  const [selectedMenuItem, setSelectedMenuItem] = useState("Tab");
  const items = steps.map((step) => {
    return {
      key: step,
      content: step || "",
      onClick: () => setSelectedMenuItem(step),
    };
  });
  return (
  <div className="page">
    <Menu defaultActiveIndex={0} items={items} underlined secondary />
    <div>
      <div>
        {selectedMenuItem === "Tab" && (
          <Tab />
        )}
        {selectedMenuItem === "Bot" && (
          <Bot />
        )}
        {selectedMenuItem === "MessagingExtension" && (
          <MessagingExtension />
        )}
        {selectedMenuItem === "AzureFunction" && (
          <AzureFunction />
        )}
      </div>
    </div>
  </div>
  )
}

class TeamsFx extends React.Component {
  render() {
    return (
      <Catalogue />
    )
  }
}

export default TeamsFx;