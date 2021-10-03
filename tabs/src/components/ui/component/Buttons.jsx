import React, { useState } from "react";
import { 
  Alert,
  Attachment, 
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
import { Collapse } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function AttachmentItem() {
  const handleClick = message => e => {
    alert(`'${message}' was clicked`)
    e.stopPropagation()
  }

  return (
    <div>
      <Header as="h4" content="Attachment" />

      <Text weight="regular" size="large">
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
    </div>
  )
}

function DatepickerItem() {
  return (
    <div>
      <Header as="h4" content="Datepicker" />

      <Text weight="regular" size="large">
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
    </div>
  )
}

function DialogItem() {
  return (
    <div>
      <Header as="h4" content="Dialog" />

      <Text weight="regular" size="large">
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
    </div>
  )
}

function MenuButtonItem() {
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
    <div>
      <Header as="h4" content="MenuButton" />

      <Text weight="regular" size="large">
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
    </div>
  )
}

function SplitButtonItem() {
  return (
    <div>
      <Header as="h4" content="SplitButton" />

      <Text weight="regular" size="large">
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
    </div>
  )
}

function TooltipItem() {
  const [target, setTarget] = useState(null)
  return (
    <div>
      <Header as="h4" content="Tooltip" />

      <Text weight="regular" size="large">
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
        <div
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
        </div>
      </Grid>
    </div>
  )
}

export default function Buttons() {
  return (
    <div>
      <Header as="h3" content="Button" />
      <ul id="TextList">
        <li><Button onClick={ () => ScrollToAnchor('AttachmentItem') }>Attachment</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('DatepickerItem') }>Datepicker</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('DialogItem') }>Dialog</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('MenuButtonItem') }>MenuButton</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('SplitButtonItem') }>SplitButton</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('TooltipItem') }>Tooltip</Button></li>
      </ul>
      <div id="AttachmentItem"><AttachmentItem /></div>
      <div id="DatepickerItem"><DatepickerItem /></div>
      <div id="DialogItem"><DialogItem /></div>
      <div id="MenuButtonItem"><MenuButtonItem /></div>
      <div id="SplitButtonItem"><SplitButtonItem /></div>
      <div id="TooltipItem"><TooltipItem /></div>
    </div>
  )
}