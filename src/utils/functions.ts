import got from "got";
import { apiDomains, channel, devices, platforms } from "../Defaults";

export function getRandomArray(array: string[]) {
    return array[Math.floor(Math.random() * array.length)];
}
export function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function getUrlWithRandons() {
    let platform = getRandomArray(platforms)
    let osVersion = randomNumber(1, 12)
    let deviceType = getRandomArray(devices)
    
    let appName = getRandomArray(["tiktok_web", "musically_go"])
    let Device_ID = randomNumber(1000000000000000000, 9999999999999999999)
    let apiDomain = getRandomArray(apiDomains)
    let channelLol = getRandomArray(channel)
    let url = `https://${apiDomain}/aweme/v1/aweme/stats/?channel=${channelLol}&device_type=${deviceType}&device_id=${Device_ID}&os_version=${osVersion}&version_code=220400&app_name=${appName}&device_platform=${platform}&aid=1988`
    return url
}
export async function getID(url: string) {
    if (url.includes('vm.tiktok.com') || url.includes('vt.tiktok.com')) {
       let res = await got.head(url)
       let id = res.url.split('/')[5]
       let excludesTimestamp = id.includes('?') ? id.split('?')[0] : id
       return excludesTimestamp
    }
    else {
        return url.split("/")[5]
    }
}