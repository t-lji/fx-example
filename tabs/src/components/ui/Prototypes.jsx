import React from "react";
import { Button, Header } from '@fluentui/react-northstar'
import "./Overall.css";
import Chat from './prototypes/Chat.jsx'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";

export default class Prototypes extends React.Component {
  render() {
    return (
      <div className="Prototypes page">
        <Header as="h2" content="Prototypes" />
        <ul id="PrototypesList">
          <li><Button onClick={ () => ScrollToAnchor('Chat') }>Chat</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('LayOut') }>LayOut</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Text') }>Text</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('User') }>User</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('ToolBar') }>ToolBar</Button></li>
        </ul>
        <div id="Chat"><Chat /></div>
      <TopJumper />
    </div>
    )
  }
}
