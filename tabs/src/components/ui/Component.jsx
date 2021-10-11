import React from "react";
import { Box, Flex, SplitButton } from '@fluentui/react-northstar'
import Buttons from './component/Buttons.jsx'
import Chats from './component/Chats.jsx'
import Layouts from './component/Layouts.jsx'
import Media from './component/Media.jsx'
import Texts from './component/Texts.jsx'
import Other from './component/Other.jsx'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";

export default function Component() {
  const menu = [
    {
      key: 'Buttons',
      content: 'Button',
    },
    {
      key: 'Chats',
      content: 'Chat',
    },
    {
      key: 'Layouts',
      content: 'Layout',
    },
    {
      key: 'Media',
      content: 'Media',
    },
    {
      key: 'Other',
      content: 'Other',
    },
    {
      key: 'Texts',
      content: 'Text',
    },
  ]
  return (
    <Box className="Component page">
      <Flex gap="gap.small">
        <Box class="HeaderBox">
          <Box class="HeaderContent">
          <SplitButton
            menu={ menu }
            button={{
              content: 'Component',
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
          <Box id="Buttons"><Buttons /></Box>
          <Box id="Chats"><Chats /></Box>
          <Box id="Layouts"><Layouts /></Box>
          <Box id="Media"><Media /></Box>
          <Box id="Other"><Other /></Box>
          <Box id="Texts"><Texts /></Box>
          <TopJumper />
        </Box>
      </Flex>
    </Box>
  )
}
