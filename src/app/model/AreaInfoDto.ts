import ZoneInfoDto from "./ZoneInfoDto";

export default interface AreaInfoDto {
    areaCode: string
    areaName: string
    zones: ZoneInfoDto[]
}