import ZoneInfo from "./ZoneInfo";

export default interface AreaInfo {
    areaCode: string
    areaName: string
    zones: ZoneInfo[]
}