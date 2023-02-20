var requireOrImport = require("require-or-import")
const szamlazz = requireOrImport( 'szamlazz.js')
const { CompanyCategoryTypes, PricesWithoutVat } = require("../../enums/enums");


exports.start= (haccp) => {
  console.log(haccp);
      szamlazz.then((res)=>{
        let szamlazzClient = new res.Client({
          authToken: '85cvspetk7dcejcvspethivv5ncvspettq63cucvsp',
          eInvoice: true, // create e-invoice. optional, default: false
        })
        let seller = new res.Seller({ // everyting is optional
          bank: {
            name: 'Test Bank <name>',
            accountNumber: '11111111-11111111-11111111'
          },
          email: {
            replyToAddress: 'test@email.com',
            subject: 'Invoice email subject',
          },
        })
      
        let buyer = new res.Buyer({
          name: haccp.haccp_company_name,
          zip: haccp.haccp_billing_zip,
          city: haccp.haccp_billing_city,
          address: haccp.haccp_billing_address,
          taxNumber: haccp.haccp_company_vat_number,
          email: haccp.haccp_user_email,
          identifier: 1,
        })
      
        let soldItem1 = new res.Item({
          label: 'HACCP Rendszer kiépítése ( '+ CompanyCategoryTypes[haccp.haccp_company_category] +' )',
          quantity: 1,
          unit: 'db',
          vat: 27, 
          netUnitPrice: PricesWithoutVat[haccp.haccp_company_category], 
        })
      
        let invoice = new res.Invoice({
          paymentMethod: res.PaymentMethods.CreditCard, // optional, default: BankTransfer
          currency: res.Currencies.Ft, // optional, default: Ft
          language: res.Languages.Hungarian, // optional, default: Hungarian
          seller: seller, // the seller, required
          buyer: buyer, // the buyer, required
          items: [ soldItem1 ], // the sold items, required
        })
      
        szamlazzClient.issueInvoice(invoice).then((res)=>{
          console.log(res);
        })
      });
    }