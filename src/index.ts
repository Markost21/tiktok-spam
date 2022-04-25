import got from 'got';
import { userAgents } from './Defaults';
import { getID, getRandomArray, getUrlWithRandons } from './utils';

export async function TikTokSendShare(urlVideo: string) {
    let headers = {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "user-agent": getRandomArray(userAgents)
    }
    let id = await getID(urlVideo)
    let data = `item_id=${id}&share_delta=1`
    let url = getUrlWithRandons()
    let response = await got.post(url, {
        headers,
        body: data
    })
    let body = JSON.parse(response.body)
    return {
        success: body.status_code == 0 ? true : false,
        data: body
    }
}