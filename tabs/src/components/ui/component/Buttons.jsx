import React, { useState } from "react";
import { 
  Alert,
  Attachment, 
  Box, 
  Button, 
  ChannelShareIcon,
  ChatIcon,
  ContactGroupIcon,
  Datepicker,
  DayOfWeek,
  Dialog,
  Divider,
  ExpandIcon,
  Flex,
  Grid,
  Header, 
  MenuButton,
  MoreIcon, 
  QnaIcon,
  Ref,
  SplitButton,
  TableIcon, 
  Text,
  Tooltip } from '@fluentui/react-northstar'
import AttachmentCode from '!!raw-loader!../../../assets/code/component/button/AttachmentCode.jsx'
import DatepickerCode from '!!raw-loader!../../../assets/code/component/button/DatepickerCode.jsx'
import DialogCode from '!!raw-loader!../../../assets/code/component/button/DialogCode.jsx'
import MenuButtonCode from '!!raw-loader!../../../assets/code/component/button/MenuButtonCode.jsx'
import SplitButtonCode from '!!raw-loader!../../../assets/code/component/button/SplitButtonCode.jsx'
import TooltipCode from '!!raw-loader!../../../assets/code/component/button/TooltipCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse, ComponentPrototype } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function AttachmentItem(props) {
  const handleClick = message => e => {
    alert(`'${message}' was clicked`)
    e.stopPropagation()
  }

  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Attachment" />

      <Text weight="regular">
        An Attachment represents a file or media attachment, 
        which may contain some metadata or actions.
      </Text>
      <Collapse>
        <Code code={ AttachmentCode } />
      </Collapse>
      <Attachment
        actionable
        icon={<TableIcon />}
        header="Document.docx"
        description="800 Kb"
        action={{
          icon: <MoreIcon />,
          onClick: handleClick('More Action'),
          title: 'More Action',
        }}
        progress={33}
        onClick={handleClick('Attachment')}
      />
    </Box>
  )
}

function DatepickerItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Datepicker" />

      <Text weight="regular">
        A Datepicker is a control which is used to display dates grid and allow 
        user to select them.
      </Text>
      <Collapse>
        <Code code={ DatepickerCode } />
      </Collapse>
      <Datepicker 
        firstDayOfWeek={DayOfWeek.Monday} 
        inputPlaceholder="Select your date here!"
        input={{
          clearable: true,
        }}
        today={new Date()}
      />
    </Box>
  )
}

function DialogItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Dialog" />

      <Text weight="regular">
        A Dialog displays important information on top of a page which requires 
        a user's attention, confirmation, or interaction. Dialogs are purposefully 
        interruptive, so they should be used sparingly.
      </Text>
      <Collapse>
        <Code code={ DialogCode } />
      </Collapse>
      <Dialog
        cancelButton="Cancel"
        confirmButton="Confirm"
        content="This is content"
        header="This is header"
        footer={{
          children: (Component, props) => {
            const { styles, ...rest } = props
            return (
              <Flex styles={styles}>
                <Text content="This is footer" color="brand" />
                <Flex.Item push>
                  <Component {...rest} />
                </Flex.Item>
              </Flex>
            )
          },
        }}
        trigger={<Button content="Open a dialog" />}
      />
    </Box>
  )
}

