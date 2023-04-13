var requireOrImport = require("require-or-import")
const szamlazz = requireOrImport( 'szamlazz.js')
const { CompanyCategoryTypes, PricesWithoutVat } = require("../../enums/enums");

exports.start= (haccp) => {
  console.log(haccp);
      szamlazz.then((res)=>{
        let szamlazzClient = new res.Client({
          authToken: '86ewnaemamje86ewnw25w2qe86ewn83ipqze86ewnd',
          eInvoice: true, // create e-invoice. optional, default: false
        })
        let seller = new res.Seller({ // everyting is optional
          
        })
      
        let buyer = new res.Buyer({
          name: haccp.haccp_company_name+"".trim(),
          zip: haccp.haccp_billing_zip,
          city: haccp.haccp_billing_city,
          address: haccp.haccp_billing_address,
          taxNumber: haccp.haccp_company_vat_number,
          email: haccp.haccp_user_email,
          identifier: 1,
        })
      
        let soldItem1 = new res.Item({
          label: 'WEBHACCP Rendszer kiépítése ( '+ CompanyCategoryTypes[haccp.haccp_company_category] +' )',
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
          paid: true,
          items: [ soldItem1 ], // the sold items, required
        })
      
        szamlazzClient.issueInvoice(invoice).then((res)=>{
          console.log(res);
        })
      });
    }


    exports.startReview= (haccp) => {
      console.log(haccp);
          szamlazz.then((res)=>{
            let szamlazzClient = new res.Client({
              authToken: '86ewnaemamje86ewnw25w2qe86ewn83ipqze86ewnd',
              eInvoice: true, // create e-invoice. optional, default: false
            })
            let seller = new res.Seller({ // everyting is optional
              
            })
          
            let buyer = new res.Buyer({
              name: haccp.haccp_company_name+"".trim(),
              zip: haccp.haccp_billing_zip,
              city: haccp.haccp_billing_city,
              address: haccp.haccp_billing_address,
              taxNumber: haccp.haccp_company_vat_number,
              email: haccp.haccp_user_email,
              identifier: 1,
            })
          
            let soldItem1 = new res.Item({
              label: 'WEBHACCP Rendszer felülvizsgálata ( '+ CompanyCategoryTypes[haccp.haccp_company_category] +' )',
              quantity: 1,
              unit: 'db',
              vat: 27, 
              netUnitPrice: ReviewPricesWithoutVat[haccp.haccp_company_category], 
            })
          
            let invoice = new res.Invoice({
              paymentMethod: res.PaymentMethods.CreditCard, // optional, default: BankTransfer
              currency: res.Currencies.Ft, // optional, default: Ft
              language: res.Languages.Hungarian, // optional, default: Hungarian
              seller: seller, // the seller, required
              buyer: buyer, // the buyer, required
              paid: true,
              items: [ soldItem1 ], // the sold items, required
            })
          
            szamlazzClient.issueInvoice(invoice).then((res)=>{
              console.log(res);
            })
          });
        }