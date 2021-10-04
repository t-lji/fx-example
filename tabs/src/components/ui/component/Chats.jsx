import React from "react";
import { 
  Box, 
  Button, 
  EmojiIcon, 
  Header, 
  LikeIcon,  
  Text, 
  Reaction } from '@fluentui/react-northstar'
import ReactionCode from '!!raw-loader!../../../assets/code/component/chat/ReactionCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function ReactionItem() {
  return (
    <Box>
      <Header as="h4" content="Reaction" />

      <Text weight="regular" size="large">
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
  return (
    <Box>
      <Header as="h3" content="Chat" />
      <ul id="ChatList">
        <li><Button onClick={ () => ScrollToAnchor('ReactionItem') }>Reaction</Button></li>
      </ul>
      <Box id="ReactionItem"><ReactionItem /></Box>
    </Box>
  )
}
