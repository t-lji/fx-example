import React from "react";
import { Box, Button, Header } from '@fluentui/react-northstar'
import ActionCommands from './messagingExtension/ActionCommands.jsx'
import SearchCommands from './messagingExtension/SearchCommands.jsx'
import LinkUnfurling from './messagingExtension/LinkUnfurling.jsx'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";

export default class MessagingExtension extends React.Component {
  render() {
    return (
      <Box className="MessagingExtension page">
        <Header as="h2" content="Messaging Extension" />

        <ul id="OverallList">
          <li><Button onClick={ () => ScrollToAnchor('ActionCommands') }>Action Commands</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('SearchCommands') }>Search Commands</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('LinkUnfurling') }>Link Unfurling</Button></li>
        </ul>
        <Box id="ActionCommands"><ActionCommands /></Box>
        <Box id="SearchCommands"><SearchCommands /></Box>
        <Box id="LinkUnfurling"><LinkUnfurling /></Box>
        <TopJumper />
      </Box>
    )
  }
}