function MenuButtonItem(props) {
  const [alertFlag, setAlert] = useState(false);
  const showAlert = () => {
    setAlert(true) || setTimeout(() => { setAlert(false) }, 2000)
  }
  const menuItem = [
    '1',
    '2',
    '3',
    {
      content: 'submenu',
      menu: {
        items: ['4', '5'],
      },
    },
  ]
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="MenuButton" />

      <Text weight="regular">
        A MenuButton displays a menu connected to trigger element.
      </Text>
      <Collapse>
        <Code code={ MenuButtonCode } />
      </Collapse>
      <>
        <Flex gap="gap.smaller">
          <MenuButton
            trigger={<Button icon={<ExpandIcon />} content="Click" aria-label="Click button" />}
            menu={ menuItem }
            on="click"
          />
          <MenuButton
            trigger={<Button icon={<ExpandIcon />} content="Hover" aria-label="Hover button" />}
            menu={ menuItem }
            on="hover"
          />
          <MenuButton
            trigger={<Button icon={<ExpandIcon />} content="Focus" aria-label="Focus button" />}
            menu={ menuItem }
            on="focus"
          />
          <MenuButton
            trigger={
              <Button
                icon={<ExpandIcon />}
                content="Context"
                aria-label="Context button"
                onClick={ showAlert }
              />
            }
            menu={ menuItem }
            on="context"
          />
        </Flex>
        {alertFlag && (
          <Alert
            warning
            content="Right, you can still click the button! Right click opens the MenuButton."
          />
        )}
      </>
    </Box>
  )
}

function SplitButtonItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="SplitButton" />

      <Text weight="regular">
        A SplitButton enables users to take one of several related actions, one 
        being dominant and rest being displayed in a menu.
      </Text>
      <Collapse>
        <Code code={ SplitButtonCode } />
      </Collapse>
      <>
        <SplitButton
          menu={[
            {
              key: 'group',
              content: 'New group message',
              icon: <ContactGroupIcon />,
            },
            {
              key: 'channel',
              content: 'New channel message',
              icon: <ChannelShareIcon />,
            },
          ]}
          button={{
            content: 'New conversation',
            'aria-roledescription': 'splitbutton',
            'aria-describedby': 'instruction-message-primary-button',
            'icon': <ChatIcon />
          }}
          primary
          toggleButton={{
            'aria-label': 'more options',
          }}
          onMainButtonClick={() => alert('button was clicked')}
        />
        <span
          aria-hidden="true"
          id="instruction-message-primary-button"
          style={{
            opacity: 0,
          }}
        >
          to open menu, press Alt + Arrow Down
        </span>
      </>
    </Box>
  )
}

function TooltipItem(props) {
  const [target, setTarget] = useState(null)
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Tooltip" />

      <Text weight="regular">
        A Tooltip displays additional non-modal information on top of its target 
        element. Tooltip doesn't receive focus and cannot contain focusable elements.
      </Text>
      <Collapse>
        <Code code={ TooltipCode } />
      </Collapse>
      <Grid columns="auto 1fr">
      {/* CUSTOM DOM ELEMENT is used as target for Tooltip */}
      <Tooltip
        target={target}
        trigger={
          <Button
            icon={<QnaIcon />}
            circular
            styles={{
              cursor: 'pointer',
            }}
          />
        }
        content="well, yes, I am just a garbish text ¯\_(ツ)_/¯"
        position="below"
      />
        <Box
          style={{
            marginLeft: 10,
          }}
        >
          <Text>Could you guess what does this text means? :)</Text>
          <Divider />
          <Ref innerRef={setTarget}>
            <Text>
              "To the lascivious looking-glass I, that love's majesty to strut before a want love's
              majesto, to the souls of York."
            </Text>
          </Ref>
        </Box>
      </Grid>
    </Box>
  )
}

export default function Buttons() {
  return (
    <Box>
      <ul id="ButtonList">
        <li><Button onClick={ () => ScrollToAnchor('AttachmentItem') }>Attachment</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('DatepickerItem') }>Datepicker</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('DialogItem') }>Dialog</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('MenuButtonItem') }>MenuButton</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('SplitButtonItem') }>SplitButton</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('TooltipItem') }>Tooltip</Button></li>
      </ul>
      <ComponentPrototype title="Button">
        <AttachmentItem id="AttachmentItem" />
        <DatepickerItem id="DatepickerItem" />
        <DialogItem id="DialogItem" />
        <MenuButtonItem id="MenuButtonItem" />
        <SplitButtonItem id="SplitButtonItem" />
        <TooltipItem id="TooltipItem" />
      </ComponentPrototype>
    </Box>
  )
}