import React from "react";
import { 
  AcceptIcon, 
  Alert, 
  BoldIcon,
  Button, 
  CodeSnippetIcon, 
  FontSizeIcon, 
  IndentIcon, 
  ItalicIcon, 
  Header, 
  Label, 
  LinkIcon, 
  LikeIcon, 
  MoreIcon, 
  OutdentIcon, 
  Pill, 
  QuoteIcon, 
  RemoveFormatIcon, 
  Text as TextTag, 
  TextArea, 
  Toolbar, 
  UnderlineIcon } from '@fluentui/react-northstar'
import AlertCode from '!!raw-loader!../../../assets/code/component/text/AlertCode.jsx'
import HeaderCode from '!!raw-loader!../../../assets/code/component/text/HeaderCode.jsx'
import LabelCode from '!!raw-loader!../../../assets/code/component/text/LabelCode.jsx'
import PillCode from '!!raw-loader!../../../assets/code/component/text/PillCode.jsx'
import TextCode from '!!raw-loader!../../../assets/code/component/text/TextCode.jsx'
import TextAreaCode from '!!raw-loader!../../../assets/code/component/text/TextAreaItemCode.jsx'
import ToolbarCode from '!!raw-loader!../../../assets/code/component/text/ToolbarCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function AlertItem() {
  return (
    <div>
      <Header as="h4" content="Alert" />

      <TextTag weight="regular" size="large">
        An Alert displays a brief, important message to attract a user's 
        attention without interrupting their current task.
      </TextTag>
      <Collapse>
        <Code code={ AlertCode } />
      </Collapse>
      <Alert 
        icon={ <LikeIcon /> }
        header="Alert Header" 
        content="Alert content" 
        visible
        success />
    </div>
  )
}

function HeaderItem() {
  return (
    <div>
      <Header as="h4" content="Header" />

      <TextTag weight="regular" size="large">
        A Header organises the content by declaring a content's topic.
      </TextTag>
      <Collapse>
        <Code code={ HeaderCode } />
      </Collapse>
      <Header 
        color={ 'brand' }
        as="h1"
        content="Header Content"
        description={{
          content: 'Header Description',
          color: 'orange'
        }}
        />
    </div>
  )
}

function LabelItem() {
  return (
    <div>
      <Header as="h4" content="Label" />

      <TextTag weight="regular" size="large">
        A Label allows user to classify content.
      </TextTag>
      <Collapse>
        <Code code={ LabelCode } />
      </Collapse>
      <Label 
        color={ 'brand' }
        content="Label Content"
        icon={ <AcceptIcon /> } iconPosition="start"
        image="pic/Microsoft.png"
        imagePosition="end"
        />
    </div>
  )
}

function PillItem() {
  return (
    <div>
      <Header as="h4" content="Pill" />

      <TextTag weight="regular" size="large">
        THIS COMPONENT IS UNSTABLE Pills should be used 
        when representing an input, as a way to filter content, 
        or to represent an attribute.
      </TextTag>
      <Collapse>
        <Code code={ PillCode } />
      </Collapse>
      <Pill 
        content="Pill Content"
        appearance="outline"
        icon={ <AcceptIcon /> }
        />
    </div>
  )
}

function TextItem() {
  return (
    <div>
      <Header as="h4" content="Text" />

      <TextTag weight="regular" size="large">
        A Text consistently styles and formats occurrences of text.
      </TextTag>
      <Collapse>
        <Code code={ TextCode } />
      </Collapse>
      <TextTag 
        disabled 
        content="Text Content"
        weight="semibold"
        size="larger"
      />
    </div>
  )
}

function TextAreaItem() {
  return (
    <div>
      <Header as="h4" content="TextArea" />

      <TextTag weight="regular" size="large">
        A TextArea is a multi-line plan-text editing control.
      </TextTag>
      <Collapse>
        <Code code={ TextAreaCode } />
      </Collapse>
      <TextArea 
        inverted
        resize="both" 
        placeholder="No more than 10 characters can be here" 
        maxLength={ 10 }
      />
    </div>
  )
}

