const { CompanyCategoryTypes } = require("../../enums/enums");
exports.html = (data) => {
  let category = CompanyCategoryTypes[data.haccp_company_category];
  const enums = require("../../enums/enums");
  let hasEgg = data.haccp_egg.split("###").filter((egg) => {
    return egg === "freshEgg" || egg === "disinfectedEgg";
  });
  let html = `

  <h2>3. FOLYAMATÁBRA</h2>
  
  <table cellspacing="0" cellpadding="0" class="flow-chart-table">
    <tr>
      <td>
        <div style=" margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 230px;">

          <small>1. Étlaptervezés</small>
        </div>
        <span style="font-size: 20px; margin-left: 80px;">&#8595;</span>
      </td>
      <td>

      </td>
    </tr>

    <tr>
      <td>
        <div style=" margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 230px;">
          <small>2. Igényfelmérés</small>
        </div>

        <span style="font-size: 20px; margin-left: 80px;">&#8595;</span>
      </td>
      <td></td>
    </tr>

    <tr>
      <td>
        <div style=" margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 230px;">
          <small>3. Beszerzés</small>
        </div>
        <span style="font-size: 20px; margin-left: 80px;">&#8595;</span>
      </td>
      <td></td>
    </tr>

    <tr>
      <td>
        <small>
          <span style=" margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 230px;">4. Áruátvétel </span><span style="font-size: 20px; margin-left: 20px;">&#x2192;</span>
        </small>
        <br>
        <br>
        <span style="font-size: 20px; margin-left: 50px;">&#8595;</span>
      </td>
      <td>
        <div style=" margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 230px;">
          <small>
            4.1 Minőségi követelmények rögzítése
          </small>
          <br> <small> 4.2 Nyomonkövetés </small>
          <br> <small> 4.3 Minőségi átvétel </small>
          <br> <small> 4.4 Mennyiségi átvétel </small>
          <br> <small>4.5 Szakosított átvétel </small>
          <br> <small>4.6 Csomagoló anyag </small>
          <br> <small> 4.7 Tisztítószerek, takarítóeszközök </small>
        </div>
      </td>
    </tr>

    <tr>
      <td>
        <small>
          <span style=" margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 230px;">5. TÁROLÁSs </span><span style="font-size: 20px; margin-left: 20px;">&#x2192;</span>
        </small>
        <br>
        <br>
        <span style="font-size: 20px; margin-left: 50px;">&#8595;</span>
      </td>
      <td>
        <div style=" margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 230px;">
       <small> 5.1 Szakosított tárolás</small>
          <br><small> 5.2 Hűtést igénylő termékek tárolása</small>`;
  if (data.haccp_require_keeping_cold) {
    html += "<br><small> 5.3 Fagyasztást igénylő termékek tárolása </small>";
  }
  html += `
          <br><small> 5.4 Szárazáru tárolás</small>
          <br><small> 5.5 Minőség-megőrzési idők dokumentálása, nyomonkövetés</small>
          <br><small> 5.6 Csomagoló anyag</small>
          <br><small> 5.7 Tisztítószerek, takarítóeszközök</small>

        </div>
      </td>
    </tr>

    <tr>
      <td>
        <small><span style=" margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 230px;">
            6. ELŐKÉSZÍTÉS
          </span><span style="font-size: 20px; margin-left: 20px;">&#x2192;</span></small>
        <br>
        <br>
        <span style="font-size: 20px; margin-left: 50px;">&#8595;</span>
      </td>
      <td>
        <div style=" margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 230px;">

          <small> 6.1 Csomagoló anyagok bontása</small>
          <br><small> 6.2 Kimérés</small>`;
  if (data.haccp_require_keeping_cold) {
    html += "<br><small> 6.3 Fagyasztott termékek felengedtetése </small>";
  }
  if (hasEgg.length !== 0) {
    html += " <br><small> 6.4 Tojás fertőtlenítése, törése </small>";
  }
  data.haccp_preparatory.split("###").forEach((prep) => {
    if (
      enums.ProductPreparatoryEnum[prep] ===
      enums.ProductPreparatoryEnum.vegetable
    ) {
      html += "<br><small> 6.5 Zöldségek, gyümölcsök előkészítése </small>";
    }
    if (
      enums.ProductPreparatoryEnum[prep] === enums.ProductPreparatoryEnum.meat
    ) {
      html +=
        " <br><small> 6.6 Húselőkészítés </small><br><small> 6.7 Fagyasztás </small>";
    }
  });
  html += `     
          <br><small> 6.8 Tisztítás, mosogatás</small>
        </div>
      </td>
    </tr>

    <tr>
      <td>
        <small>
          <span style=" margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 230px;">
            7. ÉTELKÉSZÍTÉS
          </span><span style="font-size: 20px; margin-left: 20px;">&#x2192;</span></small>
        <br>
        <br>
        <span style="font-size: 20px; margin-left: 50px;">&#8595;</span>
      </td>
      <td>
        <div style=" margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 230px;">
          <small>
            7.1 Meleg ételkészítés
          </small> <br>`;

  if (category === CompanyCategoryTypes.CASUALRESTAURANT) {
    html += `
          <small>
            7.2 Tálalás -> 7.2.1. Csomagolás (elvitel) -> Újra melegítés 
          </small>
          `;
  } else if (category === CompanyCategoryTypes.RESTAURANT) {
    html += `
          <small>
          7.2 Hideg konyhai termékek
        </small>
          `;
  }
  html += `

        </div>
      </td>
    </tr>

    <tr>
      <td>
        <small>
          <span style=" margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 230px;">
            8. KISZOLGÁLÁS
          </span><span style="font-size: 20px; margin-left: 20px;">&#x2192;</span>  </small>`;
  if (data.haccp_delivery) {
    html += `   <br>
<br>
<span style="font-size: 20px; margin-left: 50px;">&#8595;</span>`;
  }
  html += `   
      </td>
      <td>
        <div style=" margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 230px;">
          <small>
            8.1 Tányérok előkészítése, eldobható edényzet
          </small><br>
          <small>
            8.2 Kiadagolás
          </small>
        </div>
      </td>
    </tr>`;
  if (data.haccp_delivery) {
    html += ` <tr>
        <td>
          <small>
            <span style=" margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 230px;">
              9. Kiszállítás
            </span>
            <span style="font-size: 20px; margin-left: 20px;">&#x2192;</span> </small>
        </td>
        <td>
          <div style=" margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 230px;">
            <small>
              9.1 Szállítóedények előkészítése
            </small><br><small>
              9.2 Kimérés
            </small>
          </div>
        </td>
      </tr>`;
  }
  html += `
  </table>`;
  return html;
};
