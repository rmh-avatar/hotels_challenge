import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDateFns';
import React from 'react';

import './App.css';
import SelectHotelPage from "./presentation/SelectHotelPage";

function App() {
    return (
        <LocalizationProvider dateAdapter={DateAdapter}><SelectHotelPage/></LocalizationProvider>);
}

export default App;
