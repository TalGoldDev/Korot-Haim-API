import puppeteer from "puppeteer";
import fs from "fs-extra";
import hbs from "handlebars";
import path from "path";

const compile = async function (templateName, data) {
  const filePath = path.join(__dirname, "templates", `${templateName}.hbs`);
  const html = await fs.readFile(filePath, "utf-8");
  return hbs.compile(html)(data);
};

const generatePDFFromHTML = async function (data) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const content = await compile(`template${data.selectedTemplate}`, data);

    await page.setContent(content);
    await page.emulateMediaType("screen");
    await page.pdf({
      path: "mypdf.pdf",
      format: "A4",
      printBackground: true,
    });

    console.log("done");
    await browser.close();
  } catch (e) {
    console.log("error", e);
  }
};

export { generatePDFFromHTML };
