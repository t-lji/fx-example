import * as microsoftTeams from '@microsoft/teams-js';
import { Button, Flex, Image, Text } from '@fluentui/react-northstar';
import DeepLinkCode from '!!raw-loader!../../../assets/code/tab/deepLink/DeepLinkCode.jsx'
import DeepLinkDefinition from '!!raw-loader!../../../assets/code/tab/deepLink/DefinitionCode.txt'
import EnvCode from '!!raw-loader!../../../assets/code/tab/deepLink/envCode.txt'
import LocalEnvCode from '!!raw-loader!../../../assets/code/tab/deepLink/localEnvCode.txt'
import Code from "../../util/CodeUtil"
import { Collapse, ComponentPrototype } from "../../util/PageUtil";

function CreateNewMeeting() {
  const url = 'https://teams.microsoft.com/l/meeting/new?subject=New%20meeting%20&content=DeepLink%3A%20New%20meeting';
  microsoftTeams.executeDeepLink(url);
}

function MoveToTab() {
  const appId = process.env.REACT_APP_APP_ID;
  var encodedWebUrl = encodeURI(process.env.REACT_APP_WEBSITE + '/#/ui');
  var encodedContext = encodeURI('{ "subEntityId": "ui" "subEntityLabel": "ui", subEntityWebUrl: ' + encodedWebUrl + '}');
  var url = 'https://teams.microsoft.com/l/entity/' + appId + '/ui?webUrl=' + encodedWebUrl + '&context=' + encodedContext;
  microsoftTeams.executeDeepLink(url);
}

export default function DeepLink() {
  return (
    <ComponentPrototype 
      title="DeepLink"
      description="You can create links to information and features within Teams.
      When Navigating the user to the content within one of your app's tabs, or Your 
      app automates or simplifies certain user tasks, such as creating a chat or 
      scheduling a meeting, by pre populating the deep links with required parameters. 
      This avoids the need for users to manually enter information."
    >
      <ComponentPrototype 
        title="Execute deep link API" 
        description="You can deeplink to content in Teams from your tab. This is 
        useful if your tab needs to link to other content in Teams, such as to a 
        channel, message, another tab or even to open a scheduling dialog. To 
        trigger a deeplink from your tab you should call:"
      >
        <Code code={ DeepLinkDefinition } />
      </ComponentPrototype>
      <Flex column>
        <Flex class="StepContent">
          <Collapse><Code code={ DeepLinkCode } /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content="1. Click on the button to view a new meeting from deeplink:" 
          />
        </Flex>
        <Flex class="StepContent"><Button onClick={ CreateNewMeeting } >Create New Meeting</Button></Flex>
      </Flex>
      <Flex column>
        <Flex>
          <Text weight="regular" size="large"> 
            2. You can find your App id and website in Teams App Studio:
          </Text>
        </Flex>
        <Flex class="StepContent"><Image src="pic/App_studio_location.png" /></Flex>
        <Flex class="StepContent"><Image src="pic/Edit_your_app.png" /></Flex>
        <Flex class="StepContent"><Image src="pic/App_id.png" /></Flex>
        <Flex class="StepContent"><Image fluid src="pic/App_website.png" /></Flex>
      </Flex>
      <Flex column>
        <Flex>
          <Text weight="regular" size="large"> 
            3. Append code below to the <code>.fx/local.env</code> and <code>tabs/.env</code>
            in your project:
          </Text>
        </Flex>
        <Flex class="StepContent"><Text><code>tabs/.env</code></Text></Flex>
        <Flex class="StepContent"><Code code={ EnvCode } /></Flex>
        <Flex class="StepContent"><Text><code>.fx/local.env</code></Text></Flex>
        <Flex class="StepContent"><Code code={ LocalEnvCode } /></Flex>
      </Flex>
      <Flex column>
        <Flex>
          <Text weight="regular" size="large" 
            content="3. Click on the button to the UI tab from deeplink:" 
          />
        </Flex>
        <Flex class="StepContent"><Button onClick={ MoveToTab }>Move to UI</Button></Flex>
      </Flex>
    </ComponentPrototype>
  )
}
