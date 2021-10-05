import React from "react";
import { Box, Button, Header, Text } from '@fluentui/react-northstar'
import Deeplink from './tab/Deeplink.jsx'
import StaticTab from './tab/StaticTab.jsx'
import InitializeDefinitionCode from '!!raw-loader!../../assets/code/tab/InitializeDefinitionCode.js'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";
import Code from "../util/CodeUtil"
import { Collapse } from "../util/PageUtil.jsx";

function InitializeCode() {
  return (
    <Box>
      <Header as="h3" content="Initializes the library" />
      <Text content='This must be called before any other SDK calls but after the frame is loaded successfully.' />
      <Collapse>
        <Code code={ InitializeDefinitionCode } />
      </Collapse>
    </Box>
  )
}

export default class Tab extends React.Component {
  render() {
    return (
      <Box className="Tab page">
        <Header as="h2" content="Tab" />

        <ul id="OverallList">
          <li><Button onClick={ () => ScrollToAnchor('Deeplink') }>Deeplink</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Static Tab') }>Static Tab</Button></li>
        </ul>
        <InitializeCode />
        <Box id="Deeplink"><Deeplink /></Box>
        <Box id="Static Tab"><StaticTab /></Box>
        <TopJumper />
      </Box>
    )
  }
}
