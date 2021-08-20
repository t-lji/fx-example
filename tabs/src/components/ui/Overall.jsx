import React, { useState, useEffect } from "react";
import { Button, Label, Provider, Image, Menu, Header  } from '@fluentui/react-northstar'
import { Flex, Segment, FlexItem, Grid, createComponent, buttonBehavior } from '@fluentui/react-northstar'
import { AddIcon, EmailIcon, EmojiIcon, CloseIcon } from '@fluentui/react-icons-northstar'
import { AcceptIcon, ClipboardCopiedToIcon } from '@fluentui/react-icons-northstar'
import { Link } from 'react-router-dom'
import "./Overall.css";
import copy from 'copy-to-clipboard'; 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

class Code extends React.Component {
  render() {
  return <SyntaxHighlighter 
          language='jsx'
          style={dark}
          showLineNumbers={true}
          wrapLines={true}>
          {this.props.children.replace(/^\s+|\s+$/g, '')}
        </SyntaxHighlighter>
  }
}

function Theme() {
  const steps = ["Default", "Dark", "High contrast"];
  const [selectedMenuItem, setSelectedMenuItem] = useState("Default");
  const items = steps.map((step) => {
    return {
      key: step,
      content: (step + " Theme") || "",
      onClick: () => setSelectedMenuItem(step),
    };
  });
  return (
    <div>
      <Header as="h4" content="Themes" />
      <Menu defaultActiveIndex={0} items={items} underlined secondary />
      <div>
        <div>
          {selectedMenuItem === "Default" && (
            <div>
              <Image src="default_theme.png" />
            </div>
          )}
          {selectedMenuItem === "Dark" && (
            <div>
              <Image src="dark_theme.png" />
            </div>
          )}
          {selectedMenuItem === "High contrast" && (
            <div>
              <Image src="high_contrast_theme.png" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function NestingThemesNode() {
  return (
    <div>
      {/* Default theming */}
      <Header as="h4" content="Default theming" />
      <Button content="Button" />
      <Button icon={<AddIcon />} iconOnly primary />
      <Button icon={<EmailIcon />} content="Send email" secondary />
      <EmojiIcon size="larger" />
      <Label content="Label with icon" icon={<CloseIcon />} />

      {/* First nested theming */}
      <Provider
        theme={{
          componentVariables: {
            Button: {
              primaryBackgroundColor: 'darkred',
            },
          },
        }}
      >
        <div>
          <Header as="h4" content="First nested theming" />

          <Button content="Button" />
          <Button icon={<AddIcon />} iconOnly primary />
          <Button icon={<EmailIcon />} content="Send email" secondary />
          <EmojiIcon size="larger" />
          <Label content="Label with icon" icon={<CloseIcon />} />

          {/* Second nested theming */}
          <Provider
            theme={{
              componentStyles: {
                Button: {
                  root: { color: 'goldenrod' },
                },
              },
            }}
          >
            <div>
              <Header as="h4" content="Second nested theming" />

              <Button content="Button" />
              <Button icon={<AddIcon />} iconOnly primary />
              <Button icon={<EmailIcon />} content="Send email" secondary />
              <EmojiIcon size="larger" />
              <Label content="Label with icon" icon={<CloseIcon />} />
            </div>
          </Provider>
        </div>
      </Provider>
    </div>
  )
}

function NestingThemes() {
  const codeString = 
  '{/* Default theming */}\n'
  + '<Header as="h4" content="Default theming" />\n'
  + '<Button content="Button" />'
  + '<Button content="Button" />\n'
  + '<Button icon={<AddIcon />} iconOnly primary />\n'
  + '<Button icon={<EmailIcon />} content="Send email" secondary />\n'
  + '<EmojiIcon size="larger" />\n'
  + '<Label content="Label with icon" icon={<CloseIcon />} />\n'
  + '\n'
  + '{/* First nested theming */}\n'
  + '<Provider\n'
  + '  theme={{\n'
  + '    componentVariables: {\n'
  + '      Button: {\n'
  + '        primaryBackgroundColor: "darkred",\n'
  + '      },\n'
  + '    },\n'
  + '  }}\n'
  + '>\n'
  + '  <div>\n'
  + '    <Header as="h4" content="First nested theming" />\n'
  + '    \n'
  + '    <Button content="Button" />\n'
  + '    <Button icon={<AddIcon />} iconOnly primary />\n'
  + '    <Button icon={<EmailIcon />} content="Send email" secondary />\n'
  + '    <EmojiIcon size="larger" />\n'
  + '    <Label content="Label with icon" icon={<CloseIcon />} />\n'
  + '    \n'
  + '    {/* Second nested theming */}\n'
  + '    <Provider\n'
  + '      theme={{\n'
  + '        componentStyles: {\n'
  + '          Button: {\n'
  + '            root: { color: "goldenrod" },\n'
  + '          },\n'
  + '        },\n'
  + '      }}\n'
  + '    >\n'
  + '      <div>\n'
  + '        <Header as="h4" content="Second nested theming" />\n'
  + '        \n'
  + '        <Button content="Button" />\n'
  + '        <Button icon={<AddIcon />} iconOnly primary />\n'
  + '        <Button icon={<EmailIcon />} content="Send email" secondary />\n'
  + '        <EmojiIcon size="larger" />\n'
  + '        <Label content="Label with icon" icon={<CloseIcon />} />\n'
  + '      </div>\n'
  + '    </Provider>\n'
  + '  </div>\n'
  + '</Provider>\n';
  return (
    <div>
      <Header as="h3" content="Nesting Themes" />
      <StyledButton onClick={ () => { 
          if (copy(codeString)) {
            alert('success')
          } else {
            alert('error, please copy with your mouse');
          }
        }}></StyledButton>
      {/* <Button icon={ <ClipboardCopiedToIcon /> } content="click to copy code" onClick={ () => {
        if (copy(codeString)) {
          alert('success')
        } else {
          alert('error, please copy with your mouse');
        }
      }} /> */}
      <Code>{codeString}</Code>
      <NestingThemesNode />
    </div>
  )
}

const StyledButton = createComponent({
  displayName: 'StyledButton',
  defaultProps: {
    accessibility: buttonBehavior,
  },
  render: ({ config, children }) => {
    const { classes, accessibility } = config
    return (
      <Button {...accessibility.attributes.root} 
      className={classes.root} 
      content="click to copy code" 
      icon={ <ClipboardCopiedToIcon /> }
      >
        {children}
      </Button>
    )
  },
})

function Layout() {
  const flexGap = 
    '<Flex gap="gap.small">\n'
  + '  <Segment color="brand" content="Home" inverted />\n'
  + '  <Segment color="green" content="Search" inverted />\n'
  + '  <FlexItem push>\n'
  + '    <Segment color="red" content="Logout" inverted />\n'
  + '  </FlexItem>\n'
  + '</Flex>\n'
  + '<Flex column>\n'
  + '  <Segment color="brand" content="Header" inverted />\n'
  + '  <Segment content="Content" />\n'
  + '  <Segment color="green" content="Footer" inverted />\n'
  + '</Flex>\n'

  const flexColumn = 
    '<Flex column>\n'
  + '  <Segment color="brand" content="Header" inverted />\n'
  + '  <Segment content="Content" />\n'
  + '  <Segment color="green" content="Footer" inverted />\n'
  + '</Flex>\n'

  const gridFour = 
    '<Grid columns="repeat(4, 1fr)" rows="50px 150px 50px">\n'
  + '  <Segment\n'
  + '    color="brand"\n'
  + '    content="Header"\n'
  + '    inverted\n'
  + '    styles={{\n'
  + '      gridColumn: "span 4",\n'
  + '    }}\n'
  + '  />\n'
  + '  <Segment\n'
  + '    color="green"\n'
  + '    content="Menu"\n'
  + '    inverted\n'
  + '    styles={{\n'
  + '      gridColumn: "span 1",\n'
  + '    }}\n'
  + '  />\n'
  + '  <Segment\n'
  + '    content="Content"\n'
  + '    styles={{\n'
  + '      gridColumn: "span 3",\n'
  + '    }}\n'
  + '  />\n'
  + '  <Segment\n'
  + '    color="brand"\n'
  + '    content="Footer"\n'
  + '    inverted\n'
  + '    styles={{\n'
  + '      gridColumn: "span 4",\n'
  + '    }}\n'
  + '  />\n'
  + '</Grid>\n'
  
  const gridTwo = 
    '<Grid columns="repeat(2, 1fr)">\n'
  + '  <Segment\n'
  + '    color="brand"\n'
  + '    content="Header"\n'
  + '    inverted\n'
  + '    styles={{\n'
  + '      gridColumn: "1/3",\n'
  + '      gridRow: 1,\n'
  + '    }}\n'
  + '  />\n'
  + '  <Segment\n'
  + '    color="red"\n'
  + '    content="Menu"\n'
  + '    inverted\n'
  + '    styles={{\n'
  + '      gridColumn: "3",\n'
  + '      gridRow: "1/3",\n'
  + '    }}\n'
  + '  />\n'
  + '  <Segment\n'
  + '    color="green"\n'
  + '    content="Notes"\n'
  + '    inverted\n'
  + '    styles={{\n'
  + '      gridColumn: "1",\n'
  + '      gridRow: "2",\n'
  + '    }}\n'
  + '  />\n'
  + '  <Segment\n'
  + '    color="grey"\n'
  + '    content="News"\n'
  + '    inverted\n'
  + '    styles={{\n'
  + '      gridColumn: "2",\n'
  + '      gridRow: "2",\n'
  + '    }}\n'
  + '  />\n'
  + '</Grid>\n'

  return (
    <div>
      <Header as="h3" content="Layout" />

        <Header as="h4" content="Flex" />
        <Button icon={ <ClipboardCopiedToIcon /> } content="click to copy code" onClick={ () => {
        if (copy(flexGap)) {
          alert('success');
        } else {
          alert('error, please copy with your mouse');
        }
        }} />
        <Code>{flexGap}</Code>
        <Flex gap="gap.small">
          <Segment color="brand" content="Home" inverted />
          <Segment color="green" content="Search" inverted />
          <FlexItem push>
            <Segment color="red" content="Logout" inverted />
          </FlexItem>
        </Flex>

        <Button icon={ <ClipboardCopiedToIcon /> } content="click to copy code" onClick={ () => {
        if (copy(flexColumn)) {
          alert('success')
        } else {
          alert('error, please copy with your mouse');
        }
        }} />
        <Code>{flexColumn}</Code>
        <Flex column>
          <Segment color="brand" content="Header" inverted />
          <Segment content="Content" />
          <Segment color="green" content="Footer" inverted />
        </Flex>

      <div>
        <Header as="h4" content="Grid" />

        <Button icon={ <ClipboardCopiedToIcon /> } content="click to copy code" onClick={ () => {
        if (copy(gridFour)) {
          alert('success')
        } else {
          alert('error, please copy with your mouse');
        }
        }} />
        <Code>{gridFour}</Code>
        <Grid columns="repeat(4, 1fr)" rows="50px 150px 50px">
          <Segment
            color="brand"
            content="Header"
            inverted
            styles={{
              gridColumn: "span 4",
            }}
          />
          <Segment
            color="green"
            content="Menu"
            inverted
            styles={{
              gridColumn: "span 1",
            }}
          />
          <Segment
            content="Content"
            styles={{
              gridColumn: "span 3",
            }}
          />
          <Segment
            color="brand"
            content="Footer"
            inverted
            styles={{
              gridColumn: "span 4",
            }}
          />
        </Grid>

        <Button icon={ <ClipboardCopiedToIcon /> } content="click to copy code" onClick={ () => {
        if (copy(gridTwo)) {
          alert('success')
        } else {
          alert('error, please copy with your mouse');
        }
        }} />
        <Code>{gridTwo}</Code>
        <Grid columns="repeat(2, 1fr)">
          <Segment
            color="brand"
            content="Header"
            inverted
            styles={{
              gridColumn: "1/3",
              gridRow: 1,
            }}
          />
          <Segment
            color="red"
            content="Menu"
            inverted
            styles={{
              gridColumn: "3",
              gridRow: "1/3",
            }}
          />
          <Segment
            color="green"
            content="Notes"
            inverted
            styles={{
              gridColumn: "1",
              gridRow: "2",
            }}
          />
          <Segment
            color="grey"
            content="News"
            inverted
            styles={{
              gridColumn: "2",
              gridRow: "2",
            }}
          />
        </Grid>
      </div>
    </div>
  )
}

function TopJumper() {
  const [show, switchShow] = useState(false);

  useEffect(()=>{
    const listener = ()=>{
        switchShow(window.scrollY > 300)
    };
    document.addEventListener('scroll', listener);
    return ()=>document.removeEventListener('scroll', listener); // 组件销毁后，取消监听
  }, [show] /* 依赖记得给上，否则死循环 */)

  return show ? (
    <div className="top-jumper" onClick={()=>window.scrollTo(0, 0)}>
      <span className="text"> </span>
    </div>) : null;
}

class Overall extends React.Component {
  scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({behavior:'smooth', block:'start'});
      }
    }
  }

  render() {
    return (
      <div>
        <Header as="h3" content="Overall" />
        <ul id="OverallList">
          <li><Link onClick={ () => this.scrollToAnchor('Themes') }>Themes</Link></li>
          <li><Link onClick={ () => this.scrollToAnchor('NestingThemes') }>Nesting Themes</Link></li>
          <li><Link onClick={ () => this.scrollToAnchor('Layout') }>Layout</Link></li>
        </ul>
        <div id="Themes"><Theme /></div>
        <div id="NestingThemes"><NestingThemes /></div>
        <div id="Layout"><Layout /></div>
        <TopJumper />
      </div>
    )
  }
}

export default Overall;