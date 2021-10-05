import React from "react";
import { Box, Button, CollapseIcon, ExpandIcon, Header, Segment, Text } from "@fluentui/react-northstar";

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
    <Box 
      className="Collapse"
      styles={{ 
        marginTop: '10px',  
        marginBottom: '10px'
      }} 
    >
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

export function ComponentPrototype(props) {
  const { description, title: header, children, styles, ...rest } = props; 
  return (
    <Box 
      styles={{  
        marginTop: '20px',    
        marginBottom: '20px',    
        marginLeft: '20px', 
        marginRight: '20px', 
        ...styles 
      }} 
      {...rest}
    >
      {(header || description) && (
        <Segment>
          {header && <Header as="h2">{header}</Header>}
          {description && <Text size="large">{description}</Text>}
        </Segment>
      )}
      <Segment styles={{ 'border-top': '1px solid black' }}>{children}</Segment>
    </Box>
  );
}
