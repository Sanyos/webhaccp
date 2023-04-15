const { CompanyCategoryTypes } = require("../../enums/enums");
const enums = require("../../enums/enums");
const restaurantTables = require("./haccp_restaurant_tables_html");
const pubTables = require("./haccp_pub_tables_html");
const buffetTables = require("./haccp_buffet_tables_html");
const restaurantflow = require("./haccp_restaurant_flow_html");
const buffetFlow = require("./haccp_buffet_flow_html");
const pubFlow = require("./haccp_pub_flow_html");

exports.html = (data) => {
  let category = CompanyCategoryTypes[data.haccp_company_category];
  let html = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
      <h1>Test</h1>
  </body>

  </html>
`;

  return html;
};
