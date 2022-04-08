import {Button, Card, CardContent, TextField, Typography} from "@mui/material";
import './SelectHotelPage.css';
import useAxios from "../../hooks/useAxios";
import ApiResponseDto from "../../model/ApiResponseDto";
import PlaceAutoComplete from "./PlaceAutoComplete";
import DatePicker from "@mui/lab/DatePicker";
import {useEffect, useState} from "react";
import {addDays} from "date-fns";
import PlaceInfo from "../../model/PlaceInfo";

function SelectHotelPage() {
    const [{data, loading, error}] = useAxios<ApiResponseDto>('hotels')
    const [checkIn, setCheckIn] = useState<Date | null>(null)
    const [checkOut, setCheckOut] = useState<Date | null>(null)
    const [place, setPlace] = useState<PlaceInfo | null>(null);
    const today = new Date()

    useEffect(() => {
        checkIn ? setCheckOut(addDays(checkIn, 1)) : setCheckOut(checkIn)
    }, [checkIn]);

    useEffect(() => {
        if (!place) {
            setCheckIn(null)
        }
    }, [place]);

    function handleChangePlaceInfoValue(placeInfo: PlaceInfo | null) {
        setPlace(placeInfo)
    }

    return <div className="container">
        <Card className="card" variant="outlined">
            <CardContent>
                <div className="card-content-container">
                    <Typography className="card-header" variant="h5">Hoteles</Typography>
                    <div className="form-group">
                        <label>Buscar</label>
                        <PlaceAutoComplete value={place}
                                           handleChangeValue={handleChangePlaceInfoValue}
                                           loading={loading} areasInfo={data?.areasInfo}
                                           errorMessage={error?.message}/>
                    </div>
                    <div className="form-group">
                        <label>Check In</label>
                        <DatePicker
                            value={checkIn}
                            onChange={(newValue) => {
                                setCheckIn(newValue)
                            }}
                            disabled={!place}
                            minDate={today}
                            maxDate={addDays(today, 100)}
                            renderInput={(params) => <TextField {...params} fullWidth/>}
                        />
                    </div>
                    <div className="form-group">
                        <label>Check Out</label>
                        <DatePicker
                            value={checkOut}
                            onChange={(newValue) => {
                                setCheckOut(newValue)
                            }}
                            disabled={!checkIn}
                            minDate={checkIn && addDays(checkIn, 1)}
                            maxDate={checkIn && addDays(checkIn, 30)}
                            renderInput={(params) => <TextField {...params} fullWidth/>}
                        />
                    </div>
                    <div className="button-container">
                        <Button fullWidth className="button" type="submit"
                                variant="contained">Buscar</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
}

export default SelectHotelPage