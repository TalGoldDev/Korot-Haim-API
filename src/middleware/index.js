const generatePDFFromHTML = require("../generator").generatePDFFromHTML;
const fs = require("fs");
let path = require("path");
const util = require("util");

let requestCount = 0;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function generatePDF(req, res, next) {
  let boolPdf = await generatePDFFromHTML(req.body, requestCount);

  if (boolPdf) {
    const pdfPath = path.join(process.cwd(), "pdf" + requestCount + ".pdf");
    requestCount++;

    const readFile = util.promisify(fs.readFile);

    let counter = 0;
    while (!fs.existsSync(pdfPath)) {
      if (counter > 10) {
        requestCount--;
        return;
      }
      await sleep(100);
    }

    const data = await readFile(pdfPath);

    res.contentType("application/pdf");
    res.send(data);
    console.log("request #:" + requestCount + " status:complete");

    fs.unlink(pdfPath, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      //file removed
    });
  }
  return;
}

exports.generatePDF = generatePDF;

function accessControlAllowOrigin(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,responseType,accept,Authorization"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
}

exports.accessControlAllowOrigin = accessControlAllowOrigin;
