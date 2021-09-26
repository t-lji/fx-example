import * as microsoftTeams from '@microsoft/teams-js';
import { Button, Flex, Header, Segment, Text } from '@fluentui/react-northstar';
import DeepLinkCode from '!!raw-loader!../../../assets/code/tab/deepLink/DeepLinkCode.jsx'
import DeepLinkDefinition from '!!raw-loader!../../../assets/code/tab/deepLink/DefinitionCode.txt'
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";

function CreateNewMeeting() {
  microsoftTeams.initialize();
  const url = 'https://teams.microsoft.com/l/meeting/new?subject=New%20meeting%20&content=DeepLink%3A%20New%20meeting';
  microsoftTeams.executeDeepLink(url);
}

function MoveToTab() {
  microsoftTeams.initialize();
  const appId = 'd68b7709-73bf-4add-a370-e89c78d7224e';
  var encodedWebUrl = encodeURI('https://localhost:3000/#/ui');
  var encodedContext = encodeURI('{ "subEntityId": "ui" "subEntityLabel": "ui", subEntityWebUrl: "https://localhost:3000/#/ui"}');
  var url = 'https://teams.microsoft.com/l/entity/' + appId + '/ui?webUrl=' + encodedWebUrl + '&context=' + encodedContext;
  microsoftTeams.executeDeepLink(url);
}

export default function DeepLink() {
  return (
    <div>
      <Header as="h3" content="DeepLink" />

      <Header as="h4" content="Execute deep link API" />
      <Text content='You can deeplink to content in Teams from your tab. This is useful if your tab needs to link to other content in Teams, such as to a channel, message, another tab or even to open a scheduling dialog. To trigger a deeplink from your tab you should call:' />
      <Code code={ DeepLinkDefinition } />
      <Collapse>
        <Code code={ DeepLinkCode } />
      </Collapse>
      <Flex column>
        <Segment inverted>
          <Text weight="regular" size="large" content="1. Click on the button to view the a new meeting from deeplink:" />
        </Segment>
        <Segment inverted>
          <Button onClick={ CreateNewMeeting }>Create New Meeting</Button>
        </Segment>
      </Flex>
      <Flex column>
        <Segment inverted>
          <Text weight="regular" size="large" content="2. Click on the button to UI tab from deeplink:" />
        </Segment>
        <Segment inverted>
          <Button onClick={ MoveToTab }>Move to UI</Button>
        </Segment>
      </Flex>
    </div>
  )
}