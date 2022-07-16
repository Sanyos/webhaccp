const takaritasi_utasitas = require("../../html/takaritasi_utasitas_html");
const allergen_tajekoztato = require("../../html/allergen_tajekoztato_html");
const etelek_homersekletenek_ellenorzo_lapja = require("../../html/etelek_homersekletenek_ellenorzo_lapja_html");
const higieniai_es_takaritasi_utasitas = require("../../html/higieniai_es_takaritasi_utasitas_html");
const jo_vendeglato_gyakorlat = require("../../html/jo_vendeglato_gyakorlat_html");
const talalasi_naplo = require("../../html/talalasi_naplo_html");
const veszelyek_valodisaganak_becslese = require("../../html/veszelyek_valodisaganak_becslese_html");
const haccp_1 = require("../../html/haccp_1_html");

let docs = {
  takaritasi_utasitas,
  allergen_tajekoztato,
  etelek_homersekletenek_ellenorzo_lapja,
  higieniai_es_takaritasi_utasitas,
  jo_vendeglato_gyakorlat,
  talalasi_naplo,
  veszelyek_valodisaganak_becslese,
  haccp_1,
};

exports.downloadHaccp = (req, res, next) => {
  const data = req.body;
  console.log("body: ", data);
  const fileName = req.params.name;
  res.pdfFromHTML({
    fileName: fileName + ".pdf",
    htmlContent: docs["haccp_1"].html(data),
  });
};

exports.downloadHaccpCertificate = (req, res, next) => {
  const data = req.body;
  console.log("body: ", data);
  const fileName = req.params.name;
  res.pdfFromHTML({
    fileName: fileName + ".pdf",
    htmlContent: docs["haccp_1"].html(data),
  });
};

exports.downloadDocument = (req, res, next) => {
  const data = req.body;
  console.log("body: ", data);
  const fileName = req.params.name;
  res.pdfFromHTML({
    fileName: fileName + ".pdf",
    htmlContent: docs[fileName].html(data),
    options: {
      format: "A4",
      orientation: "portrait",
    },
  });
};
