import React from "react";
import { 
  AcceptIcon,
  Avatar,
  Box,
  Button,
  Chat as ChatTag,
  ChatItemProps,
  Header,
  MentionIcon,
  RedbangIcon,
  Segment, 
  ShorthandCollection } from '@fluentui/react-northstar'
import ChatMessagesCode from '!!raw-loader!../../code/prototypes/chat/ChatMessagesCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function ChatMessages() {
  const MicrosoftAvatar = {
    image: 'Microsoft.png',
    status: { color: 'green', icon: <AcceptIcon /> },
  }
  const items: ShorthandCollection<ChatItemProps> = [
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
    <div>
      <Header as="h4" content="Chat messages" />

      <Collapse>
        <Code code={ ChatMessagesCode } />
      </Collapse>
      <Box styles={{ marginTop: '20px' }}>
        <Segment>
          <Header as="h3" content="Important and mention messages" />
          <p>Important and mention messages support in Teams theme</p>
        </Segment>
        <Segment><ChatTag items={items} /></Segment>
      </Box>
    </div>
  )
}

export default class Chat extends React.Component {
  render() {
    return (
      <div className="Chat page">
        <Header as="h2" content="Chat" />
        <ul id="ChatList">
          <li><Button onClick={ () => ScrollToAnchor('Chat messages') }>Chat messages</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Compact chat density') }>Compact chat density</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Mentions') }>Mentions</Button></li>
        </ul>
        <div id="Chat messages"><ChatMessages /></div>
      </div>
    )
  }
}
