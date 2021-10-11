import React from "react";
import { 
  AcceptIcon,
  Avatar,
  Box,
  Button,
  Chat,
  Divider,
  EditIcon,
  ExclamationTriangleIcon,
  EyeFriendlierIcon,
  Flex,
  Header,
  MentionIcon,
  RetryIcon,
  Segment,
  Text } from '@fluentui/react-northstar'

export default function ChatCompact() {
  const error = (
    <Flex space="between" vAlign="center">
      <Flex gap="gap.small" vAlign="center">
        <ExclamationTriangleIcon outline size="small" />
        <Text content="Failed to Send" error size="small" />
      </Flex>
      <Button iconOnly text size="small" title="Retry" content={<RetryIcon />} />
    </Flex>
  );
  const [robinAvatar, robertAvatar] = [
    'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobinCounts.jpg',
    'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg',
  ].map(src => ({
    image: src,
    size: 'smallest',
    status: {
      color: '#6bb700',
      icon: <AcceptIcon />,
      size: 'smallest',
    },
  }))
  const items = [
    {
      gutter: <Avatar {...robertAvatar} />,
      message: <Chat.Message content="Hello" author="Robert" timestamp="10:15 PM" mine />,
      attached: 'top',
      key: 'message-id-1',
    },
    {
      message: <Chat.Message header={ error } content="I'm back!" author="Robert" timestamp="10:15 PM" mine />,
      attached: true,
      key: 'message-id-2',
    },
    {
      message: (
        <Chat.Message
          content="What do you think about goodFood.com?"
          author="Robert"
          details={<EditIcon outline />}
          timestamp="10:16 PM"
          mine
        />
      ),
      attached: 'bottom',
      key: 'message-id-3',
    },
    {
      gutter: <Avatar {...robinAvatar} />,
      message: (
        <Chat.Message
          content={
            <>
              {'Hi '}
              <Text atMention="me" content="Robert" />
              {'!'}
            </>
          }
          author="Robin"
          timestamp="10:20 PM"
          badge={{
            icon: <MentionIcon />,
          }}
          variables={{
            hasMention: true,
          }}
        />
      ),
      attached: 'top',
      key: 'message-id-4',
    },
    {
      message: <Chat.Message content="Looks good!" author="Robin" timestamp="10:21 PM" />,
      attached: true,
      key: 'message-id-5',
    },
    {
      message: (
        <Chat.Message content="I also like great-food.com." author="Robin" timestamp="10:25 PM" />
      ),
      attached: 'bottom',
      key: 'message-id-6',
    },
    {
      gutter: <Avatar {...robertAvatar} />,
      message: (
        <Chat.Message
          content="Would you like to grab lunch there?"
          author="Robert"
          timestamp="10:30 PM"
          mine
        />
      ),
      key: 'message-id-7',
    },
    {
      gutter: <Avatar {...robinAvatar} />,
      message: <Chat.Message content="Sure! Let's try it." author="Robin" timestamp="10:32 PM" />,
      key: 'message-id-8',
    },
    {
      children: <Divider content="Today" />,
      key: 'message-id-9',
    },
    {
      gutter: <Avatar {...robertAvatar} />,
      message: (
        <Chat.Message
          content="Ok, let's go."
          author="Robert"
          timestamp="11:15 PM"
          mine
          readStatus={{
            title: 'Read',
            content: <EyeFriendlierIcon size="small" />,
          }}
        />
      ),
      key: 'message-id-10',
    },
  ]
  return (
    <Box>
      <Box styles={{ marginTop: '20px' }}>
        <Segment>
          <Header as="h3" content="Important and mention messages" />
          <Text>Compact chat messages have the author floating in the content</Text>
          <Text>Chat messages can show edited and translated status, sent and read 
            receipt status, have badges for importance and at-mentions, display 
            an error state if sending failed</Text>
        </Segment>
        <Segment><Chat items={items} density="compact" /></Segment>
      </Box>
    </Box>
  )
}