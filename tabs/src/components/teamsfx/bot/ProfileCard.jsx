import { Button, Flex, Image, Text } from '@fluentui/react-northstar';
import ProfileCardJson from '../../../assets/code/bot/adaptiveCard/profileCard/profileCardJson.json'
import ProfileCommandJson from '../../../assets/code/bot/adaptiveCard/profileCard/profileCommandJson.json'
import CommandUtilCode from '!!raw-loader!../../../assets/code/bot/adaptiveCard/profileCard/commandUtilCode.js'
import CardUtilCode from '!!raw-loader!../../../assets/code/bot/adaptiveCard/profileCard/cardUtilCode.js'
import SSODialogCode from '!!raw-loader!../../../assets/code/bot/adaptiveCard/profileCard/ssoDialogCode.js'
import ShowUserProfileCode from '!!raw-loader!../../../assets/code/bot/adaptiveCard/profileCard/showUserProfileCode.js'
import DateUtilCode from '!!raw-loader!../../../assets/code/bot/adaptiveCard/profileCard/dateUtilCode.js'
import TeamsBotCode from '!!raw-loader!../../../assets/code/bot/adaptiveCard/profileCard/teamsBotCode.js'
import LoadConfugurationCode from '!!raw-loader!../../../assets/code/bot/adaptiveCard/SDK/loadConfugurationCode.js'
import TeamsBotSsoPromptCode from '!!raw-loader!../../../assets/code/bot/adaptiveCard/SDK/TeamsBotSsoPromptCode.js'
import createMicrosoftGraphClientCode from '!!raw-loader!../../../assets/code/bot/adaptiveCard/SDK/createMicrosoftGraphClientCode.js'
import OnBehalfOfUserCredentialCode from '!!raw-loader!../../../assets/code/bot/adaptiveCard/SDK/onBehalfOfUserCredential.js'
import Code from "../../util/CodeUtil"
import { Collapse, ComponentPrototype } from "../../util/PageUtil";

export default function ProfileCard() {
  return (
    <ComponentPrototype 
      title="Profile Card"
      description="To add a personal profile adaptive card to your application"
    >
      <ComponentPrototype 
        title="Initialize Configuration API" 
        description="Initialize configuration from environment variables or 
        configuration object and set the global instance:"
      >
        <Collapse><Code code={ LoadConfugurationCode } /></Collapse>
      </ComponentPrototype>
      <ComponentPrototype 
        title="Constructor of TeamsBotSsoPrompt API" 
        description="Creates a new prompt that leverage Teams Single Sign On (SSO) 
        support for bot to automatically sign in user and help receive oauth token, 
        asks the user to consent if needed:"
      >
        <Collapse><Code code={ TeamsBotSsoPromptCode } /></Collapse>
      </ComponentPrototype>
      <ComponentPrototype 
        title="Microsoft Graph Client API" 
        description="Get Microsoft graph client:"
      >
        <Collapse><Code code={ createMicrosoftGraphClientCode } /></Collapse>
      </ComponentPrototype>
      <ComponentPrototype 
        title="Constructor of OnBehalfOfUserCredential API" 
        description="Represent on-behalf-of flow to get user identity, and it is 
        designed to be used in server side:"
      >
        <Collapse><Code code={ OnBehalfOfUserCredentialCode } /></Collapse>
      </ComponentPrototype>
      <Flex column>
        <Flex>
          <Text weight="regular" size="large" 
            content='1. Design your personal profile card in this site' 
          />
        </Flex>
        <Flex class="StepContent">
          <Button onClick={ event => { window.open("https://adaptivecards.io/designer/", "_blank"); } }>Design your card</Button><br />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='Or using an already completed personal profile card json:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ ProfileCardJson } language='json' /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='2. Modify the "appPackage/manifest.source.json" your project:' 
          />
          </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ ProfileCommandJson } language='json' /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='3. Add "commandUtil.js" for managing all adaptive card:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ CommandUtilCode } /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='4. Add "cardUtil.js" for generating an adaptive card with data:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ CardUtilCode } /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='5. In order to use SSO to request Microsoft Graph API, add 
            "ssoDialog.js":' 
          />
        </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ SSODialogCode } /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='6. Add "showUserProfile.js" for retrieving user information 
            from Microsoft Graph:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ ShowUserProfileCode } /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='7. [optional] If you want to use DATE infomation, add 
            "dateUtil.js":' 
          />
        </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ DateUtilCode } /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" content='8. Modify "teamsBot.js" as the entry point of your bot:' />
        </Flex>
        <Flex class="StepContent">
          <Collapse><Code code={ TeamsBotCode } /></Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='9. Save your code and Restart your application or Deploy 
            your application to Azure again.' 
          />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='10. You can select your command or type your command in 
            message window:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/me_command.png" />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='11. When you first add "me" command, the bot will request 
            your SSO:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/sso-auth.png" />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='12. After you choose "continue" and "Accept", Teams will 
            get your SSO token automatically:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/sso-login.png" />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='13. You will get a personal profile adaptive card by your bot:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/profile_card.png" />
        </Flex>
      </Flex>
    </ComponentPrototype>
  )
}