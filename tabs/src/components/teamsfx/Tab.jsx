import React from "react";
import { Button, Header, Text } from '@fluentui/react-northstar'
import Deeplink from './tab/Deeplink.jsx'
import StaticTab from './tab/StaticTab.jsx'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";
import Code from "../util/CodeUtil"

function InitializeCode() {
  const initializeDefinition = '// @microsoft.teams-js\n// import * as microsoftTeams from "@microsoft/teams-js";\nfunction initialize(callback?: () => void, validMessageOrigins?: string[])'

  return (
    <div>
      <Header as="h4" content="Initializes the library" />
      <Text content='This must be called before any other SDK calls but after the frame is loaded successfully.' />
      <Code code={ initializeDefinition } />
    </div>
  )
}

export default class Tab extends React.Component {
  render() {
    return (
      <div className="Tab page">
        <Header as="h2" content="Tab" />

        <ul id="OverallList">
          <li><Button onClick={ () => ScrollToAnchor('Deeplink') }>Deeplink</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Static Tab') }>Static Tab</Button></li>
        </ul>
        <InitializeCode />
        <div id="Deeplink"><Deeplink /></div>
        <div id="Static Tab"><StaticTab /></div>
        <TopJumper />
      </div>
    )
  }
}
