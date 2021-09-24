import React, { useState } from "react";
import { 
  AddIcon, 
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
import NestingThemesCode from '!!raw-loader!../code/layout/NestingThemesCode.jsx'
import FlexGapCode from '!!raw-loader!../code/layout/FlexGapCode.jsx'
import FlexColumnCode from '!!raw-loader!../code/layout/FlexColumnCode.jsx'
import GridFourCode from '!!raw-loader!../code/layout/GridFourCode.jsx'
import GridTwoCode from '!!raw-loader!../code/layout/GridTwoCode.jsx'
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
    <div className="Theme page">
      <Header as="h4" content="Themes" />

      <Menu defaultActiveIndex={0} items={items} underlined secondary />
      <div>
        <div>
          {selectedMenuItem === "Default" && (
            <div>
              <Image src="pic/default_theme.png" />
            </div>
          )}
          {selectedMenuItem === "Dark" && (
            <div>
              <Image src="pic/dark_theme.png" />
            </div>
          )}
          {selectedMenuItem === "High contrast" && (
            <div>
              <Image src="pic/high_contrast_theme.png" />
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
  return (
    <div>
      <Header as="h3" content="Nesting Themes" />

      <Collapse><Code code={ NestingThemesCode } /></Collapse>
      <NestingThemesNode />
    </div>
  )
}

function Layout() {
  return (
    <div>
      <Header as="h3" content="Layout" />
        
      <div>
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
      </div>

      <div>
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
      </div>
    </div>
  )
}

export default class Overall extends React.Component {
  render() {
    return (
      <div className="Overall page">
        <Header as="h2" content="Overall" />
        <ul id="OverallList">
          <li><Button onClick={ () => ScrollToAnchor('Themes') }>Themes</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('NestingThemes') }>Nesting Themes</Button></li>
          <li><Button onClick={ () => ScrollToAnchor('Layout') }>Layout</Button></li>
        </ul>
        <div id="Themes"><Theme /></div>
        <div id="NestingThemes"><NestingThemes /></div>
        <div id="Layout"><Layout /></div>
        <TopJumper />
      </div>
    )
  }
}
