import React from 'react';

import esLocale from 'date-fns/locale/es';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import SelectHotelPage from './select_hotel_page/SelectHotelPage';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={esLocale}>
      <SelectHotelPage />
    </LocalizationProvider>
  );
}

export default App;
