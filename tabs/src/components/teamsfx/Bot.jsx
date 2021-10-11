import React from "react";
import { Box, Flex, SplitButton } from '@fluentui/react-northstar'
import AdaptiveCard from './bot/AdaptiveCard.jsx'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";

export default class Bot extends React.Component {
  render() {
    const menu = [
      {
        key: 'Adaptive Card',
        content: 'Adaptive Card',
      },
    ]
    return (
      <Box className="Bot page">
        <Flex gap="gap.small">
          <Box class="HeaderBox">
            <Box class="HeaderContent">
              <SplitButton
                menu={ menu }
                button={{
                  content: 'Bot',
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
            <Box id="Adaptive Card"><AdaptiveCard /></Box>
            <TopJumper />
          </Box>
        </Flex>
      </Box>
    )
  }
}
