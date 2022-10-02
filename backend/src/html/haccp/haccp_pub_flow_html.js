exports.html = (data) => {
  let html = `
  
  <h2 style="padding-top: 1rem">3. FOLYAMATÁBRA</h2>
  
  <table cellspacing="0" cellpadding="0" class="flow-chart-table">
    <tr>
      <td>
        <div class="border">
          <small>1. IGÉNYFELMÉRÉS</small>
        </div>

        <span style="font-size: 20px; margin-left: 80px;">&#8595;</span>
      </td>
      <td></td>
    </tr>

    <tr>
      <td>
        <div class="border">
          <small>2. ÁRUBESZERZÉS</small>
        </div>
        <span style="font-size: 20px; margin-left: 80px;">&#8595;</span>
      </td>
      <td></td>
    </tr>

    <tr>
      <td>
        <small>
          <span class="border">3. ÁRUÁTVÉTEL </span><span style="font-size: 20px; margin-left: 20px;">&#x2192;</span>
        </small>
        <br>
        <br>
        <span style="font-size: 20px; margin-left: 50px;">&#8595;</span>
      </td>
      <td>
        <div class="border">
          <small>
            3.1 Minőségi követelmények rögzítése
          </small>
          <br> <small> 3.2 Nyomonkövetés </small>
          <br> <small> 3.3 Minőségi átvétel </small>
          <br> <small> 3.4 Mennyiségi átvétel </small>
          <br> <small>3.5 Szakosított átvétel </small>
          <br> <small> 3.6 Tisztítószerek, takarítóeszközök </small>
        </div>
      </td>
    </tr>

    <tr>
      <td>
        <small>
          <span class="border">4. TÁROLÁS </span><span style="font-size: 20px; margin-left: 20px;">&#x2192;</span>
        </small>
        <br>
        <br>
        <span style="font-size: 20px; margin-left: 50px;">&#8595;</span>
      </td>
      <td>
        <div class="border">
       <small> 4.1 Szakosított tárolás</small>
          <br><small> 4.2 Hűtést igénylő termékek tárolása</small>
          <br><small> 4.3 Minőség-megőrzési idők dokumentálása, nyomonkövetés</small>
          <br><small> 4.4 Tisztítószerek, takarítóeszközök</small>

        </div>
      </td>
    </tr>

    <tr>
    <td>
      <div class="border">
        <small>5. TERMELÉS</small>
      </div>
      <span style="font-size: 20px; margin-left: 80px;">&#8595;</span>
    </td>
    <td></td>
  </tr>

  <tr>
      <td>
        <div class="border">
          <small>6. ÉRTÉKESÍTÉS</small>
        </div>
      </td>
      <td></td>
    </tr>

  </table>`;

  return html;
};
