import React from "react";
import { Box, Button, Header } from '@fluentui/react-northstar'
import "./Overall.css";
import Chat from './prototypes/Chat.jsx'
import LayOut from './prototypes/LayOut.jsx'
import Texts from './prototypes/Texts.jsx'
import Users from './prototypes/Users.jsx'
import ToolBars from './prototypes/ToolBars.jsx'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";

export default class Prototypes extends React.Component {
  render() {
    return (
      <Box className="Prototypes page">
        <Header as="h1" content="Prototypes" />
        <ul id="PrototypesList">
          <li><Button onClick={ () => ScrollToAnchor('Chat') }>Chat</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('LayOut') }>LayOut</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Texts') }>Texts</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Users') }>Users</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('ToolBars') }>ToolBars</Button></li>
        </ul>
        <Box id="Chat"><Chat /></Box>
        <Box id="LayOut"><LayOut /></Box>
        <Box id="Texts"><Texts /></Box>
        <Box id="Users"><Users /></Box>
        <Box id="ToolBars"><ToolBars /></Box>
      <TopJumper />
    </Box>
    )
  }
}
