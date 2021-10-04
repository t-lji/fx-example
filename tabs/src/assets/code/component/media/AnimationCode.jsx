import { Animation, MentionIcon, Provider } from '@fluentui/react-northstar'

export default function AnimationItem() {
  const spinner = {
    keyframe: {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    duration: '5s',
    iterationCount: 'infinite',
  }
  return (
    <Provider
      theme={{
        animations: {
          spinner,
        },
      }}
    >
      <Animation name="spinner" direction="alternate-reverse">
        <MentionIcon circular bordered />
      </Animation>
    </Provider>
  )
}