import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs'; // Kasuta TypeScripti jaoks

interface BasicDatePickerProps {
  onChange: (date: Dayjs | null) => void; // onChange prop, mis annab valitud kuupäeva tagasi
}

export default function BasicDatePicker({ onChange }: BasicDatePickerProps) {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);

 

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = date.format('YYYY-MM-DD'); // Vorminda kuupäev
      onChange(formattedDate); // Saada vormindatud kuupäev tagasi
    } else {
      onChange(null); // Kui kuupäeva pole valitud, saada null
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label="Choose Date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}