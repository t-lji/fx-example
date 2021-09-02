import React from "react";
import { 
  BoldIcon, 
  CodeSnippetIcon, 
  FontSizeIcon,
  IndentIcon, 
  ItalicIcon, 
  LinkIcon, 
  MoreIcon, 
  OutdentIcon, 
  QuoteIcon, 
  RemoveFormatIcon,
  Toolbar, 
  UnderlineIcon } from '@fluentui/react-northstar'

export default function ToolbarExample() {
  const stateReducer = (prevState, action) => ({ ...prevState, [action]: !prevState[action] })
  const [state, dispatch] = React.useReducer(stateReducer, {
    bold: false,
    italic: false,
    more: false,
    underline: false,
  })
  return (
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
  )
}
