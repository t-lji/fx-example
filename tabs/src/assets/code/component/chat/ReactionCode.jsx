import { EmojiIcon, LikeIcon, Reaction } from '@fluentui/react-northstar'

<Reaction.Group
  items={[
    {
      icon: <LikeIcon />,
      content: '2K',
      key: 'up',
    },
    {
      icon: <EmojiIcon />,
      content: 10,
      key: 'smile',
    },
  ]}
/>