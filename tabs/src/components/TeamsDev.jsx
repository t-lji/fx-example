import React from "react";
import Tab from "./teamsdev/Tab"
import Bot from "./teamsdev/Bot"
import MessagingExtension from "./teamsdev/MessagingExtension"
import { Box, Menu } from '@fluentui/react-northstar'
import "./App.css"

function Catalogue() {
  const steps = ["Tab", "Bot", "MessagingExtension"];
  const [selectedMenuItem, setSelectedMenuItem] = React.useState("Tab");
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
        {selectedMenuItem === "Tab" && (
          <Tab />
        )}
        {selectedMenuItem === "Bot" && (
          <Bot />
        )}
        {selectedMenuItem === "MessagingExtension" && (
          <MessagingExtension />
        )}
      </Box>
    </Box>
  </Box>
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