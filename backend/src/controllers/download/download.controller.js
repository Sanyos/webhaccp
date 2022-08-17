const takaritasi_utasitas = require("../../html/takaritasi_utasitas_html");
const allergen_tajekoztato = require("../../html/allergen_tajekoztato_html");
const etelek_homersekletenek_ellenorzo_lapja = require("../../html/etelek_homersekletenek_ellenorzo_lapja_html");
const higieniai_es_takaritasi_utasitas = require("../../html/higieniai_es_takaritasi_utasitas_html");
const jo_vendeglato_gyakorlat = require("../../html/jo_vendeglato_gyakorlat_html");
const talalasi_naplo = require("../../html/talalasi_naplo_html");
const veszelyek_valodisaganak_becslese = require("../../html/veszelyek_valodisaganak_becslese_html");
const dontesi_fa = require("../../html/dontesi_fa_html");
const haccp_1 = require("../../html/haccp_1_html");
const haccp_kezikonyv = require("../../html/haccp_kezikonyv_html");

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
];

exports.downloadHaccp = (req, res, next) => {
  const data = req.body;
  console.log("body: ", data);
  const fileName = req.params.name;
  res.pdfFromHTML({
    fileName: fileName + ".pdf",
    htmlContent: haccp_1.html(data),
    options: {
      format: "A/4",
      height: "9in",
      width: "12.5in",
    },
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
  const file = documents.filter((doc) => doc.name == fileName)[0];
  if (file) {
    res.pdfFromHTML({
      fileName: fileName + ".pdf",
      htmlContent: file.html.html(data),
      options: {
        height: file.orientation === "portrait" ? "13in" : "8.5in",
        width: file.orientation === "portrait" ? "8.7in" : "11.7in",
        orientation: file.orientation,
      },
    });
  } else {
    return new createError[500](`Could not download document: ${err}`);
  }
};
