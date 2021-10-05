import React from "react";
import * as ReactDOM from 'react-dom';
import { 
  AcceptIcon, 
  Avatar, 
  Box, 
  Flex, 
  Header, 
  List, 
  MenuButton, 
  MoreIcon, 
  Segment, 
  SplitButton,
  Text } from '@fluentui/react-northstar';
import ParticipantsListCode from '!!raw-loader!../../../assets/code/prototypes/users/ParticipantsListCode.jsx'
import HexagonalAvatarCode from '!!raw-loader!../../../assets/code/prototypes/users/HexagonalAvatarCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse, ComponentPrototype } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function HexagonalAvatar(props) {
  const CustomAvatar = (props) => {
    const { hexagonal, ...rest } = props;
  
    if (hexagonal) {
      return (
        <Avatar
          {...rest}
          image={{
            src: rest.image,
            children: (Component, props) => {
              const { src, ...restImageProps } = props;
              return (
                <svg
                  viewBox="0 0 34 34"
                  role="img"
                  id="hexagon-mask"
                  aria-labelledby="hexagon-mask"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect fill="transparent" clipPath="url(#bot-hexagon-clip-path)" width="34px" height="34px" />
                  <Component
                    as="image"
                    clipPath="url(#bot-hexagon-clip-path)"
                    width="34px"
                    height="34px"
                    xlinkHref={src}
                    {...restImageProps}
                  />
                </svg>
              );
            },
          }}
        />
      );
    }
    return <Avatar {...rest} />;
  };

  const statusProps = {
    icon: <AcceptIcon />,
    state: 'success',
    title: 'Available',
  };

  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Hexagonal Avatar" />

      <Collapse>
        <Code code={ HexagonalAvatarCode } />
      </Collapse>
      {/* Make sure that this is rendered only once in the application tree. */}
      {ReactDOM.createPortal(
        <svg xmlns="http://w3.org/2000/svg" style={{ width: 0, height: 0, position: 'absolute' }}>
          <defs role="presentation">
            <clipPath id="bot-hexagon-clip-path">
              <path d="M23.93,2H10.07C9,2,8.01,2.57,7.47,3.5l-6.92,12c-0.54,0.93-0.54,2.07,0,3l6.93,12c0.54,0.93,1.53,1.5,2.6,1.5h13.85c1.07,0,2.06-0.57,2.6-1.5l6.93-12c0.54-0.93,0.54-2.07,0-3l-6.93-12C25.99,2.57,25,2,23.93,2z" />
            </clipPath>
          </defs>
        </svg>,
        document.body,
        'bot-hexagon-clip-path',
      )}
      <Flex column padding="padding.medium" gap="gap.medium">
        <Box id={ props.id } styles={{ marginBottom: '40px' }}>
          <Text content="Hexagonal Avatar" />
          &emsp;
          <CustomAvatar
            hexagonal
            image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
            status={statusProps}
          />
        </Box>
        <Box id={ props.id } styles={{ marginBottom: '40px' }}>
          <Text content="Regular Avatar" />
          &emsp;
          <CustomAvatar
            image="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
            status={statusProps}
          />
        </Box>
      </Flex>
    </Box>
  )
}

function ParticipantsList(props) {
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
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Participants List" />

      <Collapse>
        <Code code={ ParticipantsListCode } />
      </Collapse>
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

export default function Users() {
  const menu = [
    {
      key: 'HexagonalAvatar',
      content: 'Hexagonal Avatar',
    },
    {
      key: 'ParticipantsList',
      content: 'Participants List',
    },
  ]
  return (
    <ComponentPrototype title="Users">
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
      <HexagonalAvatar id="HexagonalAvatar" />
      <ParticipantsList id="ParticipantsList" />
    </ComponentPrototype>
  )
}