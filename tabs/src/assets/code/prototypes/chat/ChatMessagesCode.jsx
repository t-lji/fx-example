import React from "react";
import { 
  AcceptIcon,
  Avatar,
  Box,
  Chat,
  ChatItemProps,
  Header,
  MentionIcon,
  RedbangIcon,
  Segment, 
  Text } from '@fluentui/react-northstar'

export default function ChatMessages() {
  const MicrosoftAvatar = {
    image: 'Microsoft.png',
    status: { color: 'green', icon: <AcceptIcon /> },
  }
  const items = [
    {
      message: (
        <Chat.Message
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
        <Chat.Message
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
        <Chat.Message
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
        <Chat.Message
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
        <Chat.Message
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
      contentPosition: 'end',
      key: 'message-id-5',
    },
  ]

  return (
    <Box>
      <Box styles={{ marginTop: '20px' }}>
        <Segment>
          <Header as="h3" content="Important and mention messages" />
          <Text>Important and mention messages support in Teams theme.</Text>
        </Segment>
        <Segment><Chat items={items} /></Segment>
      </Box>
    </Box>
  )
}
