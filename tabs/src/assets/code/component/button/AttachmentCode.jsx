import { Attachment, MoreIcon, TableIcon } from '@fluentui/react-northstar'

export default function AttachmentItem(props) {
  const handleClick = message => e => {
    alert(`'${message}' was clicked`)
    e.stopPropagation()
  }

  return (
    <Attachment
      actionable
      icon={<TableIcon />}
      header="Document.docx"
      description="800 Kb"
      action={{
        icon: <MoreIcon />,
        onClick: handleClick('More Action'),
        title: 'More Action',
      }}
      progress={33}
      onClick={handleClick('Attachment')}
    />
  )
}