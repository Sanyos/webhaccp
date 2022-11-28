exports.html = (data) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <style>
    table, td, th {
      border: 1px solid;
    }
    td {
      min-height: 20px;
      height: 30px;
    }
    </style>
    <body>
    <div>
    <table style="width: 10in; border-collapse:collapse;border:none; margin: 0 auto;">
    <tbody>
        <tr style="border:none;">
           <td style="border:none;">
           <h3 style="color: #0070C0">EGÉSZSÉGÜGYI BELÉPÉSI NYILATKOZAT</h3>
           </td>
        </tr>
        <tr style="border:none;">
        <td style="width: 80%; border-width: 1pt 1pt 1pt 1.5pt; border-style: solid solid solid double; border-color: windowtext; border-image: initial; padding: 0cm 5.4pt; height: 25.5pt; vertical-align: top;">
            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:  "Times New Roman",serif;'>Telephely (neve, c&iacute;me): ${
              data.company_name
            }, ${data.company_headquarters}</span></strong></p>
        </td>
        <td style="width: 20%; border-top: 1pt solid windowtext; border-left: none; border-bottom: 1pt solid windowtext; border-right: 1.5pt double windowtext; padding: 0cm 5.4pt; height: 25.5pt; vertical-align: top;">
            <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-family:"Times New Roman",serif;'>Kiad&aacute;sa:  ${new Date()
              .toISOString()
              .split("T")[0]
              .replace(/-/g, ".")}</span></strong></p>
        </td>
    </tr>
    <tr style="height: 30px; ">
    </tr>
    <tr style="width: 10in">
      <td style="color: #C00000; font-style: italic; border: none;">Alulírott nyilatkozom arról, hogy nincs az élelmiszerekre veszélyes betegségem, illetve az elmúlt 48 órában nem észleltem magamon a következőket: Sárgaság, Hasmenés, Hányás, Láz, Torokgyulladás, Bőrkiütés, Bőrelváltozás, Váladékozó szembetegség, Fül-és Orrfolyás.</td>
    </tr>
    </tbody>
</table>

<table  style="width: 10in; margin: 2rem auto; border: 1px solid black; border-collapse: collapse;"> 
    <tr>
      <td>Dátum</td>
      <td>Belépő neve</td>
      <td>Belépés időpontja (óra perc)</td>
      <td>Látogatás célja</td>
      <td>Elérhetősége (telefon, e-mail)
      </td>
      <td>Aláírás</td>
      <td>Kilépés időpontja(óra perc)
      </td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</table>
    </div>
   
    </body>
  </html>
  
  
  
`;
};
