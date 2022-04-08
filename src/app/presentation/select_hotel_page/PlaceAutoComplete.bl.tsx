import PlaceInfo from "../../model/PlaceInfo";
import AreaInfoDto from "../../model/AreaInfoDto";

export function getPlaces(areas: AreaInfoDto[]): PlaceInfo[] {
    const places: PlaceInfo[] = []
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
    return places.sort((a, b) => a.title.localeCompare(b.title))
}