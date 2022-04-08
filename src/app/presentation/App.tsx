import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDateFns';
import esLocale from 'date-fns/locale/es';
import React from 'react';

import SelectHotelPage from "./select_hotel_page/SelectHotelPage";

function App() {
    return (<LocalizationProvider dateAdapter={DateAdapter}
                                  locale={esLocale}><SelectHotelPage/></LocalizationProvider>);
}

export default App;
