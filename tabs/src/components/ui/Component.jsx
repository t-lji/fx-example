import React from "react";
import { Button, Header } from '@fluentui/react-northstar'
import Text from './component/Text.jsx'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";

export default class Component extends React.Component {
  render() {
    return (
      <div className="Component page">
        <Header as="h2" content="Component" />
        <ul id="ComponentList">
          <li><Button onClick={ () => ScrollToAnchor('Button') }>Button</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Chat') }>Chat</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Layout') }>Layout</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Media') }>Media</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Other') }>Other</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Text') }>Text</Button></li>
        </ul>
        <div id="Text"><Text /></div>
        <TopJumper />
      </div>
    )
  }
}
