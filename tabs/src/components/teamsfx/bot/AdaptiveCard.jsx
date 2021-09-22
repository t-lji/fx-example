import { Header } from '@fluentui/react-northstar';
import ProfileCard from "./ProfileCard"
import WelcomeCard from "./WelcomeCard"

export default function AdaptiveCard() {
  return (
    <div>
      <Header as="h3" content="Adaptive Card" />

      <WelcomeCard />
      <ProfileCard />
    </div>
  )
}