const puppeteer = require("puppeteer");

const generatePDFFromHTML = async function (data, requestNumber) {
  try {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox"],
    });
    const page = await browser.newPage();

    await page.setContent(data.html);
    await page.emulateMediaType("screen");
    await page.pdf({
      path: "pdf" + requestNumber + ".pdf",
      format: "A4",
      printBackground: true,
    });
    await browser.close();
  } catch (e) {
    console.log("error", e);
  }
};

exports.generatePDFFromHTML = generatePDFFromHTML;
