import { Datepicker, DayOfWeek } from '@fluentui/react-northstar'

<Datepicker 
  firstDayOfWeek={DayOfWeek.Monday} 
  inputPlaceholder="Select your date here!"
  input={{
    clearable: true,
  }}
  today={new Date()}
/>