import React from "react";
import { Box, Button, Header } from '@fluentui/react-northstar'
import Buttons from './component/Buttons.jsx'
import Chats from './component/Chats.jsx'
import Layouts from './component/Layouts.jsx'
import Media from './component/Media.jsx'
import Text from './component/Text.jsx'
import Other from './component/Other.jsx'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";

export default class Component extends React.Component {
  render() {
    return (
      <Box className="Component page">
        <Header as="h2" content="Component" />
        <ul id="ComponentList">
          <li><Button onClick={ () => ScrollToAnchor('Buttons') }>Button</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Chats') }>Chat</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Layouts') }>Layout</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Media') }>Media</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Other') }>Other</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Text') }>Text</Button></li>
        </ul>
        <Box id="Buttons"><Buttons /></Box>
        <Box id="Chats"><Chats /></Box>
        <Box id="Layouts"><Layouts /></Box>
        <Box id="Media"><Media /></Box>
        <Box id="Other"><Other /></Box>
        <Box id="Text"><Text /></Box>
        <TopJumper />
      </Box>
    )
  }
}
