import React from "react";
import { Box, Button, Dialog, Header, Popup, Segment, Text } from '@fluentui/react-northstar';
import NestedDialogsCode from '!!raw-loader!../../../assets/code/prototypes/toolbars/NestedDialogsCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse, ComponentPrototype } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function NestedDialogs(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
    <Header as="h3" content="Nested Dialogs" />

    <Collapse>
      <Code code={ NestedDialogsCode } />
    </Collapse>
    <Box styles={{ marginTop: '20px' }}>
      <Segment>
        <Text>An example with nested dialogs</Text>
      </Segment>
      <Segment>
        <Dialog
          cancelButton="Close"
          header="An outer dialog"
          content={
            <>
              <Text>
                This <code>Dialog</code> contains another <code>Dialog</code> inside.
              </Text>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </blockquote>

              <Dialog
                cancelButton="Close"
                header="An inner dialog"
                content={
                  <>
                    <Text>
                      This <code>Dialog</code> is nested ヽ(^o^)ノ, if you will on an overlay only this <code>Dialog</code>{' '}
                      will be closed.
                    </Text>
                    
                    <Popup content="You can have also Popups inside dialogs!" trigger={<Button content="Open a popup" />} position="below" />
                  </>
                }
                trigger={<Button content="Open a dialog" />}
              />
            </>
          }
          trigger={<Button content="Open a dialog" />}
        />
      </Segment>
    </Box>
  </Box>
    
  );
}

export default class ToolBars extends React.Component {
  render() {
    return (
      <Box className="ToolBars page">
        <ul id="ToolBarsList">
          <li><Button onClick={ () => ScrollToAnchor('NestedDialogs') }>Nested Dialogs</Button></li>
        </ul>
        <ComponentPrototype title="ToolBars">
          <NestedDialogs id="NestedDialogs" />
        </ComponentPrototype>
      </Box>
    )
  }
}