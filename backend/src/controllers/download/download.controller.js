const takaritasi_utasitas = require("../../html/documents/takaritasi_utasitas_html");
const allergen_tajekoztato = require("../../html/documents/allergen_tajekoztato_html");
const etelek_homersekletenek_ellenorzo_lapja = require("../../html/documents/etelek_homersekletenek_ellenorzo_lapja_html");
const hutoterek_homersekletenek_ellenorzo_lapja = require("../../html/documents/hutoterek_homersekletenek_ellenorzo_lapja_html");
const higieniai_es_takaritasi_utasitas = require("../../html/documents/higieniai_es_takaritasi_utasitas_html");
const jo_vendeglato_gyakorlat = require("../../html/documents/jo_vendeglato_gyakorlat_html");
const talalasi_naplo = require("../../html/documents/talalasi_naplo_html");
const veszelyek_valodisaganak_becslese = require("../../html/documents/veszelyek_valodisaganak_becslese_html");
const dontesi_fa = require("../../html/documents/dontesi_fa_html");
const haccp = require("../../html/haccp/haccp_html");
const haccp_kezikonyv = require("../../html/documents/haccp_kezikonyv_html");
const egeszsegugyi_belepesi_nyilatkozat = require("../../html/documents/egeszsegugyei_belepesi_nyilatkozat_html");
var html_to_pdf = require("html-pdf-node");
const haccp_certificate = require("../../html/haccp/haccp_certificate_html");

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
    html: hutoterek_homersekletenek_ellenorzo_lapja,
    name: "hutoterek_homersekletenek_ellenorzo_lapja",
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
  { html: talalasi_naplo, name: "talalasi_naplo", orientation: "portrait" },
  {
    html: veszelyek_valodisaganak_becslese,
    name: "veszelyek_valodisaganak_becslese",
    orientation: "portrait",
  },
  {
    html: dontesi_fa,
    name: "dontesi_fa",
    orientation: "landscape",
  },
  {
    html: haccp_kezikonyv,
    name: "haccp_kezikonyv",
    orientation: "portrait",
  },
  {
    html: egeszsegugyi_belepesi_nyilatkozat,
    name: "egeszsegugyi_belepesi_nyilatkozat",
    orientation: "landscape",
  },
];

exports.downloadHaccp = (req, res, next) => {
  const data = req.body;
  console.log(data);
  res.setHeader("Content-Type", "application/pdf");
  let options = {
    width: "17.5in",
    height: "10.85in",
    margin: { top: "30px", bottom: "30px", right: "0px", left: "0px" },
  };
  let file = { content: haccp.html(data) };
  html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
    res.send(pdfBuffer);
  });
};

exports.downloadHaccpCertificate = (req, res, next) => {
  const data = req.body;
  console.log(data);
  res.setHeader("Content-Type", "application/pdf");
  let options = {
    width: "14in",
    height: "10.5in",
  };
  let file = { content: haccp_certificate.html(data) };
  html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
    res.send(pdfBuffer);
  });
};

exports.downloadDocument = (req, res, next) => {
  const data = req.body;
  console.log(data);
  const fileName = req.params.name;
  res.setHeader("Content-Type", "application/pdf");
  const doc = documents.filter((doc) => doc.name == fileName)[0];
  if (doc) {
    let options = {
      width: doc.orientation === "landscape" ? "13.5in" : "9.5in",
      height: doc.orientation === "landscape" ? "9.5in" : "13.5in",
      margin: { top: "50px", bottom: "50px", right: "50px", left: "20px" },
    };
    let file = { content: doc.html.html(data) };
    html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
      res.send(pdfBuffer);
    });
  } else {
    return new createError[500](`Could not download document: ${err}`);
  }
};
