import { Box, Header } from '@fluentui/react-northstar';
import ProfileCard from "./ProfileCard"
import WelcomeCard from "./WelcomeCard"

export default function AdaptiveCard() {
  return (
    <Box>
      <Header as="h3" content="Adaptive Card" />

      <WelcomeCard />
      <ProfileCard />
    </Box>
  )
}