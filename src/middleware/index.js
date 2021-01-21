const generatePDFFromHTML = require("../generator").generatePDFFromHTML;
const fs = require("fs");

let requestCount = 0;

async function generatePDF(req, res, next) {
  console.log("testing: " + req.body);
  await generatePDFFromHTML(req.body, requestCount);
  // pdf.pipe(res);
  const pdfPath = `${process.cwd()}\\pdf` + requestCount + `.pdf`;
  requestCount++;
  var data = fs.readFileSync(pdfPath);
  res.contentType("application/pdf");
  res.send(data);
  console.log("done generating request #:" + requestCount);

  fs.unlink(pdfPath, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file removed
  });

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
    "X-Requested-With,content-type,responseType,accept"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
}

exports.accessControlAllowOrigin = accessControlAllowOrigin;
