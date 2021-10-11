import { Dropdown } from '@fluentui/react-northstar'

export default function DropdownItem(props) {
  const inputItems = [
    'Robert Tolbert',
    'Wanda Howard',
    'Tim Deboer',
    'Amanda Brady',
    'Ashley McCarthy',
    'Cameron Evans',
    'Carlos Slattery',
    'Carole Poland',
    'Robin Counts',
  ]
  return (
    <Dropdown
      search
      multiple
      items={inputItems}
      placeholder="Start typing a name"
      getA11ySelectionMessage={{
        onAdd: item => `${item} selected. Press left or right arrow keys to navigate selected items.`,
        onRemove: item => `${item} has been removed.`,
      }}
      noResultsMessage="We couldn't find any matches."
      a11ySelectedItemsMessage="Press Delete or Backspace to remove"
    />
  )
}