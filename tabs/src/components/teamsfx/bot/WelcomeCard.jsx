import { Button, Flex, Image, Text } from '@fluentui/react-northstar';
import WelcomeCardJson from '../../../assets/code/bot/adaptiveCard/welcomeCard/welcomeCardJson.json'
import WelcomeCommandJson from '../../../assets/code/bot/adaptiveCard/welcomeCard/welcomeCommandJson.json'
import WelcomeMessageCode from '!!raw-loader!../../../assets/code/bot/adaptiveCard/welcomeCard/welcomeMessageCode.js'
import WelcomeMemberAddedCode from '!!raw-loader!../../../assets/code/bot/adaptiveCard/welcomeCard/welcomeMemberAddedCode.js'
import Code from "../../util/CodeUtil"
import { Collapse, ComponentPrototype } from "../../util/PageUtil";

export default function WelcomeCard() {
  return (
    <ComponentPrototype 
      title="Welcome Card"
      description="To add a welcome adaptive card to your application"
    >
      <Flex column>
        <Flex>
          <Text weight="regular" size="large" 
            content='1. Design your welcome card on this site' 
          />
        </Flex>
        <Flex class="StepContent">
          <Button 
            onClick={ event => { window.open("https://adaptivecards.io/designer/", "_blank"); } }
          >
            Design your card
          </Button>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='Or use an already completed json:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Collapse>
            <Code code={ WelcomeCardJson } language='json' />
          </Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large"> 
            2. Modify the <code>appPackage/manifest.source.json</code> in your project, 
            you can use your own order:
          </Text>
        </Flex>
        <Flex class="StepContent">
          <Collapse>
            <Code code={ WelcomeCommandJson } language='json' />
          </Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large"> 
            3. Modify the <code>this.onMessage()</code> function in <code>teamsBot.js</code>, 
            order text should match the <code>manifest.source.json</code>
          </Text>
        </Flex>
        <Flex class="StepContent">
          <Collapse>
            <Code code={ WelcomeMessageCode } />
          </Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large"> 
            4. If you want to send the welcome card automatically, 
            modify this code in <code>teamsBot.js</code>:
          </Text>
        </Flex>
        <Flex class="StepContent">
          <Collapse>
            <Code code={ WelcomeMemberAddedCode } />
          </Collapse>
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='5. Save your code and Restart your application or Deploy 
            your application to Azure again.' 
          />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='6. You can select your command or type your command in 
            message window:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/welcome_command.png" />
        </Flex>
        <Flex>
          <Text weight="regular" size="large" 
            content='7. You will get a welcome adaptive card by your bot:' 
          />
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/welcome_card.png" />
        </Flex>
        <Flex>
          <Text weight="regular" size="large"> 
            8. When you first add your bot in your project, you and your 
            bot will trigger twice <code>onMembersAdded()</code> function:
          </Text>
        </Flex>
        <Flex class="StepContent">
          <Image src="pic/first_add_member.png" />
        </Flex>
      </Flex>
    </ComponentPrototype>
  )
}