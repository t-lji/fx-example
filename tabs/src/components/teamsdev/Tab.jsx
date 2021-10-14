import React from "react";
import { Box, Flex, SplitButton } from '@fluentui/react-northstar'
import Deeplink from './tab/Deeplink.jsx'
import StaticTab from './tab/StaticTab.jsx'
import InitializeDefinitionCode from '!!raw-loader!../../assets/code/tab/InitializeDefinitionCode.js'
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";
import Code from "../util/CodeUtil"
import { Collapse, ComponentPrototype } from "../util/PageUtil.jsx";

function InitializeCode() {
  return (
    <ComponentPrototype 
      id="InitializeCode"
      title="Initialize Code" 
      description="This must be called before any other SDK calls but after the 
      frame is loaded successfully."
    >
      <Collapse>
        <Code code={ InitializeDefinitionCode } />
      </Collapse>
    </ComponentPrototype>
  )
}

export default class Tab extends React.Component {
  render() {
    const menu = [
      {
        key: 'InitializeCode',
        content: 'Initialize Code',
      },
      {
        key: 'Deeplink',
        content: 'Deeplink',
      },
      {
        key: 'StaticTab',
        content: 'Static Tab',
      },
    ]
    return (
      <Box className="Tab page">
        <Flex gap="gap.small">
          <Box class="HeaderBox">
            <Box class="HeaderContent">
              <SplitButton
                menu={ menu }
                button={{
                  content: 'Tab',
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
            <Box id="InitializeCode"><InitializeCode /></Box>
            <Box id="Deeplink"><Deeplink /></Box>
            <Box id="StaticTab"><StaticTab /></Box>
            <TopJumper />
          </Box>
        </Flex>
      </Box>
    )
  }
}

