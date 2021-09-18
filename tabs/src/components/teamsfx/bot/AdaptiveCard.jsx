import { Button, Flex, Header, Image, Segment, Text } from '@fluentui/react-northstar';
import WelcomeCardJson from '!!raw-loader!../../code/bot/adaptiveCard/welcomeCardJson.txt'
import WelcomeCommandJson from '!!raw-loader!../../code/bot/adaptiveCard/welcomeCommandJson.txt'
import welcomeMessageCode from '!!raw-loader!../../code/bot/adaptiveCard/welcomeMessageCode.txt'
import welcomeMemberAddedCode from '!!raw-loader!../../code/bot/adaptiveCard/welcomeMemberAddedCode.txt'
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";

function WelcomeCard() {
  return (
    <div id="welcomeCard page">
      <Header as="h4" content="Welcome Card" />
        <Flex column>
          <Segment inverted>
            <Text weight="regular" size="large" content='To add a welcome adaptive card to your application' />
          </Segment>
          <Segment inverted>
            <Text content='1. Design your welcome card in this site' /><br />
            <Button onClick={ event => { window.open("https://adaptivecards.io/designer/", "_blank"); } }>Design your card</Button><br />
            <Text content='Or using an already completed json:' />
            <Collapse>
              <Code code={ WelcomeCardJson } />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='2. Modify the "appPackage/manifest.source.json" your project, you can use your own order:' />
            <Collapse>
              <Code code={ WelcomeCommandJson } />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='3. Modify the "this.onMessage()" function in "teamsBot.js", order text should match the "manifest"' />
            <Collapse>
              <Code code={ welcomeMessageCode } />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='4. If you want to send the welcome card automatically, modify this code in "teamsBot.js":' />
            <Collapse>
              <Code code={ welcomeMemberAddedCode } />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='5. Save your code and Restart your application or Deploy your application to Azure again.' />
          </Segment>
          <Segment inverted>
            <Text content='6. You can select your command or type your command in message window' />
          </Segment>
          <Segment inverted>
            <Image src="welcome_command.png" />
          </Segment>
          <Segment inverted>
            <Text content='7. You will get a welcome adaptive card by your bot:' />
          </Segment>
          <Segment inverted>
            <Image src="welcome_card.png" />
          </Segment>
          <Segment inverted>
            <Text content='8. When you first add your bot in your project, you and your bot will trigger twice "onMembersAdded()" function:' />
            </Segment>
          <Segment inverted>
            <Image src="first_add_member.png" />
          </Segment>
        </Flex>
    </div>
  )
}

export default function AdaptiveCard() {
  return (
    <div>
      <Header as="h3" content="Adaptive Card" />

      <WelcomeCard />
    </div>
  )
}