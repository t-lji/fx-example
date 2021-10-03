import React from "react";
import { Button, Header } from '@fluentui/react-northstar'
import Buttons from './component/Buttons.jsx'
import Chats from './component/Chats.jsx'
import Text from './component/Text.jsx'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";

export default class Component extends React.Component {
  render() {
    return (
      <div className="Component page">
        <Header as="h2" content="Component" />
        <ul id="ComponentList">
          <li><Button onClick={ () => ScrollToAnchor('Buttons') }>Buttons</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Chats') }>Chats</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Layouts') }>Layouts</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Media') }>Media</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Other') }>Other</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Text') }>Text</Button></li>
        </ul>
        <div id="Buttons"><Buttons /></div>
        <div id="Chats"><Chats /></div>
        <div id="Text"><Text /></div>
        <TopJumper />
      </div>
    )
  }
}
