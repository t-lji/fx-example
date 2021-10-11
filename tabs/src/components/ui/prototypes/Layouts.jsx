import React from "react";
import { 
  ArrowUpIcon, 
  ArrowDownIcon, 
  BookmarkIcon,
  Box,
  Button, 
  Checkbox,
  Flex,
  Form,
  FormInput, 
  FormButton,
  FormDropdown,
  Header, 
  MenuButton,
  MoreIcon,
  Segment,
  SplitButton,
  Table, 
  Text } from '@fluentui/react-northstar';
import { gridCellWithFocusableElementBehavior, gridNestedBehavior } from '@fluentui/accessibility';
import { Formik } from 'formik';
import AdvancedTableCode from '!!raw-loader!../../../assets/code/prototypes/layout/AdvancedTableCode.jsx'
import FormValidateFormikCode from '!!raw-loader!../../../assets/code/prototypes/layout/FormValidateFormikCode.jsx'
import Code from "../../util/CodeUtil"
import { Collapse, ComponentPrototype } from "../../util/PageUtil";
import { ScrollToAnchor } from "../../util/ScrollUtil";

function AdvancedTable(props) {
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
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Advanced Table" />

      <Collapse>
        <Code code={ AdvancedTableCode } />
      </Collapse>
      <Box styles={{ marginTop: '20px' }}>
        <Segment>
          <Header as="h3" content="Table example" />
          <Text>Table with menu, checkboxes and Aria anouncements</Text>
          <Table
            variables={{ cellContentOverflow: 'none' }}
            header={header}
            rows={sortedRows}
            aria-label={label}
            accessibility={gridNestedBehavior}
          />
        </Segment>
      </Box>
    </Box>
  );
};

function FormValidateFormik(props) {
  return (
    <Box id={ props.id } styles={{ marginBottom: '40px' }}>
      <Header as="h3" content="Form Validation" />

      <Collapse>
        <Code code={ FormValidateFormikCode } />
      </Collapse>
      <Box styles={{ marginTop: '20px' }}>
          <Segment>
            <Header as="h3" content="List with context menu" />
            <Text>Context menu can be opened by clicking on the more button or by right mouse button</Text>
          </Segment>
          <Segment>
            <Flex>
              <Formik
                initialValues={{
                  firstName: '',
                  city: '',
                }}
                validate={values => {
                  const errors: {
                    firstName?: string;
                    city?: string;
                  } = {};
                  if (!values.firstName) {
                    errors.firstName = 'Required';
                  }
                  if (values.firstName && values.firstName.length < 4) {
                    errors.firstName = 'Too small';
                  }
                  if (!values.city.length) {
                    errors.city = 'Required';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  // eslint-disable-next-line no-console
                  console.log(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }}
                render={({ handleSubmit, handleChange, errors, handleBlur, setTouched, touched, values, setFieldValue }) => (
                  <Form onSubmit={handleSubmit}>
                    <FormInput
                      errorMessage={touched.firstName && errors.firstName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      showSuccessIndicator={Boolean(values.firstName.length >= 4)}
                      label="First Name"
                      name="firstName"
                      id="first-name-inline"
                    />
                    <FormDropdown
                      onBlur={e => {
                        setTouched({ ...touched, city: true });
                      }}
                      onChange={(e, props) => {
                        setFieldValue('city', props.value);
                      }}
                      label="City"
                      id="city"
                      errorMessage={touched.city && errors.city}
                      items={['prague', 'new york']
                    }
                    />
                    <FormButton content="Submit" />
                  </Form>
                )}
              />
            </Flex>
          </Segment>
        </Box>
      </Box>
  )
}

export default function LayOut() {
  const menu = [
    {
      key: 'AdvancedTable',
      content: 'Advanced Table',
    },
    {
      key: 'FormValidateFormik',
      content: 'Form Validation',
    },
  ]
  return (
    <ComponentPrototype title="Layout">
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
      <AdvancedTable id="AdvancedTable" />
      <FormValidateFormik id="FormValidateFormik" />
    </ComponentPrototype>
  )
}