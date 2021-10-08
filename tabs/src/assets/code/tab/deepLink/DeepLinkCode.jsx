import * as microsoftTeams from '@microsoft/teams-js';
import { Box, Button, Text } from '@fluentui/react-northstar';

function CreateNewMeeting() {
  const url = 'https://teams.microsoft.com/l/meeting/new?subject=New%20meeting%20&content=DeepLink%3A%20New%20meeting';
  microsoftTeams.executeDeepLink(url);
}

function MoveToTab() {
  const appId = process.env.REACT_APP_APP_ID;
  var encodedWebUrl = encodeURI(process.env.REACT_APP_WEB_SITE + '/#/ui');
  var encodedContext = encodeURI('{ "subEntityId": "ui" "subEntityLabel": "ui", subEntityWebUrl: ' + encodedWebUrl + '}');
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