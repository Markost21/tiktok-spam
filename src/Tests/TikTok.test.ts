import { TikTokSendShare } from "..";

// test if success is true
test("TikTokSendShare", async () => {
    let urlVideo = "https://vm.tiktok.com/ZMLprpuM5/";
    let result = await TikTokSendShare(urlVideo);
    expect(result.success).toBe(true);
})