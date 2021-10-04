import React from "react";
import { 
  ArrowUpIcon, 
  ArrowDownIcon, 
  BookmarkIcon,
  Box,
  Button, 
  Checkbox,
  Header, 
  MenuButton,
  MoreIcon,
  Table, 
  Flex, 
  Text } from '@fluentui/react-northstar';
import { gridCellWithFocusableElementBehavior, gridNestedBehavior } from '@fluentui/accessibility';

export default function AdvancedTable() {
  const stringCellComparator = (cell1, cell2) => {
    if (cell1 && cell2 && typeof cell1 === 'string' && typeof cell2 === 'string') {
      return cell1.localeCompare(cell2);
    }
    return -1;
  };
  
  const menuButton = (
    <MenuButton
      trigger={<Button tabIndex={-1} icon={<MoreIcon />} circular text iconOnly title="More options" />}
      menu={[
        '1',
        '2',
        '3',
        {
          content: 'submenu',
          menu: {
            items: ['4', '5'],
          },
        },
      ]}
      on="click"
    />
  );

  const moreOptionButton = {
    content: menuButton,
    truncateContent: true,
    key: '1-6',
    accessibility: gridCellWithFocusableElementBehavior,
  };

  const rows = [
    {
      key: 1,
      items: [
        { content: 'General', key: '1' },
        {
          content: <Checkbox title="Show for me" />,
          accessibility: gridCellWithFocusableElementBehavior,
          key: '2',
        },
        {
          content: <Checkbox title="Show for members" />,
          accessibility: gridCellWithFocusableElementBehavior,
          key: '3',
        },
        { content: 'Some description', key: '5' },
        { content: <BookmarkIcon title="Random icon" />, key: '6' },
        { content: 'yesterday', key: '7' },
        moreOptionButton,
      ],
    },
  ];

  const columns = [
    { key: 'Name', name: 'Name', title: 'Name' },
    { key: 'show-for-me', name: 'show-for-me', title: 'Show for me' },
    { key: 'show-for-members', name: 'show-for-members', title: 'Show for members' },
    {
      key: 'Description',
      name: 'Description',
      title: 'Description',
      cellComparator: stringCellComparator,
    },
    { key: 'Type', name: 'Type', title: 'Type', cellComparator: stringCellComparator },
    { key: 'Last activity', name: 'Last activity', title: 'Last activity' },
    { key: 'more-options', name: 'more-options', title: 'More options' },
  ];

  const label = "Channels"

  const [sortColumn, setSortColumn] = React.useState('');
  const [sortDirection, setSortDirection] = React.useState(0);

  let sortedRows = rows;

  if (sortColumn && sortDirection) {
    const sortColumnIndex = columns.findIndex(column => column.name === sortColumn);
    const comparator = columns[sortColumnIndex].cellComparator;
    if (comparator) {
      sortedRows = rows.sort((r1: any, r2: any) => {
        const cell1 = r1.items[sortColumnIndex];
        const cell2 = r2.items[sortColumnIndex];
        return comparator(cell1.content, cell2.content) * sortDirection;
      });
    }
  }

  const sortColumnHeader = (title, order, onOrderChange) => ({
    content: (
      <Flex gap="gap.small">
        <Text content={title} />
        {order !== 0 ? order === 1 ? <ArrowUpIcon /> : <ArrowDownIcon /> : ''}
      </Flex>
    ),
    key: title,
    onClick: () => onOrderChange(order === 0 ? 1 : -order),
    'aria-sort': order !== 0 ? (order > 0 ? 'ascending' : 'descending') : undefined,
  });

  const header = {
    key: 'header',
    items: columns.map(c =>
      sortColumnHeader(c.title, c.name === sortColumn ? sortDirection : 0, newSortDirection => {
        setSortColumn(c.name);
        setSortDirection(newSortDirection);
        // Use react-aria-live or similar component to announce change the order
        document.getElementById('ariaLive').innerText = newSortDirection > 0 ? 'sorted ascending' : 'sorted descending';
      }),
    ),
  };

  return (
    <Box>
      <Header as="h4" content="Advanced Table" />

      <Header as="h3" content="Table example" />
      <p>Table with menu, checkboxes and Aria anouncements</p>
      <Table
      variables={{ cellContentOverflow: 'none' }}
      header={header}
      rows={sortedRows}
      aria-label={label}
      accessibility={gridNestedBehavior}
    />
    </Box>
  );
};