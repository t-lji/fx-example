import React from "react";
import { Box, Button, ExpandIcon, CollapseIcon } from "@fluentui/react-northstar";

function CollapseHelper(props) {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const style = {
    collapsed: {
      display: "none"
    },
    expanded: {
      display: "block"
    },
    buttonStyle: {
      display: "block",
      width: "100%"
    }
  };
  return (
    <Box className="Collapse">
      <Button icon={ isCollapsed ? <ExpandIcon /> : <CollapseIcon /> }
        content={"click to " + (isCollapsed ? "show" : "hide") + " content" }
        onClick={ () => setIsCollapsed(!isCollapsed) }/>
      <Box
        className="collapse-content"
        style={ isCollapsed ? style.collapsed : style.expanded }
        aria-expanded={ isCollapsed }>
          { props.children }
      </Box>
    </Box>
  )
}

export function Collapse(props) {
  return (
    <CollapseHelper>
      { props.children }
    </CollapseHelper>
  );
}
