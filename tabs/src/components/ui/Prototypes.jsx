import React from "react";
import { Button, Header } from '@fluentui/react-northstar'
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
      <div className="Prototypes page">
        <Header as="h2" content="Prototypes" />
        <ul id="PrototypesList">
          <li><Button onClick={ () => ScrollToAnchor('Chat') }>Chat</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('LayOut') }>LayOut</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Texts') }>Texts</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Users') }>Users</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('ToolBars') }>ToolBars</Button></li>
        </ul>
        <div id="Chat"><Chat /></div>
        <div id="LayOut"><LayOut /></div>
        <div id="Texts"><Texts /></div>
        <div id="Users"><Users /></div>
        <div id="ToolBars"><ToolBars /></div>
      <TopJumper />
    </div>
    )
  }
}
