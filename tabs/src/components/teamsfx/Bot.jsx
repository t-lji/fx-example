import React from "react";
import { Box, Button, Header } from '@fluentui/react-northstar'
import AdaptiveCard from './bot/AdaptiveCard.jsx'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";

export default class Bot extends React.Component {
  render() {
    return (
      <Box className="Bot page">
        <Header as="h2" content="Bot" />

        <ul id="OverallList">
          <li><Button onClick={ () => ScrollToAnchor('Adaptive Card') }>Adaptive Card</Button></li>
        </ul>
        <Box id="AdaptiveCard"><AdaptiveCard /></Box>
        <TopJumper />
      </Box>
    )
  }
}
