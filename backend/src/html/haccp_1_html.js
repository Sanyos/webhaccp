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
        p {
          font-size: 18px;
          line-height: 26px;
        }
        table,
        td,
        th {
          border: 1px solid;
          padding: 8px;
        }
  
        table {
          width: 90%;
          border-collapse: collapse;
        }
        .page {
          width: 15.3in;
          height: 11.15in;
          margin: 0 auto;
          padding: 3rem;
          box-sizing: border-box;
        }
      </style>
    </head>
    <body>
      <div class="page">
        <div style="text-align: center; margin-top: 20rem">
          <h1 style="color: #31849b" ; font-size: 50px;>WEB HACCP TERV</h1>
          <h2>${data.haccp_unit_name}</h2>
          <h2>${data.haccp_company_location}</h2>
  
          <h2>
            Felülvizsgálat: ${new Date(
              new Date(data.haccp_date).setFullYear(
                new Date(data.haccp_date).getFullYear() + 1
              )
            )
              .toISOString()
              .split("T")[0]
              .replace(/-/g, ".")}
          </h2>
          <h4 style="margin-top: 7rem">
            Üzemelteti:.....................................................
          </h4>
          <p>cégnév</p>
        </div>
      </div>
      <div class="page">
        <h1 style="text-align: center">Tartalomjegyzék</h1>
        <h3 style="margin-top: 5rem">
          1. ALKALMAZÁSI
          TERÜLET...................................................................................................................................................................................
          3
        </h3>
        <h3>
          1.
          TERMÉKLEÍRÁS..................................................................................................................................................................................................
          3
        </h3>
        <h4 style="margin-left: 1rem">
          2.1.
          Termékleírás..............................................................................................................................................................................................................................................................
          3
        </h4>
        <h4 style="margin-left: 1rem">
          2.2. Általános
          leírás..........................................................................................................................................................................................................................................................
          3
        </h4>
        <h4 style="margin-left: 1rem">
          2.3. A késztermékek minőség-megőrzési
          ideje................................................................................................................................................................................................................
          4
        </h4>
        <h4 style="margin-left: 1rem">
          2.4. Késztermék főbb
          összetevői.......................................................................................................................................................................................................................................
          4
        </h4>
        <h4 style="margin-left: 1rem">
          2.5.
          Jogszabályok...............................................................................................................................................................................................................................................................
          5
        </h4>
        <h4 style="margin-left: 1rem">
          2.6. Forgalmazás
          módja.....................................................................................................................................................................................................................................................
          7
        </h4>
        <h4 style="margin-left: 1rem">
          2.7.
          Összetétel......................................................................................................................................................................................................................................................................
          7
        </h4>
        <h4 style="margin-left: 1rem">
          2.8. Jó vendéglátó gyakorlat és Higiéniai és takarítási utasítás
          7...................................................................................................................................................................................
          7
        </h4>
        <h4 style="margin-left: 1rem">
          2.9. Az élelmiszerbiztonsági intézkedések igazolása
          .........................................................................................................................................................................................................
          7
        </h4>
        <h3>
          3.
          FOLYAMATÁBRA.....................................................................................................................................................................................................
          8
        </h3>
        <h3>
          4.
          VESZÉLYELEMZÉS.................................................................................................................................................................................................
          9
        </h3>
        <h3>
          5.
          SZABÁLYOZÁS..........................................................................................................................................................................................................
          23
        </h3>
      </div>
      <div class="page">
        <h3>Mellékletek:</h3>
        <table>
          <tr>
            <td>Sorszám</td>
            <td>Megnevezés</td>
            <td>Verziószám</td>
            <td>Kiadás</td>
          </tr>`;

  var counter = 1;

  if (data.haccp_products_require_cold_storage) {
    html +=
      `<tr>
            <td>` +
      counter +
      `.</td>
            <td>Hűtőterek hőmérséklet ellenőrző lapja</td>
            <td>1.</td>
            <td>
              ${new Date().toISOString().split("T")[0].replace(/-/g, ".")}
            </td>
          </tr>`;
    counter++;
  }

  if (data.haccp_products_require_cold_storage) {
    html +=
      `<tr>
            <td>` +
      counter +
      `.</td>
            <td>Hűtőterek hőmérséklet ellenőrző lapja</td>
            <td>1.</td>
            <td>
              ${new Date().toISOString().split("T")[0].replace(/-/g, ".")}
            </td>
          </tr>`;
    counter++;
  }

  html += `</table>
  
        <h2 style="margin-top: 5rem">1. ALKALMAZÁSI TERÜLETT</h2>
        <p>
          A Kézikönyv szerint megalakított HACCP munkacsoport a következő
          vendéglátó-ipari folyamatokat vizsgálta élelmiszerbiztonság
          szempontjából:
          <span>${data.haccp_unit_name} működése.</span>
        </p>
        <p>
          Az elemzés célja a folyamatok műveleti lépéseinek vizsgálatán keresztül
          feltárni azokat a pontokat, amelyek az emberi egészség és a késztermékek
          biztonsága szempontjából kritikusnak (CCP) tekinthetők. Az elemzés nem
          terjed ki az előállítás gazdaságosságára és az ételek
          élelmiszerbiztonságát nem veszélyeztető tulajdonságainak (pl.
          sótartalom, ízesítés, húshányad) megfelelőségére.
        </p>
        <p>
          Jelen dokumentum egy átfogó élelmiszer-előállítási, kezelési
          technológiával kapcsolatos élelmiszerbiztonsági veszélyforrásokat,
          kritikus pontokat feltáró átfogó elemzés. Az adott helyszínen, az adott
          főzőkonyhai, étteremi tevékenységre csak a rá vonatkozó műveleteket,
          veszélyeket és szabályozó intézkedéseket kell értelmezni.
        </p>
        <p>
          A HACCP rendszer alkalmazási területe az alap-, segéd-, járulékos és
          csomagolóanyagok átvételétől a késztermékek fogyasztó részére történő
          kiadásáig terjed. A rendszer kiépítése során törekszünk arra, hogy
          minden lehetséges veszélyt feltárjunk és ezeket a rendszer keretein
          belül, optimálisan szabályozzuk.
        </p>
  
        <h2 style="margin-top: 5rem">2. TERMÉKLEÍRÁS</h2>
        <h3 style="margin-left: 1rem">2.1. Termékleírás</h3>
        <table>
          <tr>
            <td>Alapanyagok</td>
            <td>Készételek</td>
          </tr>
          <tr><td>`;

  data.haccp_preparatory.split("###").forEach((prep) => {
    html += "<li>" + prep + "</li>";
  });

  html += `<td></tr>
        </table>
      </div>
      <div class="page">
        <h3 style="margin-left: 1rem">2.2. Általános leírás</h3>
        <p>
          A vendégek részére kiszolgált vendéglátó ipari termékeket a beérkezett
          nyersanyagokból az átmeneti tárolás, majd a megfelelő előkészítési
          műveletek után az ételkészítés lépésein keresztül állítjuk elő.
        </p>
        <p>
          A megfelelő beszerzési helyek/beszállítók kiválasztásával küszöböljük ki
          a mezőgazdasági, élelmiszeripari helytelen kezelésből adódó veszélyeket.
        </p>
        <p>
          Célunk, hogy a nyersanyag mikrobiológiai állapotát a hőkezelés
          műveletéig megőrizzük, az ebből eredő veszélyeket pedig a hőkezeléssel
          és a technológiai előírások betartásával megfelelő, minimális mértékre
          csökkentsük. A nem hőkezeléssel előállított ételeknél (pl. saláták)
          fokozott gondot kell fordítani a megfelelő előkészítésre és a „Jó
          Vendéglátó Gyakorlat” betartására.
        </p>
        <p>
          Az elkészült ételeknél biztosítani kell, hogy azok azonnal, jellegüknek
          megfelelően 63oC felett, vagy 0-+5oC-os hőmérsékleten jussanak el a
          fogyasztókhoz, kizárva ezzel az ételben a mikrobák szaporodását és a
          toxinképződést.
        </p>
        <h3 style="margin-left: 1rem">
          2.3. A késztermékek minőség-megőrzési ideje
        </h3>
        <p>
          A hűtést igénylő ételeket 0- +5°C között, a melegen fogyasztandó
          ételleket legalább + 63 ˚C-on kell tartani, hőmérsékletét maghőmérővel
          rendszeresen ellenőrizni kell. Ha a melegen tartás előírt hőmérséklete
          nem biztosítható folyamatosan, az étel az elkészítést követő 3 órán
          belül adható ki.
        </p>
        <p>
          A melegen tálalásra szánt ételt közvetlenül újra hőkezelés után forrón
          kell a melegen tartó berendezésbe helyezni, melyet az étel behelyezése
          előtt üzemi hőmérsékletűre kell felmelegíteni. A meleg étel +63 °C -on
          (vagy e fölött) addig tartható, amíg az étel minősége nem károsodik (pl.
          a marha pörkölt több órán át tartható így, míg a hal rövid idő alatt
          szétesik ezen a hőfokon). Ha a melegen tartás ellenére +63 °C alá
          csökken az étel hőmérséklete, újra kell melegíteni majd érzékszervi
          vizsgálattal ellenőrizni. Újramelegítéskor az étel maghőmérsékletének el
          kell érnie a +72 °C-ot 2 percen át, vagy az étel minden pontján a +75
          °C-ot. A melegen tartott ételeket a kiszolgálási szünetekben lefedve
          kell tárolni. Csak az étkezés napján készített ételek adhatók ki
        </p>
        <h3 style="margin-left: 1rem">
          2.3. A késztermékek minőség-megőrzési ideje
        </h3>
        <p>
          A hűtést igénylő ételeket 0- +5°C között, a melegen fogyasztandó
          ételleket legalább + 63 ˚C-on kell tartani, hőmérsékletét maghőmérővel
          rendszeresen ellenőrizni kell. Ha a melegen tartás előírt hőmérséklete
          nem biztosítható folyamatosan, az étel az elkészítést követő 3 órán
          belül adható ki.
        </p>
        <p>
          A melegen tálalásra szánt ételt közvetlenül újra hőkezelés után forrón
          kell a melegen tartó berendezésbe helyezni, melyet az étel behelyezése
          előtt üzemi hőmérsékletűre kell felmelegíteni. A meleg étel +63 °C -on
          (vagy e fölött) addig tartható, amíg az étel minősége nem károsodik (pl.
          a marha pörkölt több órán át tartható így, míg a hal rövid idő alatt
          szétesik ezen a hőfokon). Ha a melegen tartás ellenére +63 °C alá
          csökken az étel hőmérséklete, újra kell melegíteni majd érzékszervi
          vizsgálattal ellenőrizni. Újramelegítéskor az étel maghőmérsékletének el
          kell érnie a +72 °C-ot 2 percen át, vagy az étel minden pontján a +75
          °C-ot. A melegen tartott ételeket a kiszolgálási szünetekben lefedve
          kell tárolni. Csak az étkezés napján készített ételek adhatók ki..
        </p>
        <h3 style="margin-left: 1rem">2.4. Késztermék főbb összetevői</h3>
        <p>
          Az ételek általában gyorsan romló, illetve bizonyosan kórokozó
          mikrobákat tartalmazó nyersanyagokból készülnek. A késztermékek
          összetétele (magas fehérje, szénhidrát és víztartalom) a legtöbb esetben
          kedvező a mikrobák szaporodására.
        </p>
      </div>
      <div class="page">
        <h3>Veszélyek</h3>
        <table>
          <tr style="background-color: #e4e4e4">
            <td>Fizikai</td>
            <td>Kémiai</td>
            <td>Biológiai, mikrobiológiai</td>
          </tr>
          <tr>
            <td>
              <ul>
                <li>Fém</li>
                <li>Fa</li>
                <li>Műanyag</li>
                <li>Üveg</li>
                <li>Csontszilánk</li>
                <li>Kő</li>
                <li>Tojáshéj</li>
                <li>Gumi</li>
                <li>Papír</li>
                <li>Zsineg</li>
                <li>
                  Az élelmiszerekkel foglalkozó személyektől származó idegen anyag
                </li>
                <li>Egyéb fizikai idegen anyag</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Peszticid maradvány</li>
                <li>Nehézfém tartalom</li>
                <li>Hormonok, gyógyszerek</li>
                <li>Tisztító- és fertőtlenítőszer maradvány</li>
                <li>Gépzsír</li>
                <li>Túlsütés során keletkező vegyi anyagok</li>
                <li>Színezékek, adalékanyagok</li>
                <li>Egyéb vegyi szennyeződés</li>
                <li>Mikroorganizmusok által termelt toxinok</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Rovarok</li>
                <li>Rágcsálók</li>
                <li>Paraziták</li>
                <li>
                  Mikroorganizmusok és toxinjaik
                  <ul>
                    <li>Mikroorganizmusok jelenléte</li>
                    <li>Mikroorganizmusokkal fertőződés</li>
                    <li>Mikroorganizmusok szaporodása</li>
                    <li>Mikroorganizmusok túlélése</li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>
        </table>
        <h3 style="margin-top: 2rem">
          Előállítása során használt tartósítási csíracsökkentési eljárások:
        </h3>
        <ul>
          <li>Alapanyag hűtve tartása</li>
          <li>Termék főzése, sütése</li>
          <li>Melegen tartás</li>
          <li>Újra hőkezelés</li>
        </ul>
        <h3 style="margin-left: 1rem">2.5. Jogszabályok</h3>
        <p>2000.évi törvény a kémiai biztonságról</p>
        <p>
          2008. évi XLVI. törvény az élelmiszerláncról és hatósági felügyeletéről
        </p>
        <p>2012. évi CLXXXV. törvény a hulladékról</p>
        <p>
          3/2010. (VII. 5.) VM rendelet az élelmiszer-előállítással és
          -forgalmazással kapcsolatos adatszolgáltatásról és nyomonkövethetőségről
        </p>
        <p>
          4/1998. (XI. 11.) EüM rendelet az élelmiszerekben előforduló
          mikrobiológiai szennyeződések megengedhető mértékéről
        </p>
        <p>
          28/2017. (V. 30.) FM rendelet az élelmiszer-vállalkozások által
          működtetendő önellenőrzési rendszerre vonatkozó követelményekről
        </p>
        <p>
          36/2014. (XII. 17.) FM rendelet az élelmiszerekkel kapcsolatos
          tájékoztatásról
        </p>
        <p>
          47/2011. (V. 31.) VM rendelet az élelmiszer-vállalkozás működéséhez
          szükséges szakképesítés
        </p>
        <p>
          49/2014. (IV. 29.) VM rendelet az élelmiszerekben előforduló egyes
          szennyezőanyagokra és természetes eredetű ártalmas anyagokra vonatkozó
          határértékekről, valamint az élelmiszerekkel rendeltetésszerűen
          érintkezésbe kerülő egyes anyagokkal, tárgyakkal kapcsolatos
          követelményekről
        </p>
      </div>
      <div class="page">
        <p>
          57/2010. (V. 7.) FVM rendelet az élelmiszerek forgalomba hozatalának,
          valamint előállításának engedélyezéséről, illetve bejelentéséről
        </p>
        <p>
          62/2011. (VI. 30.) VM rendelet a vendéglátó-ipari termékek
          előállításának és forgalomba hozatalának élelmiszerbiztonsági
          feltételeiről
        </p>
        <p>
          66/2010. (V. 12.) FVM rendelet a növényi és állati eredetű
          élelmiszerekben és takarmányokban, illetve azok felületén található
          megengedett növényvédőszer-maradékok határértékéről, valamint ezek
          hatósági ellenőrzéséről
        </p>
        <p>
          68/2007. (VII. 26.) FVM-EüM-SZMM együttes rendelet az
          élelmiszer-előállítás és forgalomba hozatal egyes élelmiszer-higiéniai
          feltételeiről és az élelmiszerek hatósági ellenőrzéséről
        </p>
        <p>82/2012. (VIII. 2.) VM rendelet a gyártmánylapról</p>
        <p>
          152/2009. (XI. 12.) FVM rendelet a Magyar Élelmiszerkönyv kötelező
          előírásairól
        </p>
        <p>
          210/2009. (IX. 29.) Korm. rendelet a kereskedelmi tevékenységek
          végzésének feltételeiről
        </p>
        <p>
          AZ EURÓPAI PARLAMENT ÉS A TANÁCS 178/2002/EK RENDELETE (2002. január
          28.) az élelmiszerjog általános elveiről és követelményeiről, az Európai
          Élelmiszerbiztonsági Hatóság létrehozásáról és az élelmiszerbiztonságra
          vonatkozó eljárások megállapításáról
        </p>
        <p>
          AZ EURÓPAI PARLAMENT ÉS A TANÁCS 852/2004/EK RENDELETE (2004. április
          29.) az élelmiszer-higiéniáról
        </p>
        <p>
          AZ EURÓPAI PARLAMENT ÉS A TANÁCS 1069/2009/EK RENDELETE (2009. október
          21.) a nem emberi fogyasztásra szánt állati melléktermékekről
        </p>
        <p>
          AZ EURÓPAI PARLAMENT ÉS A TANÁCS 1169/2011/EU RENDELETE (2011.10.25.) a
          fogyasztók élelmiszerekkel kapcsolatos tájékoztatásáról
        </p>
        <p>
          AZ EURÓPAI PARLAMENT ÉS A TANÁCS 1924/2006/EK RENDELETE (2006.12.20.) az
          élelmiszerekkel kapcsolatos, tápanyag-összetételre és egészségre
          vonatkozó állításokról
        </p>
        <p>
          ÚTMUTATÓ A VENDÉGLÁTÁS ÉS ÉTKEZTETÉS JÓ HIGIÉNIAI GYAKORLATÁHOZ – Új
          egységes szerkezetbe foglalt változat (2013-as kiadás)
        </p>
        <p>
          2-1/1969 számú MÉ irányelve a Veszélyelemzés, Kritikus Szabályozási
          pontok (HACCP) rendszerének alkalmazásáról
        </p>
      </div>
    </body>
  </html>
  
  
`;

  return html;
};
