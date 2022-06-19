const takaritasi_utasitas = require("../../html/takaritasi_utasitas_html");

exports.downloadHaccp = (req, res, next) => {
  const data = req.body;
  console.log("body: ", data);
  const fileName = req.params.name;
  res.pdfFromHTML({
    fileName: fileName + ".pdf",
    htmlContent: takaritasi_utasitas.html(data),
  });
};

exports.downloadHaccpCertificate = (req, res, next) => {
  const data = req.body;
  console.log("body: ", data);
  const fileName = req.params.name;
  res.pdfFromHTML({
    fileName: fileName + ".pdf",
    htmlContent: takaritasi_utasitas.html(data),
  });
};

exports.downloadDocument = (req, res, next) => {
  const data = req.body;
  console.log("body: ", data);
  let fileName = req.params.name;
  console.log(fileName);
  res.pdfFromHTML({
    fileName: fileName + ".pdf",
    htmlContent: takaritasi_utasitas.html(data),
    options: {
      orientation: "landscape",
    },
  });
};
