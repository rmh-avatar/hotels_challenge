import AreaInfoDto from "../model/AreaInfoDto";
import {Autocomplete, TextField} from "@mui/material";
import PlaceInfo from "../model/PlaceInfo";

interface PlaceAutoCompleteProps {
    loading: boolean
    areasInfo: AreaInfoDto[] | undefined
    errorMessage?: string
}

export default function PlaceAutoComplete(props: PlaceAutoCompleteProps) {
    const places: PlaceInfo[] = []
    const areas = props.areasInfo ?? []

    for (let i = 0; i < areas.length; i++) {
        const areaName = areas[i].areaName;
        places.push({
            title: areaName, type: "Destino"
        })
        for (let j = 0; j < areas[i].zones.length; j++) {
            const zoneName = areas[i].zones[j].zoneName
            places.push({
                title: areaName === zoneName ? zoneName : `${zoneName}, ${areaName}`,
                type: "Destino"
            })
            for (let k = 0; k < areas[i].zones[j].hotels.length; k++) {
                const hotelName = areas[i].zones[j].hotels[k].hotelName
                places.push({
                    title: areaName === zoneName ? `${hotelName}, ${zoneName}` : `${hotelName}, ${zoneName}, ${areaName}`,
                    type: "Hoteles"
                })
            }
        }
    }
    places.sort((a, b) => a.title.localeCompare(b.title))

    return (<Autocomplete
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