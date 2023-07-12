const puppeteer = require('puppeteer');
const url ="https://www.google.com.br/?hl=pt-BR";
const searchFor = "Flight aju - sp";

(async() =>{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    console.log("Iniciei")
    await page.goto(url);

    await page.waitForSelector('#APjFqb')

    await page.type('#APjFqb', searchFor)
    console.log("Fui para Url")

    await Promise.all([
        page.waitForNavigation(),
        page.keyboard.press('Enter')
    ])

    await page.waitForSelector('Z4Cazf OSrXXb')

    await Promise.all([
        page.waitForNavigation(),
        page.click('Z4Cazf OSrXXb')
    ])

    await browser.close()
})();
