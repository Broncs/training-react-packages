import { getByDisplayValue } from '@testing-library/dom';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerPackage = () => {
  const [startDate, setStartDate] = useState(new Date('2014/02/08'));
  const [endDate, setEndDate] = useState(new Date('2014/02/15'));
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}

        // selected={startDate}
        // onChange={(date) => setStartDate(date)}
        // selectsStart
        // startDate={startDate}
        // endDate={endDate}
        // dateFormat="MM/yyyy"
        // showMonthYearPicker

        // selected={startDate}
        // onChange={(date) => setStartDate(date)}
        // dateFormat="dd/MM/yyyy"
        // filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
        // isClearable
        // showYearDropdown
        // scrollableMonthYearDropdown
      />
    </div>
  );
};

export default DatePickerPackage;
