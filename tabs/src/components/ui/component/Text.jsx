import React from "react";
import { 
  AcceptIcon, 
  Alert, 
  BoldIcon,
  Box, 
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
import { Collapse, ComponentPrototype } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function AlertItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Alert" />

      <TextTag weight="regular">
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
    </Box>
  )
}

function HeaderItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Header" />

      <TextTag weight="regular">
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
    </Box>
  )
}

function LabelItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Label" />

      <TextTag weight="regular">
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
    </Box>
  )
}

function PillItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Pill" />

      <TextTag weight="regular">
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
    </Box>
  )
}

function TextItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Text" />

      <TextTag weight="regular">
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
    </Box>
  )
}

function TextAreaItem(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="TextArea" />

      <TextTag weight="regular">
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
    </Box>
  )
}

function ToolbarItem(props) {
  const stateReducer = (prevState, action) => ({ ...prevState, [action]: !prevState[action] })
  const [state, dispatch] = React.useReducer(stateReducer, {
    bold: false,
    italic: false,
    more: false,
    underline: false,
  })

  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Toolbar" />

      <TextTag weight="regular">
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
    </Box>
  )
}

export default function Text() {
  return (
    <Box>
      <ul id="TextList">
        <li><Button onClick={ () => ScrollToAnchor('AlertItem') }>Alert</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('HeaderItem') }>Header</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('LabelItem') }>Label</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('PillItem') }>Pill</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('TextItem') }>Text</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('TextAreaItem') }>TextArea</Button></li>
        <li><Button onClick={ () => ScrollToAnchor('ToolbarItem') }>Toolbar</Button></li>
      </ul>
      <ComponentPrototype title="Text">
        <AlertItem id="AlertItem" />
        <HeaderItem id="HeaderItem" />
        <LabelItem id="LabelItem" />
        <PillItem id="PillItem" />
        <TextItem id="TextItem" />
        <TextAreaItem id="TextAreaItem" />
        <ToolbarItem id="ToolbarItem" />
      </ComponentPrototype>
    </Box>
  )
}
