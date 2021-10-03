import { Box, Input, SearchIcon } from '@fluentui/react-northstar'

<Box>
  Some text inline with the{' '}
  <Input 
    inline 
    icon={<SearchIcon />} 
    clearable 
    placeholder="input name" 
    input={{
      styles: {
        background: 'yellow',
      },
    }}
    wrapper={{
      // will override component's 'tabIndex' attribute
      tabIndex: 0,
      // will set custom styles for wrapper element
      styles: {
        padding: '1px',
        backgroundColor: 'red',
      },
    }} /> and more text.
</Box>