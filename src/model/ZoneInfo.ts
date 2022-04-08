import HotelInfo from "./HotelInfo";

export default interface ZoneInfo {
    zoneCode: string
    zoneName: string
    hotels: HotelInfo[]
}