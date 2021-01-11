import app from "./src";
import puppeteer from "puppeteer";
import fs from "fs-extra";

(async function () {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent("<h1>שלום</h1>");
    await page.emulateMediaType("screen");
    await page.pdf({
      path: "mypdf.pdf",
      format: "A4",
      printBackground: true,
    });

    console.log("done");
    await browser.close();
    process.exit();
  } catch (e) {
    console.log("error", e);
  }
})();
// const port = process.env.PORT || 3001;

// const server = app.listen(port);

// console.log(port);
