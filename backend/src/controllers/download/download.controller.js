const takaritasi_utasitas = require("../../html/takaritasi_utasitas_html");
const allergen_tajekoztato = require("../../html/allergen_tajekoztato_html");
const etelek_homersekletenek_ellenorzo_lapja = require("../../html/etelek_homersekletenek_ellenorzo_lapja_html");
const higieniai_es_takaritasi_utasitas = require("../../html/higieniai_es_takaritasi_utasitas_html");
const jo_vendeglato_gyakorlat = require("../../html/jo_vendeglato_gyakorlat_html");
const talalasi_naplo = require("../../html/talalasi_naplo_html");
const veszelyek_valodisaganak_becslese = require("../../html/veszelyek_valodisaganak_becslese_html");
const haccp_1 = require("../../html/haccp_1_html");

let documents = [
  {
    html: takaritasi_utasitas,
    name: "takaritasi_utasitas",
    orientation: "landscape",
  },
  {
    html: allergen_tajekoztato,
    name: "allergen_tajekoztato",
    orientation: "portrait",
  },
  {
    html: etelek_homersekletenek_ellenorzo_lapja,
    name: "etelek_homersekletenek_ellenorzo_lapja",
    orientation: "portrait",
  },
  {
    html: higieniai_es_takaritasi_utasitas,
    name: "higieniai_es_takaritasi_utasitas",
    orientation: "portrait",
  },
  {
    html: jo_vendeglato_gyakorlat,
    name: "jo_vendeglato_gyakorlat",
    orientation: "portrait",
  },
  { html: talalasi_naplo, name: " talalasi_naplo", orientation: "portrait" },
  {
    html: veszelyek_valodisaganak_becslese,
    name: "veszelyek_valodisaganak_becslese",
    orientation: "portrait",
  },
];

exports.downloadHaccp = (req, res, next) => {
  const data = req.body;
  console.log("body: ", data);
  const fileName = req.params.name;
  res.pdfFromHTML({
    fileName: fileName + ".pdf",
    htmlContent: haccp_1.html(data),
  });
};

exports.downloadHaccpCertificate = (req, res, next) => {
  const data = req.body;
  console.log("body: ", data);
  const fileName = req.params.name;
  res.pdfFromHTML({
    fileName: fileName + ".pdf",
    htmlContent: haccp_1.html(data),
  });
};

exports.downloadDocument = (req, res, next) => {
  const data = req.body;
  console.log("body: ", data);
  const fileName = req.params.name;
  res.pdfFromHTML({
    fileName: fileName + ".pdf",
    htmlContent: documents
      .filter((doc) => doc.name == fileName)[0]
      .html.html(data),
    options: {
      format: "A4",
      orientation: documents.filter((doc) => doc.name === fileName)[0]
        .orientation,
    },
  });
};
