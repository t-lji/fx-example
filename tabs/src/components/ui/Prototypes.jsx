import React from "react";
import { Box, Flex, SplitButton } from '@fluentui/react-northstar'
import "./Overall.css";
import Chats from './prototypes/Chats.jsx'
import Layouts from './prototypes/Layouts.jsx'
import Texts from './prototypes/Texts.jsx'
import Users from './prototypes/Users.jsx'
import ToolBars from './prototypes/ToolBars.jsx'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";

export default function Prototypes() {
  const menu = [
    {
      key: 'Chats',
      content: 'Chat',
    },
    {
      key: 'Layouts',
      content: 'Layout',
    },
    {
      key: 'Texts',
      content: 'Text',
    },
    {
      key: 'ToolBars',
      content: 'ToolBar',
    },
    {
      key: 'Users',
      content: 'Users',
    },
  ]
  return (
    <Box className="Prototypes page">
      <Flex gap="gap.small">
        <Box class="HeaderBox">
          <Box class="HeaderContent">
          <SplitButton
            menu={ menu }
            button={{
              content: 'Prototypes',
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
          <Box id="Chats"><Chats /></Box>
          <Box id="Layouts"><Layouts /></Box>
          <Box id="Texts"><Texts /></Box>
          <Box id="ToolBars"><ToolBars /></Box>
          <Box id="Users"><Users /></Box>
          <TopJumper />
        </Box>
      </Flex>
    </Box>
  )
}
