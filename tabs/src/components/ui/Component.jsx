import React from "react";
import { Header } from '@fluentui/react-northstar'
import { Link } from 'react-router-dom'
import "./Overall.css";
import Text from './component/Text.jsx'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";

export default class Component extends React.Component {
  render() {
    return (
      <div className="Component page">
        <Header as="h2" content="Component" />
        <ul id="OverallList">
          <li><Link onClick={ () => ScrollToAnchor('Button') }>Button</Link></li>
          <li><Link onClick={ () => ScrollToAnchor('Chat') }>Chat</Link></li>
          <li><Link onClick={ () => ScrollToAnchor('Layout') }>Layout</Link></li>
          <li><Link onClick={ () => ScrollToAnchor('Media') }>Media</Link></li>
          <li><Link onClick={ () => ScrollToAnchor('Other') }>Other</Link></li>
          <li><Link onClick={ () => ScrollToAnchor('Text') }>Text</Link></li>
        </ul>
        <div id="Text"><Text /></div>
        <TopJumper />
      </div>
    )
  }
}
