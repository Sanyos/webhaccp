const SimpleConnectionClient = require("simplepay-core").SimpleConnectionClient;
const moment = require("moment");
const haccpService = require("../haccp/haccp.service");
const emailSender = require("../../service/email-sender");
const paymentSuccessEmail = require("../../mail/payment-success-mail-content");
const integrity_1 = require("../../../node_modules/simplepay-core/lib/integrity");
const szamla  = require("../szamlazz/szamlazz.controller");

exports.startTransaction = (req, res, next) => {

  const protocol = req.protocol;
  const host = req.get("Host");
  const TRANSACTIONID = req.body.transactionId;
  const amount = req.body.amount;
  const haccpId = req.body.haccpId;
  const userEmail = req.body.userEmail;
  const url = `${protocol}://${host}/download-haccp/${haccpId}/`;
  const client = new SimpleConnectionClient({
    merchant: "S629601",
    secret: "MjBxMe0gT1Jt0enn0mn28uVtXtNm63Ma",
    baseUrl: "https://secure.simplepay.hu/payment/v2/",
  });

  return client
    .request("start", {
      salt: client.secret,
      merchant: client.merchant,
      currency: "HUF",
      customerEmail: userEmail,
      url: url,
      language: "HU",
      total: amount,
      methods: ["CARD"],
      orderRef: TRANSACTIONID,
      sdkVersion:
        "SimplePayV2.1_Payment_PHP_SDK_2.0.7_190701:dd236896400d7463677a82a47f53e36e",
      timeout: new Date(moment().add(15, "minutes").toISOString()),
    })
    .then(async (r) => {
      res.send(r);
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

exports.finishTransaction = (req, res, next) => {
  //console.log("BODY", req.body);
  let r = req.body.params.r;
  haccpService.getById(req.body.haccp.haccp_id).then(data=>{
    let haccp = data.rows[0];
    let email = haccp.haccp_user_email;
    let response = ({ e, m, o, r, t } = JSON.parse(
      Buffer.from(r, "base64").toString()
    ));
    if (response.e === "SUCCESS" && !haccp.payment_success) {
      haccp.payment_success = true;
      haccp.haccp_transaction_id = response.t;
      haccpService.updateById(haccp.haccp_id, haccp);
      emailSender.sendEmail(email, paymentSuccessEmail.paymentSuccessEmail());
      console.log("KINT",haccp.haccp_billing_zip);
      szamla.start(haccp);
    }
    console.log("finish tr", response);
    res.send(response);
    return response;
  });
};

exports.ipn = (req, res, next) => {
  let response = req.body;
  let tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  response.receiveDate =
    new Date(Date.now() - tzoffset).toISOString().slice(0, -1).split(".")[0] +
    "+01:00";
  const hash = (0, integrity_1.getSignature)(
    JSON.stringify(response),
    "MjBxMe0gT1Jt0enn0mn28uVtXtNm63Ma"
  );

  console.log(response);

  res.setHeader("Signature", hash);
  res.send(response);
};
