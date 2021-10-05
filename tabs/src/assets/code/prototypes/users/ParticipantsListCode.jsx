import React from "react";
import { Avatar, Box, Flex, Header, List, MenuButton, MoreIcon, Segment, Text } from '@fluentui/react-northstar';

export default function ParticipantsList() {
  const menu = ['Open', 'Remove from list'];

  const ActiveBarItem = props => (
    <Flex column hAlign="center" padding="padding.medium">
      <Avatar name={props.name} size="largest" />
      <Flex gap="gap.small">
        <Text content={props.name} />
        <MenuButton trigger={<MoreIcon />} menu={menu} />
      </Flex>
    </Flex>
  );

  const itemRenderer = (Component, props) => <MenuButton contextMenu trigger={<Component {...props} />} menu={menu} />;

  const items3 = [
    {
      key: 'robert',
      content: <ActiveBarItem name="Robert Tolbert" />,
      children: itemRenderer,
    },
    {
      key: 'celeste',
      content: <ActiveBarItem name="Celeste Burton" />,
      children: itemRenderer,
    },
    {
      key: 'cecil',
      content: <ActiveBarItem name="Cecil Folk" />,
      children: itemRenderer,
    },
  ];

  return (
    <Box>
      <Header as="h3" content="Participants List" />

      <Box styles={{ marginTop: '20px' }}>
        <Segment>
          <Header as="h3" content="List with context menu" />
          <Text>Context menu can be opened by clicking on the more button or by right mouse button</Text>
        </Segment>
        <Segment><List navigable items={items3} horizontal /></Segment>
      </Box>
    </Box>
  )
}