function ToolbarItem() {
  const stateReducer = (prevState, action) => ({ ...prevState, [action]: !prevState[action] })
  const [state, dispatch] = React.useReducer(stateReducer, {
    bold: false,
    italic: false,
    more: false,
    underline: false,
  })

  return (
    <div>
      <Header as="h4" content="Toolbar" />

      <TextTag weight="regular" size="large">
        A Toolbar is a container for grouping a set of controls, 
        often action controls (e.g. buttons) or input controls (e.g. checkboxes).
      </TextTag>
      <Collapse>
        <Code code={ ToolbarCode } />
      </Collapse>

      <Toolbar
        aria-label="Default"
        items={[
          {
            icon: (
              <BoldIcon
                {...{
                  outline: true,
                }}
              />
            ),
            key: 'bold',
            kind: 'toggle',
            active: state.bold,
            title: 'Toggle bold',
            onClick: () => dispatch('bold'),
          },
          {
            icon: (
              <ItalicIcon
                {...{
                  outline: true,
                }}
              />
            ),
            key: 'italic',
            kind: 'toggle',
            active: state.italic,
            title: 'Toggle italic',
            onClick: () => dispatch('italic'),
          },
          {
            icon: (
              <UnderlineIcon
                {...{
                  outline: true,
                }}
              />
            ),
            key: 'underline',
            kind: 'toggle',
            active: state.underline,
            title: 'Toggle underline',
            onClick: () => dispatch('underline'),
          },
          {
            kind: 'divider',
          },
          {
            icon: (
              <FontSizeIcon
                {...{
                  outline: true,
                }}
              />
            ),
            key: 'font-size',
            title: 'Font size',
          },
          {
            icon: (
              <RemoveFormatIcon
                {...{
                  outline: true,
                }}
              />
            ),
            key: 'remove-format',
            title: 'Remove formatting',
          },
          {
            kind: 'divider',
          },
          {
            icon: (
              <OutdentIcon
                {...{
                  outline: true,
                }}
              />
            ),
            key: 'outdent',
            title: 'Outdent',
          },
          {
            icon: (
              <IndentIcon
                {...{
                  outline: true,
                }}
              />
            ),
            key: 'indent',
            title: 'Indent',
          },
          {
            kind: 'divider',
          },
          {
            icon: (
              <MoreIcon
                {...{
                  outline: true,
                }}
              />
            ),
            key: 'more',
            active: state.more,
            title: 'More',
            menu: [
              {
                key: 'quote',
                content: 'Quote',
                icon: <QuoteIcon />,
              },
              {
                key: 'link',
                content: 'Link',
                icon: <LinkIcon />,
                disabled: true,
              },
              {
                key: 'code',
                content: 'Code snippet',
                icon: <CodeSnippetIcon />,
              },
            ],
            menuOpen: state.more,
            onMenuOpenChange: () => dispatch('more'),
          },
        ]}
      />
    </div>
  )
}

export default function Text() {
  return (
    <div>
      <Header as="h3" content="Text" />
      <ul id="TextList">
        <li><Button onClick={ () => ScrollToAnchor('Alert') }>Alert</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('Header') }>Header</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('Label') }>Label</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('Pill') }>Pill</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('Text') }>Text</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('TextArea') }>TextArea</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('Toolbar') }>Toolbar</Button></li>
      </ul>
      <div id="Alert"><AlertItem /></div>
      <div id="Header"><HeaderItem /></div>
      <div id="Label"><LabelItem /></div>
      <div id="Pill"><PillItem /></div>
      <div id="Text"><TextItem /></div>
      <div id="TextArea"><TextAreaItem /></div>
      <div id="Toolbar"><ToolbarItem /></div>
    </div>
  )
}
