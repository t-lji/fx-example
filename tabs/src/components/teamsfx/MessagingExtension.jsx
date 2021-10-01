import React from "react";
import { Button, Header } from '@fluentui/react-northstar'
import ActionCommands from './messagingExtension/ActionCommands.jsx'
import SearchCommands from './messagingExtension/SearchCommands.jsx'
import LinkUnfurling from './messagingExtension/LinkUnfurling.jsx'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";

export default class MessagingExtension extends React.Component {
  render() {
    return (
      <div className="MessagingExtension page">
        <Header as="h2" content="Messaging Extension" />

        <ul id="OverallList">
          <li><Button onClick={ () => ScrollToAnchor('ActionCommands') }>Action Commands</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('SearchCommands') }>Search Commands</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('LinkUnfurling') }>Link Unfurling</Button></li>
        </ul>
        <div id="ActionCommands"><ActionCommands /></div>
        <div id="SearchCommands"><SearchCommands /></div>
        <div id="LinkUnfurling"><LinkUnfurling /></div>
        <TopJumper />
      </div>
    )
  }
}
