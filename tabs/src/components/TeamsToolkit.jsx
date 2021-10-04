import React, { useState } from "react";
import GettingStarted from "./teamstoolkit/GettingStarted"
import Project from "./teamstoolkit/Project"
import { Box, Menu } from '@fluentui/react-northstar'
import "./App.css"

function Catalogue() {
  const steps = ["GettingStarted", "Project"];
  const [selectedMenuItem, setSelectedMenuItem] = useState("GettingStarted");
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
        {selectedMenuItem === "GettingStarted" && (
          <GettingStarted />
        )}
        {selectedMenuItem === "Project" && (
          <Project />
        )}
      </Box>
    </Box>
  </Box>
  )
}

class TeamsToolkit extends React.Component {
  render() {
    return (
      <Catalogue />
    )
  }
}

export default TeamsToolkit;