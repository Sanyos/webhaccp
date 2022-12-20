exports.html = (data) => {
  let html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        .bg {
          background-image: url("backend/public/angular/assets/haccp_bg.png");
          background-size: cover;
          width: 11in;
          height: 9.5in;
          padding: 2rem;
        }
        .content {
          text-align: center;
          padding-top: 8rem;
          width: 100%;
        }
        .title {
          color: #bf9237;
        }
        h1, h2{
          margin: 8px;
          padding: 0 5rem;
        }
        .flex{
          display: flex;
          justify-content: space-between;
          padding: 3rem;
        }
        .sign-box{
          width: 500px;
          border-top: 1px solid black;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="bg">
        <div class="content">
          <h2>Alulírott igazolom</h2>
          <h2>a</h2>
          <h1 class="title">${data.haccp.haccp_company_name}</h1>
          <h2>által üzemeltetett</h2>
          <h1 class="title">${data.haccp.haccp_unit_name}</h1>
          <h2>${data.haccp.haccp_company_headquarters}</h2>
          <h2>HACCP</h2>
          <h2><i>
              (Veszélyelemzés, Kritikus Szabályozási Pontok)</h2>
          </i>
          <h2>élelmiszerbiztonsági rendszert épített ki. 
              A  Codex Alimentarius 2-1/1969 irányelv szerint kiépített és alkalmazott HACCP élelmiszerbiztonsági rendszer kielégíti 
              a 852/2004 EK rendelet
              előírásának és a vállalkozás jóváhagyott
              HACCP dokumentációjának követelményeit.
              </h2>
        </div>
        <div class="flex">
          <h3>Kelt: <span>Szentendre</span>, <span>${new Date()
            .toISOString()
            .split("T")[0]
            .replace(/-/g, ".")}</span></h3>
          <h3>Érvényes: <span>${new Date(
            new Date(data.haccp.haccp_date).setFullYear(
              new Date(data.haccp.haccp_date).getFullYear() + 1
            )
          )
            .toISOString()
            .split("T")[0]
            .replace(/-/g, ".")}</span></h3>
        </div>
        <div class="flex">
          <div class="sign-box">
              <h2>Paróczi Ádám</h2>
              <h2>ügyvezető</h2>
              <h2>PRÉMIUM CSOPORT Kft</h2>
          </div>
          <div class="sign-box">
              <h2>${data.billingName}</h2>
              <h2>${data.haccp.haccp_company_name}</h2>
          </div>
        </div>
      </div>
    </body>
  </html>
  
    `;

  return html;
};
