const puppeteer = require("puppeteer");
describe("End 2 End tests", async() => {
    it("first test", async() => {
        console.log("inside test");
        // const url = "http://www.google.com";
        const ourUrl = "https://www.demoblaze.com/";
        const browser = await puppeteer.launch({headless: true, fullPage: true});
        const page = await browser.newPage();
        await page.goto(ourUrl, { waitUntil: "networkidle2" });
        await page.waitForSelector("#next2");
        await page.click("#next2");
        await page.waitForTimeout(5000);
        await page.screenshot({ path: 'screen.png', fullPage: true })
        await page.close();
        await browser.close();
    });
});