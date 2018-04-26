const puppeteer = require('puppeteer');

async function run() {
    console.log('run run');

    const url = 'http://localhost:8080/dhis-web-dashboard/index.html';

    const browser = await puppeteer.launch();

    console.log('browser launched');


    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));

    await page.setCookie({
        name: 'JSESSIONID',
        value: '7DA773D9140953CFB11668A4EA20991B',
        url
    });

    console.log('cookie set');

    await page.goto(url);
    await page.waitFor(2000);
    await page.screenshot({ path: 'dhis.png' });
    console.log('screenshot taken');

    await browser.close();
    console.log('done with file creation');

    return;

}

return run();



// (async () => {

//     // const username = 'admin';
//     // const password = 'district';
//     const url = 'http://localhost:8080/dhis-web-dashboard/index.html';

//     const browser = await puppeteer.launch();
//     // const browser = await puppeteer.launch({headless: false, slowMo: 500});

//     const page = await browser.newPage();
//     //   await page.goto('https://admin:district@play.dhis2.org/dev/dhis-web-maps/?id=rWBLOMm1lE6');

//     // await page.setExtraHTTPHeaders({
//         //     'Authorization': `Basic ${new Buffer(`${username}:${password}`).toString('base64')}`
//         //   });
//     page.on('console', msg => console.log('PAGE LOG:', msg.text()));

//     await page.setCookie({
//         name: 'JSESSIONID',
//         value: 'FB0716D77CAEEC542C2D6BA37B80C749',
//         url
//     });

//     // await page.authenticate({username, password})
//     // await page.goto('http://localhost:8080');
//     await page.goto(url);
//     await page.waitFor(2000);


//     await page.screenshot({path: 'dhis.png'});

//     await browser.close();


// })();













//http://username:password@example.com/

//   const dimensions = await page.evaluate(() => {
//     return {
//       width: document.documentElement.clientWidth,
//       height: document.documentElement.clientHeight,
//       deviceScaleFactor: window.devicePixelRatio
//     };
//   });

//   console.log('Dimensions:', dimensions);