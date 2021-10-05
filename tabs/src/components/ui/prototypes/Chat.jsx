import React from "react";
import { 
  AcceptIcon,
  Avatar,
  Box,
  Button,
  Chat as ChatTag,
  ChatItemProps,
  Divider,
  EditIcon,
  ExclamationTriangleIcon,
  EyeFriendlierIcon,
  Flex,
  Header,
  MentionIcon,
  RedbangIcon,
  RetryIcon,
  Segment, 
  SplitButton,
  Text } from '@fluentui/react-northstar'
import ChatMessagesCode from '!!raw-loader!../../../assets/code/prototypes/chat/ChatMessagesCode.jsx'
import ChatCompactCode from '!!raw-loader!../../../assets/code/prototypes/chat/ChatCompactCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse, ComponentPrototype } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function ChatMessages(props) {
  const MicrosoftAvatar = {
    image: 'pic/Microsoft.png',
    status: { color: 'green', icon: <AcceptIcon /> },
  }
  const items = [
    {
      message: (
        <ChatTag.Message
          content="This is important message"
          author="John Doe"
          timestamp="Yesterday, 10:15 PM"
          mine
          badge={{ icon: <RedbangIcon /> }}
          variables={{ isImportant: true }}
        />
      ),
      contentPosition: 'end',
      attached: 'top',
      key: 'message-id-1',
    },
    {
      gutter: <Avatar {...MicrosoftAvatar} />,
      message: (
        <ChatTag.Message
          content="This is another important message (see how the borders radius respect the grouped ones)"
          author="Microsoft"
          timestamp="Yesterday, 10:15 PM"
          badge={{ icon: <RedbangIcon /> }}
          variables={{ isImportant: true }}
        />
      ),
      attached: 'top',
      key: 'message-id-2',
    },
    {
      gutter: <Avatar {...MicrosoftAvatar} />,
      message: (
        <ChatTag.Message
          content="This is mention message @John"
          author="Microsoft"
          timestamp="Yesterday, 10:15 PM"
          badge={{ icon: <MentionIcon /> }}
          variables={{ hasMention: true }}
        />
      ),
      attached: true,
      key: 'message-id-3',
    },
    {
      gutter: <Avatar {...MicrosoftAvatar} />,
      message: (
        <ChatTag.Message
          content="This is another mention message @John with custom color"
          author="Microsoft"
          timestamp="Yesterday, 10:15 PM"
          badge={{ icon: <MentionIcon /> }}
          variables={siteVars => ({
            hasMention: true,
            hasMentionColor: siteVars.colors.brand[600],
          })}
        />
      ),
      attached: 'bottom',
      key: 'message-id-4',
    },
    {
      message: (
        <ChatTag.Message
          content="The color for the important messages can also be changed!"
          author="Microsoft"
          timestamp="Yesterday, 10:16 PM"
          mine
          badge={{ icon: <RedbangIcon /> }}
          variables={siteVars => ({
            isImportant: true,
            isImportantColor: siteVars.colors.yellow[400],
          })}
        />
      ),
      contentPosition: 'end'
    },
  ]

  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Chat messages" />

      <Collapse>
        <Code code={ ChatMessagesCode } />
      </Collapse>
      <Box styles={{ marginTop: '20px' }}>
        <Segment>
          <Header as="h3" content="Important and mention messages" />
          <Text>Important and mention messages support in Teams theme</Text>
        </Segment>
        <Segment><ChatTag items={items} /></Segment>
      </Box>
    </Box>
  )
}

function ChatCompact(props) {
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
      message: <ChatTag.Message content="Hello" author="Robert" timestamp="10:15 PM" mine />,
      attached: 'top',
      key: 'message-id-1',
    },
    {
      message: <ChatTag.Message header={ error } content="I'm back!" author="Robert" timestamp="10:15 PM" mine />,
      attached: true,
      key: 'message-id-2',
    },
    {
      message: (
        <ChatTag.Message
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
        <ChatTag.Message
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
      message: <ChatTag.Message content="Looks good!" author="Robin" timestamp="10:21 PM" />,
      attached: true,
      key: 'message-id-5',
    },
    {
      message: (
        <ChatTag.Message content="I also like great-food.com." author="Robin" timestamp="10:25 PM" />
      ),
      attached: 'bottom',
      key: 'message-id-6',
    },
    {
      gutter: <Avatar {...robertAvatar} />,
      message: (
        <ChatTag.Message
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
      message: <ChatTag.Message content="Sure! Let's try it." author="Robin" timestamp="10:32 PM" />,
      key: 'message-id-8',
    },
    {
      children: <Divider content="Today" />,
      key: 'message-id-9',
    },
    {
      gutter: <Avatar {...robertAvatar} />,
      message: (
        <ChatTag.Message
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
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      
      <Header as="h3" content="Compact chat density" />

      <Collapse>
        <Code code={ ChatCompactCode } />
      </Collapse>
      <Box styles={{ marginTop: '20px' }}>
        <Segment>
          <Header as="h3" content="Compact chat messages" />
          <Text>Compact chat messages have the author floating in the content</Text>
          <Text>Chat messages can show edited and translated status, sent and read 
            receipt status, have badges for importance and at-mentions, display 
            an error state if sending failed</Text>
        </Segment>
        <Segment><ChatTag items={items} density="compact" /></Segment>
      </Box>
    </Box>
  )
}

export default class Chat extends React.Component {
  render() {
    const menu = [
      {
        key: 'Chat messages',
        content: 'Chat messages',
      },
      {
        key: 'Compact chat messages',
        content: 'Compact chat density',
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
        <ChatMessages id="Chat messages" />
        <ChatCompact id="Compact chat messages" />
      </ComponentPrototype>
    )
  }
}
