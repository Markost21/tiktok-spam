# TS/JS TikTok Share Spammer
A TikTok Share Spammer Videos.

This code is literally the conversion of [@Wizz1337](https://github.com/Wizz1337/TikTokMassBotting) to Typescript.

## Run
```bash
cd path/to/tiktok-spam
yarn
npm run test
```

## Usage
```ts
import { TikTokSendShare } from '@viniciusgdr/tiktok-spam';

let result = TikTokSendShare('URL_VIDEO')
console.log(result)
```
with spam:
```ts
import { TikTokSendShare } from '@viniciusgdr/tiktok-spam';

setInterval(async () => {
    let result = TikTokSendShare('URL_VIDEO')
    console.log(result)
}, 500)
```
## Credits
- [@Wizz1337](https://github.com/Wizz1337) (Python) for the idea, deviceTypes, platforms, channels and Api domains.