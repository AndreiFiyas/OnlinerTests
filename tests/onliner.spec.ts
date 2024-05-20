import {expect, test} from "@playwright/test";

test.describe('example', () => {
    test("onliner title", async ({page}) => {
        await page.goto("https://www.onliner.by/");
        const onlinerTitle = page.locator('#container > div > div > header > div.b-top-actions > div > div.b-top-logo > a > img');

    })
})