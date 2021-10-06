import * as microsoftTeams from '@microsoft/teams-js';
import { Box, Button, Text } from '@fluentui/react-northstar';

function CreateNewMeeting() {
  const url = 'https://teams.microsoft.com/l/meeting/new?subject=New%20meeting%20&content=DeepLink%3A%20New%20meeting';
  microsoftTeams.executeDeepLink(url);
}

function MoveToTab() {
  const appId = 'd68b7709-73bf-4add-a370-e89c78d7224e';
  var encodedWebUrl = encodeURI('https://localhost:3000/#/ui');
  var encodedContext = encodeURI('{ "subEntityId": "ui" "subEntityLabel": "ui", subEntityWebUrl: "https://localhost:3000/#/ui"}');
  var url = 'https://teams.microsoft.com/l/entity/' + appId + '/ui?webUrl=' + encodedWebUrl + '&context=' + encodedContext;
  microsoftTeams.executeDeepLink(url);
}

export default function DeepLink() {
  return (
    <Box>
      <Text weight="regular" size="large" content="1. Click on the button to view the a new meeting from deeplink:" />
      <Button onClick={ CreateNewMeeting }>Create New Meeting</Button>
      <Text weight="regular" size="large" content="2. Click on the button to UI tab from deeplink:" />
      <Button onClick={ MoveToTab }>Move to UI Tab</Button>
    </Box>
  )
}