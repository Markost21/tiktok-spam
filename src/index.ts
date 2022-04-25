import got from 'got';
import { userAgents } from './Defaults';
import { getID, getRandomArray, getUrlWithRandons } from './utils';

let urlVideo = process.argv[2]

let requests = {
    total: 0,
    success: 0,
    failed: 0
};
(async () => {
    setInterval(async () => {
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
        requests.total++
        let body = JSON.parse(response.body)
        if (body.status_code == 0) requests.success++
        else requests.failed++
        console.log(`Total: ${requests.total} | Success: ${requests.success} | Failed: ${requests.failed}`)
        console.log(response.body)
    }, 1000)
})()