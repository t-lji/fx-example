import { Box, Button, Flex, Header, Image, Segment, Text } from '@fluentui/react-northstar';
import WelcomeCardJson from '../../../assets/code/bot/adaptiveCard/welcomeCard/welcomeCardJson.json'
import WelcomeCommandJson from '../../../assets/code/bot/adaptiveCard/welcomeCard/welcomeCommandJson.json'
import WelcomeMessageCode from '!!raw-loader!../../../assets/code/bot/adaptiveCard/welcomeCard/welcomeMessageCode.js'
import WelcomeMemberAddedCode from '!!raw-loader!../../../assets/code/bot/adaptiveCard/welcomeCard/welcomeMemberAddedCode.js'
import Code from "../../util/CodeUtil"
import { Collapse } from "../../util/PageUtil";

export default function WelcomeCard() {
  return (
    <Box id="welcomeCard page">
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
              <Code code={ WelcomeCardJson } language='json' />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='2. Modify the "appPackage/manifest.template.json" your project, you can use your own order:' />
            <Collapse>
              <Code code={ WelcomeCommandJson } language='json' />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='3. Modify the "this.onMessage()" function in "teamsBot.js", order text should match the "manifest.template.json":' />
            <Collapse>
              <Code code={ WelcomeMessageCode } />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='4. If you want to send the welcome card automatically, modify this code in "teamsBot.js":' />
            <Collapse>
              <Code code={ WelcomeMemberAddedCode } />
            </Collapse>
          </Segment>
          <Segment inverted>
            <Text content='5. Save your code and Restart your application or Deploy your application to Azure again.' />
          </Segment>
          <Segment inverted>
            <Text content='6. You can select your command or type your command in message window:' />
          </Segment>
          <Segment inverted>
            <Image src="pic/welcome_command.png" />
          </Segment>
          <Segment inverted>
            <Text content='7. You will get a welcome adaptive card by your bot:' />
          </Segment>
          <Segment inverted>
            <Image src="pic/welcome_card.png" />
          </Segment>
          <Segment inverted>
            <Text content='8. When you first add your bot in your project, you and your bot will trigger twice "onMembersAdded()" function:' />
          </Segment>
          <Segment inverted>
            <Image src="pic/first_add_member.png" />
          </Segment>
        </Flex>
    </Box>
  )
}