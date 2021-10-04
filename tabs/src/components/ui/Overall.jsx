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
  Segment  } from '@fluentui/react-northstar'
import "./Overall.css";
import NestingThemesCode from '!!raw-loader!../../assets/code/layout/NestingThemesCode.jsx'
import FlexGapCode from '!!raw-loader!../../assets/code/layout/FlexGapCode.jsx'
import FlexColumnCode from '!!raw-loader!../../assets/code/layout/FlexColumnCode.jsx'
import GridFourCode from '!!raw-loader!../../assets/code/layout/GridFourCode.jsx'
import GridTwoCode from '!!raw-loader!../../assets/code/layout/GridTwoCode.jsx'
import Code from "../util/CodeUtil"
import { TopJumper, ScrollToAnchor } from "../util/ScrollUtil";
import { Collapse } from "../util/PageUtil";

// show teams theme picture
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
    <Box className="Theme page">
      <Header as="h4" content="Themes" />

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

function NestingThemesNode() {
  return (
    <Box>
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
        <Box>
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
            <Box>
              <Header as="h4" content="Second nested theming" />

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

function NestingThemes() {
  return (
    <Box>
      <Header as="h3" content="Nesting Themes" />

      <Collapse><Code code={ NestingThemesCode } /></Collapse>
      <NestingThemesNode />
    </Box>
  )
}

function Layout() {
  return (
    <Box>
      <Header as="h3" content="Layout" />
        
      <Box>
        <Header as="h4" content="Flex" />

        <Collapse><Code code={ FlexGapCode } /></Collapse>
          <Flex gap="gap.small">
            <Segment color="brand" content="ABCDEF" inverted />
            <Segment color="green" content="GHIJKL" inverted />
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

      <Box>
        <Header as="h4" content="Grid" />

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
    return (
      <Box className="Overall page">
        <Header as="h2" content="Overall" />
        <ul id="OverallList">
          <li><Button onClick={ () => ScrollToAnchor('Themes') }>Themes</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('NestingThemes') }>Nesting Themes</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Layout') }>Layout</Button></li>
        </ul>
        <Box id="Themes"><Theme /></Box>
        <Box id="NestingThemes"><NestingThemes /></Box>
        <Box id="Layout"><Layout /></Box>
        <TopJumper />
      </Box>
    )
  }
}
