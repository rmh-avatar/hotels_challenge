import AreaInfoDto from "../../model/AreaInfoDto";
import {Autocomplete, TextField} from "@mui/material";
import PlaceInfo from "../../model/PlaceInfo";
import {getPlaces} from "./PlaceAutoComplete.bl";

interface PlaceAutoCompleteProps {
    loading: boolean
    areasInfo: AreaInfoDto[] | undefined
    errorMessage?: string,
    value: PlaceInfo | null,
    handleChangeValue: (placeInfo: PlaceInfo | null) => void
}

export default function PlaceAutoComplete(props: PlaceAutoCompleteProps) {
    const areas = props.areasInfo ?? []
    const places = getPlaces(areas)

    return (<Autocomplete
        value={props.value}
        onChange={(event, newValue) => {
            props.handleChangeValue(newValue);
        }}
        options={places.sort((a, b) => a.type.localeCompare(b.type))}
        groupBy={(option) => option.type}
        getOptionLabel={(option) => option.title}
        fullWidth
        loading={props.loading}
        loadingText={"Cargando..."}
        noOptionsText={"Sin opciones"}
        renderInput={(params) => <TextField
            {...params}
            placeholder="Seleccione destino u hotel"
            error={!!props.errorMessage}
            helperText={props.errorMessage}
        />}
    />)
}