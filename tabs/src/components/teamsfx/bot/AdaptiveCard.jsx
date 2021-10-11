import { Box, SplitButton } from '@fluentui/react-northstar';
import ProfileCard from "./ProfileCard"
import WelcomeCard from "./WelcomeCard"
import { ComponentPrototype } from "../../util/PageUtil.jsx";
import { ScrollToAnchor } from "../../util/ScrollUtil";

export default function AdaptiveCard() {
  const menu = [
    {
      key: 'WelcomeCard',
      content: 'Welcome Card',
    },
    {
      key: 'ProfileCard',
      content: 'Profile Card',
    },
    
  ]
  return (
    <ComponentPrototype title="Adaptive Card">
      <SplitButton
        menu={ menu }
        button={{
          content: 'Go To',
          'aria-roledescription': 'splitbutton',
          'aria-describedby': 'instruction-message-primary-button',
        }}
        primary
        toggleButton={{
          'aria-label': 'more options',
        }}
        onMenuItemClick= { (e, { index }) => ScrollToAnchor(menu[index].key) }
      />
      <Box class="ContentBox">
        <Box id="WelcomeCard"><WelcomeCard /></Box>
        <Box id="ProfileCard"><ProfileCard /></Box>
      </Box>
    </ComponentPrototype>
  )
}