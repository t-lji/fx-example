import React, { useState } from "react";
import { 
  AddIcon, 
  Box,
  Button, 
  CloseIcon, 
  EmailIcon, 
  EmojiIcon, 
  Flex, 
  FlexItem, 
  Grid, 
  Header,
  Image,
  Label,
  Menu,
  Provider,
  Segment,
  SplitButton,
  Text, } from '@fluentui/react-northstar'
import "./Overall.css";
import NestingThemesCode from '!!raw-loader!../../assets/code/layout/NestingThemesCode.jsx'
import FlexGapCode from '!!raw-loader!../../assets/code/layout/FlexGapCode.jsx'
import FlexColumnCode from '!!raw-loader!../../assets/code/layout/FlexColumnCode.jsx'
import GridFourCode from '!!raw-loader!../../assets/code/layout/GridFourCode.jsx'
import GridTwoCode from '!!raw-loader!../../assets/code/layout/GridTwoCode.jsx'
import Code from "../util/CodeUtil"
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";
import { Collapse, ComponentPrototype } from "../util/PageUtil";

// show teams theme picture
function Themes() {
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
    <Box className="Theme page" styles={{ marginBottom: '40px' }}>
      <Menu defaultActiveIndex={0} items={items} underlined secondary />
      <Box>
        <Box>
          {selectedMenuItem === "Default" && (
            <Box>
              <Image src="pic/default_theme.png" />
            </Box>
          )}
          {selectedMenuItem === "Dark" && (
            <Box>
              <Image src="pic/dark_theme.png" />
            </Box>
          )}
          {selectedMenuItem === "High contrast" && (
            <Box>
              <Image src="pic/high_contrast_theme.png" />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}

function NestingThemes() {
  return (
    <Box styles={{ marginBottom: '40px' }}>
      <Collapse><Code code={ NestingThemesCode } /></Collapse>

      <Header as="h3" content="Nesting Themes" />

      {/* Default theming */}
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
        <Box>
          <Header as="h3" content="First nested theming" />

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
            <Box>
              <Header as="h3" content="Second nested theming" />

              <Button content="Button" />
              <Button icon={<AddIcon />} iconOnly primary />
              <Button icon={<EmailIcon />} content="Send email" secondary />
              <EmojiIcon size="larger" />
              <Label content="Label with icon" icon={<CloseIcon />} />
            </Box>
          </Provider>
        </Box>
      </Provider>
    </Box>
  )
}

function Layout() {
  return (
    <Box>
      <Box styles={{ marginBottom: '40px' }}>
        <Header as="h3" content="Flex" />

        <Text>
          <code>Flex</code> is for either columns or rows. This means that if you are 
          laying out items in one direction (for example buttons inside a header),
          then you should use Flex.
        </Text>

        <Collapse><Code code={ FlexGapCode } /></Collapse>
          <Flex gap="gap.small">
            <Segment color="brand" content="ABCDEF" inverted />
            <Segment color="grey" content="GHIJKL" inverted />
            <FlexItem push>
              <Segment color="red" content="MNOPQR" inverted />
            </FlexItem>
          </Flex>

          <Collapse><Code code={ FlexColumnCode } /></Collapse>
          <Flex column>
            <Segment color="brand" content="ABCDEF" inverted />
            <Segment content="GHIJKL" />
            <Segment color="green" content="MNOPQR" inverted />
          </Flex>
      </Box>

      <Box styles={{ marginBottom: '40px' }}>
        <Header as="h3" content="Grid" />

        <Text>
        <code>Grid</code> is for lining things up in columns and rows, it implements Grid 
          layout module.
        </Text>

        <Collapse><Code code={ GridFourCode } /></Collapse>
        <Grid columns="repeat(4, 1fr)" rows="50px 150px 50px">
          <Segment
            color="brand"
            content="ABCDEF"
            inverted
            styles={{
              gridColumn: "span 4",
            }}
          />
          <Segment
            color="green"
            content="GHIJKL"
            inverted
            styles={{
              gridColumn: "span 1",
            }}
          />
          <Segment
            content="MNOPQR"
            styles={{
              gridColumn: "span 3",
            }}
          />
          <Segment
            color="brand"
            content="STUVWX"
            inverted
            styles={{
              gridColumn: "span 4",
            }}
          />
        </Grid>

        <Collapse><Code code={ GridTwoCode } /></Collapse>
        <Grid columns="repeat(2, 1fr)">
          <Segment
            color="brand"
            content="ABCDEF"
            inverted
            styles={{
              gridColumn: "1/3",
              gridRow: 1,
            }}
          />
          <Segment
            color="red"
            content="GHIJKL"
            inverted
            styles={{
              gridColumn: "3",
              gridRow: "1/3",
            }}
          />
          <Segment
            color="green"
            content="MNOPQR"
            inverted
            styles={{
              gridColumn: "1",
              gridRow: "2",
            }}
          />
          <Segment
            color="grey"
            content="STUVWX"
            inverted
            styles={{
              gridColumn: "2",
              gridRow: "2",
            }}
          />
        </Grid>
      </Box>
    </Box>
  )
}

export default class Overall extends React.Component {
  render() {
    const menu = [
      {
        key: 'Themes',
        content: 'Themes',
      },
      {
        key: 'NestingThemes',
        content: 'Nesting Themes',
      },
      {
        key: 'Layout',
        content: 'Layout',
      },
    ]
    return (
      <Box className="Overall page">
        <Flex gap="gap.small">
          <Box class="HeaderBox">
            <Box class="HeaderContent">
            <SplitButton
              menu={ menu }
              button={{
                content: 'Overall',
                'aria-roledescription': 'splitbutton',
                'aria-describedby': 'instruction-message-primary-button',
              }}
              primary
              size="largest"
              toggleButton={{
                'aria-label': 'more options',
              }}
              onMenuItemClick= { (e, { index }) => ScrollToAnchor(menu[index].key) }
            />
            </Box>
          </Box>
          <Box class="ContentBox">
            <ComponentPrototype id="Themes" title="Themes" description="Show teams theme pictures">
              <Themes />
            </ComponentPrototype>
            <ComponentPrototype id="NestingThemes" title="Nesting Themes" 
              description="If you have areas of an application that require additional 
              theming, you can achieve that using nested providers and overwrite the 
              needed styles."
            >
              <NestingThemes />
            </ComponentPrototype>
            <ComponentPrototype id="Layout" title="Layout" 
              description="Fluent UI has Flex and Grid components to handle layout 
              aspects, they represent corresponding CSS layout modules ."
            >
              <Layout />
            </ComponentPrototype>
            <TopJumper />
          </Box>
        </Flex>
      </Box>
    )
  }
}
