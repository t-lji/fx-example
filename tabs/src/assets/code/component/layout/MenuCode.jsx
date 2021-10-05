import { BookmarkIcon, CalendarIcon, Menu, WordIcon } from '@fluentui/react-icons-northstar'

export default function MenuItem(props) {
  const items = [
    {
      icon: (
        <BookmarkIcon
          {...{
            outline: true,
          }}
        />
      ),
      key: 'editorials',
      content: 'Editorials',
    },
    {
      icon: <WordIcon {...{}} />,
      key: 'review',
      content: 'Reviews',
    },
    {
      key: 'events',
      content: 'Upcoming Events',
    },
    {
      icon: <CalendarIcon {...{}} />,
      key: 'moreevents',
      content: 'View full calendar with content so long that it wraps',
      menu: {
        items: [
          {
            key: '1',
            content: 'item1',
          },
          {
            key: '2',
            content: 'item2',
          },
          {
            key: '3',
            content: 'item3',
          },
        ],
      },
    },
  ]
  return <Menu defaultActiveIndex={0} items={items} vertical />
}