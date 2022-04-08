import {Autocomplete, Button, Card, CardContent, TextField, Typography} from "@mui/material";
import './SelectHotelPage.css';
import useAxios from "../hooks/useAxios";
import ApiResponseDto from "../model/ApiResponseDto";
import PlaceAutoComplete from "./PlaceAutoComplete";

function SelectHotelPage() {
    const [{data, loading, error}] = useAxios<ApiResponseDto>('hotels')

    return <div className="container">
        <Card className="card" variant="outlined">
            <CardContent>
                <div className="card-content-container">
                    <Typography className="card-header" variant="h5">Hoteles</Typography>
                    <div className="form-group">
                        <label>Buscar</label>
                        <PlaceAutoComplete loading={loading} areasInfo={data?.areasInfo}
                                           errorMessage={error?.message}/>
                    </div>
                    <div className="form-group">
                        <label>Buscar</label>
                        <Autocomplete
                            options={[]}
                            fullWidth
                            noOptionsText={"Sin opciones"}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                    <div className="form-group">
                        <label>Buscar</label>
                        <Autocomplete
                            options={[]}
                            fullWidth
                            noOptionsText={"Sin opciones"}
                            renderInput={(params) => <TextField {...params} />}
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