import React from "react";
import { 
  Box, 
  EmojiIcon, 
  Header, 
  LikeIcon, 
  Reaction,
  SplitButton, 
  Text, } from '@fluentui/react-northstar'
import ReactionCode from '!!raw-loader!../../../assets/code/component/chat/ReactionCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse, ComponentPrototype } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function ReactionItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Reaction" />

      <Text weight="regular">
        A Reaction indicates user's emotion or perception. Used to display 
        user's reaction for entity in Chat (e.g. message).
      </Text>
      <Collapse>
        <Code code={ ReactionCode } />
      </Collapse>
      <Reaction.Group
        items={[
          {
            icon: <LikeIcon />,
            content: '2K',
            key: 'up',
          },
          {
            icon: <EmojiIcon />,
            content: 10,
            key: 'smile',
          },
        ]}
      />
    </Box>
  )
}

export default function Chats() {
  const menu = [
    {
      key: 'ReactionItem',
      content: 'Reaction',
    },
  ]
  return (
    <ComponentPrototype title="Chat">
      <SplitButton
        menu={ menu }
        button={{
          content: 'Go To',
          'aria-roledescription': 'splitbutton',
          'aria-describedby': 'instruction-message-primary-button',
        }}
        primary
        toggleButton={{
          'aria-label': 'more options',
        }}
        onMenuItemClick= { (e, { index }) => ScrollToAnchor(menu[index].key) }
      />
      <ReactionItem id="ReactionItem" />
    </ComponentPrototype>
  )
}
