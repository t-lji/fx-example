import React from "react";
import { Box, Button, Flex, Header, SplitButton } from '@fluentui/react-northstar'
import "./Overall.css";
import Chat from './prototypes/Chat.jsx'
import Layout from './prototypes/Layout.jsx'
import Texts from './prototypes/Texts.jsx'
import Users from './prototypes/Users.jsx'
import ToolBars from './prototypes/ToolBars.jsx'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";

export default class Prototypes extends React.Component {
  render() {
    const menu = [
      {
        key: 'Chat',
        content: 'Chat',
      },
      {
        key: 'Layout',
        content: 'Layout',
      },
      {
        key: 'Texts',
        content: 'Text',
      },
      {
        key: 'Users',
        content: 'Users',
      },
      {
        key: 'ToolBars',
        content: 'ToolBar',
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
            <Box id="Chat"><Chat /></Box>
            <Box id="Layout"><Layout /></Box>
            <Box id="Texts"><Texts /></Box>
            <Box id="ToolBars"><ToolBars /></Box>
            <Box id="Users"><Users /></Box>
            <TopJumper />
          </Box>
        </Flex>
      </Box>
    )
  }
}
