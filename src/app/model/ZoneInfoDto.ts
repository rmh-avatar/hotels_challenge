import HotelInfoDto from "./HotelInfoDto";

export default interface ZoneInfoDto {
    zoneCode: string
    zoneName: string
    hotels: HotelInfoDto[]
}