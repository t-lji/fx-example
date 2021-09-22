import { Button, Flex, Header, Image, Segment, Text } from '@fluentui/react-northstar';
import ProfileCardJson from '!!raw-loader!../../code/bot/adaptiveCard/profileCard/profileCardJson.txt'
import ProfileCommandJson from '!!raw-loader!../../code/bot/adaptiveCard/profileCard/profileCommandJson.txt'
import CommandUtilCode from '!!raw-loader!../../code/bot/adaptiveCard/profileCard/commandUtilCode.txt'
import CardUtilCode from '!!raw-loader!../../code/bot/adaptiveCard/profileCard/cardUtilCode.txt'
import SSODialogCode from '!!raw-loader!../../code/bot/adaptiveCard/profileCard/ssoDialogCode.txt'
import ShowUserProfileCode from '!!raw-loader!../../code/bot/adaptiveCard/profileCard/showUserProfileCode.txt'
import DateUtilCode from '!!raw-loader!../../code/bot/adaptiveCard/profileCard/dateUtilCode.txt'
import TeamsBotCode from '!!raw-loader!../../code/bot/adaptiveCard/profileCard/teamsBotCode.txt'
import LoadConfugurationCode from '!!raw-loader!../../code/bot/adaptiveCard/SDK/loadConfugurationCode.txt'
import TeamsBotSsoPromptCode from '!!raw-loader!../../code/bot/adaptiveCard/SDK/TeamsBotSsoPromptCode.txt'
import createMicrosoftGraphClientCode from '!!raw-loader!../../code/bot/adaptiveCard/SDK/createMicrosoftGraphClientCode.txt'
import OnBehalfOfUserCredentialCode from '!!raw-loader!../../code/bot/adaptiveCard/SDK/onBehalfOfUserCredential.txt'
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";

export default function ProfileCard() {
  return (
    <div id="ProfileCard page">
      <Header as="h4" content="Profile Card" />

        <Flex column>
          <Header as="h4" content="Initialize Configuration API" />
          <Text content='Initialize configuration from environment variables or configuration object and set the global instance:' />
          <Collapse>
            <Code code={ LoadConfugurationCode } />
          </Collapse>

          <Header as="h4" content="Constructor of TeamsBotSsoPrompt API" />
          <Text content='Creates a new prompt that leverage Teams Single Sign On (SSO) support for bot to automatically sign in user and help receive oauth token, asks the user to consent if needed:' />
          <Collapse>
            <Code code={ TeamsBotSsoPromptCode } />
          </Collapse>

          <Header as="h4" content="Microsoft Graph Client API" />
          <Text content='Get Microsoft graph client:' />
          <Collapse>
            <Code code={ createMicrosoftGraphClientCode } />
          </Collapse>

          <Header as="h4" content="Constructor of OnBehalfOfUserCredential API" />
          <Text content='Represent on-behalf-of flow to get user identity, and it is designed to be used in server side:' />
          <Collapse>
            <Code code={ OnBehalfOfUserCredentialCode } />
          </Collapse>
          
          <Segment inverted>
            <Text weight="regular" size="large" content='To add a personal profile adaptive card to your application' />
          </Segment>
          <Segment inverted>
            <Text content='1. Design your personal profile card in this site' /><br />
            <Button onClick={ event => { window.open("https://adaptivecards.io/designer/", "_blank"); } }>Design your card</Button><br />
            <Text content='Or using an already completed personal profile card json:' />
            <Collapse>
              <Code code={ ProfileCardJson } />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='2. Modify the "appPackage/manifest.source.json" your project:' />
            <Collapse>
              <Code code={ ProfileCommandJson } />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='3. Add "commandUtil.js" for managing all adaptive card:' />
            <Collapse>
              <Code code={ CommandUtilCode } />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='4. Add "cardUtil.js" for generating an adaptive card with data:' />
            <Collapse>
              <Code code={ CardUtilCode } />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='5. In order to use SSO to request Microsoft Graph API, add "ssoDialog.js":' />
            <Collapse>
              <Code code={ SSODialogCode } />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='6. Add "showUserProfile.js" for retrieving user information from Microsoft Graph:' />
            <Collapse>
              <Code code={ ShowUserProfileCode } />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='7. [optional] If you want to use DATE infomation, add "dateUtil.js":' />
            <Collapse>
              <Code code={ DateUtilCode } />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='8. Modify "teamsBot.js" as the entry point of your bot:' />
            <Collapse>
              <Code code={ TeamsBotCode } />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='9. Save your code and Restart your application or Deploy your application to Azure again.' />
          </Segment>
          <Segment inverted>
            <Text content='10. You can select your command or type your command in message window:' />
          </Segment>
          <Segment inverted>
            <Image src="me_command.png" />
          </Segment>
          <Segment inverted>
            <Text content='11. When you first add "me" command, the bot will request your SSO:' />
          </Segment>
          <Segment inverted>
            <Image src="sso-auth.png" />
          </Segment>
          <Segment inverted>
            <Text content='12. After you choose "continue" and "Accept", Teams will get your SSO token automatically:' />
          </Segment>
          <Segment inverted>
            <Image src="sso-login.png" />
          </Segment>
          <Segment inverted>
            <Text content='13. You will get a personal profile adaptive card by your bot:' />
          </Segment>
          <Segment inverted>
            <Image src="profile_card.png" />
          </Segment>
        </Flex>
    </div>
  )
}