import React from "react";
import { Box, Flex, SplitButton } from '@fluentui/react-northstar'
import ActionCommands from './messagingExtension/ActionCommands.jsx'
import SearchCommands from './messagingExtension/SearchCommands.jsx'
import LinkUnfurling from './messagingExtension/LinkUnfurling.jsx'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";

export default class MessagingExtension extends React.Component {
  render() {
    const menu = [
      {
        key: 'ActionCommands',
        content: 'Action Commands',
      },
      {
        key: 'SearchCommands',
        content: 'Search Commands',
      },
      {
        key: 'LinkUnfurling',
        content: 'Link Unfurling',
      },
    ]
    return (
      <Box className="MessagingExtension page">
        <Flex gap="gap.small">
          <Box class="HeaderBox">
            <Box class="HeaderContent">
              <SplitButton
                menu={ menu }
                button={{
                  content: 'Messaging Extension',
                  'aria-roledescription': 'splitbutton',
                  'aria-describedby': 'instruction-message-primary-button',
                }}
                primary
                size="largest"
                toggleButton={{
                  'aria-label': 'more options',
                }}
                onMenuItemClick= { (e, { index }) => ScrollToAnchor(menu[index].key) }
              />
            </Box>
          </Box>
          <Box class="ContentBox">
            <Box id="ActionCommands"><ActionCommands /></Box>
            <Box id="SearchCommands"><SearchCommands /></Box>
            <Box id="LinkUnfurling"><LinkUnfurling /></Box>
            <TopJumper />
          </Box>
        </Flex>
      </Box>
    )
  }
}
