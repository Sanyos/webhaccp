const { CompanyCategoryTypes } = require("../enums/enums");
const enums = require("../enums/enums");

exports.html = (data) => {
  let hasEgg = data.haccp_egg.split("###").filter((egg) => {
    enums.ProductPreparatoryEnum[egg] === enums.EggEnum.freshEgg ||
      enums.EggEnum.disinfectedEgg;
  });
  let category = CompanyCategoryTypes[data.haccp_company_category];
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
        width: 14.3in;
        height: 10.3in;
        margin: 0 auto;
        padding: 2.5rem;
        box-sizing: border-box;
      }
  
      .border {
        margin: 0;
        padding: 0.5rem;
        border: 1px solid black;
        width: 220px;
      }
  
      .table-style {
        width: 100%;
        margin: 0 auto;
      }
      .flow-chart-table{
        border: 0;
        margin: 0;
        padding: 0;
        width: 550px;
  
      }
      .flow-chart-table tr {
        padding: 0;
      }
      .flow-chart-table td{
        padding: 0;
        border: none;
      }
    </style>
  </head>
  
  <body>
    <div class="page">
      <div style="text-align: center; margin-top: 10rem">
        <h1 style="color: #31849b" ; font-size: 60px;>WEB HACCP TERV</h1>
        <h2 style="font-size: 30px">${data.haccp_unit_name}</h2>`;
  if (category === CompanyCategoryTypes.CASUALRESTAURANT) {
    html += `
    <h2>MOZGÓBOLT</h2>
    <h2>(GYÁRTÓ SZÁM)</h2>`;
  }
  html += `

        <h2 style="font-size: 30px">Székhely: ${data.haccp_company_location}</h2>`;
  if (category === CompanyCategoryTypes.CASUALRESTAURANT) {
    html += ` <h2 style="font-size: 30px">Báziskonyha: ${data.haccp_company_location}</h2>`;
  }

  html += `
  
        <h2 style="font-size: 30px">
          Felülvizsgálat: ${new Date(
            new Date(data.haccp_date).setFullYear(
              new Date(data.haccp_date).getFullYear() + 1
            )
          )
            .toISOString()
            .split("T")[0]
            .replace(/-/g, ".")}
        </h2>
        <h3 style="margin-top: 7rem">
          Üzemelteti:.....................................................
        </h3>
        <p>${data.haccp_unit_name}</p>
        <p>${data.haccp_company_location}</p>
      </div>
    </div>
    <div class="page">
      <h1 style="text-align: center">Tartalomjegyzék</h1>
      <h3 style="margin-top: 1rem">
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
        4
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
        24
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
        </tr>
        <tr>
          <td>1.</td>
          <td>Napi ellenőrzési lap</td>
          <td>1.</td>
          <td>
            ${new Date().toISOString().split("T")[0].replace(/-/g, ".")}
          </td>
        </tr>
        `;
  let counter = 2;
  if (data.haccp_require_keeping_warm) {
    html +=
      `
        <tr>
          <td>` +
      counter +
      `.</td>
          <td>Ételek hőmérsékletének ellenőrző lapja</td>
          <td>1.</td>
          <td>${new Date().toISOString().split("T")[0].replace(/-/g, ".")}</td>
        </tr>
        `;
    counter++;
  }
  if (data.haccp_require_keeping_warm) {
    html +=
      `
        <tr>
          <td>` +
      counter +
      `.</td>
          <td>Hűtőterek hőmérséklet ellenőrző lapja</td>
          <td>1.</td>
          <td>${new Date().toISOString().split("T")[0].replace(/-/g, ".")}</td>
        </tr>
        `;
    counter++;
  }
  if (data.haccp_require_keeping_cold) {
    html +=
      `
        <tr>
          <td>` +
      counter +
      `.</td>
          <td>Tálalási napló</td>
          <td>1.</td>
          <td>${new Date().toISOString().split("T")[0].replace(/-/g, ".")}</td>
        </tr>
        `;
    counter++;
  }
  html += `
      </table>
  
      <h2 style="margin-top: 2rem">1. ALKALMAZÁSI TERÜLETT</h2>
      <p>
        A Kézikönyv szerint megalakított HACCP munkacsoport a következő
        vendéglátó-ipari folyamatokat vizsgálta élelmiszerbiztonság
        szempontjából:
        <b>${data.haccp_unit_name}</b> működése.
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
  
      <h2 style="margin-top: 2rem">2. TERMÉKLEÍRÁS</h2>
      <h3 style="margin-left: 1rem">2.1. Termékleírás</h3>
      <table>
        <tr>
          <td>Alapanyagok</td>
          <td>Készételek</td>
        </tr>
        <tr>
          <td>
            `;
  data.haccp_ingredients.split("###").forEach((prep) => {
    html += "<li>" + enums.IngredientsEnum[prep] + "</li>";
  });
  html += `
          </td>
          <td>${data.haccp_supply}</td>
        </tr>
      </table>
    </div>
    <div class="page">
      <h3 style="margin-left: 1rem">2.2. Általános leírás</h3>
      <p>
        A vendégek részére kiszolgált vendéglátó ipari termékeket a beérkezett
        nyersanyagokból az átmeneti tárolás, majd a megfelelő előkészítési
        műveletek után az ételkészítés lépésein keresztül állítjuk elő.
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
      </p>`;
  if (category === CompanyCategoryTypes.CASUALRESTAURANT) {
    html +=
      "<p>Az önkiszolgálás során a cseppfertőzés elkerülése érdekében szalvétát és ételfogó eszközöket használunk, valamint áttetsző műanyag lapokkal védjük a már kitálalt ételeket.</p>";
  }
  html += `
      <h3 style="margin-left: 1rem">
        2.3. A késztermékek minőség-megőrzési ideje
      </h3>`;
  if (category === CompanyCategoryTypes.RESTAURANT) {
    html += `
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
        `;
  } else if (category === CompanyCategoryTypes.CASUALRESTAURANT) {
    html += `
        <p>A melegen fogyasztandó ételeket 63C feletti hőmérsékleten, 3 órán keresztül lehet fogyasztani. 3  órán túl az ételt csak akkor lehet kiszolgálni, ha érzékszervileg megfelelőnek minősíthető. Amennyiben a termék hőmérséklete a melegentartás során 63 fok alá csökkent, akkor újra kell melegíteni az ételt, biztonságos hőkezelést kell alkalmazni. (min 75 fokos maghőmérséklet).</p>
        `;
  }
  html += `
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
    
    </div>
  
    <div class="page">
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
  
    <div class="page">
      <h3 style="margin-left: 1rem; padding-top: 4rem">
        2.6. Forgalmazás módja
      </h3>
      <p>`;
  if (category === CompanyCategoryTypes.RESTAURANT) {
    html += `
          Helyben történő értékesítés`;
    if (data.haccp_delivery) {
      html += "<span> és kiszállítás</span>";
    }
  } else if (category === CompanyCategoryTypes.CASUALRESTAURANT) {
    html += `
      <p>Kiadás előtt a melegen fogyasztott ételeket 63oC fölött, a hidegen fogyasztott ételeket pedig 0-+5oC között tartjuk.</p>
    `;
  }

  html += `<span>. A frissen elkészített késztermékek kiadásáta dolgozók végzik.
        </span>
      </p>
      <h3 style="margin-left: 1rem; margin-top: 1rem">2.7. Összetétel</h3>
      <p>
        A pontos összetételt a szakképzett szakácsok felkészültsége és a
        különböző, vendéglátói körökben elfogadott és magas szakmai szintet
        képviselő szakácskönyvek használata garantálja. Anyaghányad
        nyilvántartást vezetünk, melyet 365 napig megőrizzük. Az étterem
        színvonala és hírneve nem engedheti meg, hogy az étel összetétele és
        mennyisége ne feleljen meg az előírásoknak.
      </p>
      <h3 style="margin-left: 1rem; margin-top: 1rem">
        2.8. Jó vendéglátó gyakorlat és Higiéniai és takarítási utasítás
      </h3>
      <p>
        Az élelmiszer-előállítással kapcsolatban foglalkoztatott személyzet
        munkaköri alkalmasságára vonatkozó követelményeket a „Jó vendéglátó
        gyakorlatban” és a „Higiéniai és takarítási utasításban” határoztuk meg.
        Az oktatásról, képzésről a HACCP Kézikönyv vonatkozó fejezete szerint
        gondoskodunk. A szociális helyiségek takarításáról, a rovar- és
        rágcsálóirtásról, a munkaruhák mosásáról és karbantartásáról, a
        hulladékok és melléktermékek elszállításáról a „Higiéniai és takarítási
        utasításban” előírtak szerint gondoskodunk. A rendszeres szolgáltatást
        végző alvállalkozókkal kötött szerződésekben az élelmiszerbiztonsággal,
        higiéniával kapcsolatos követelményeket is rögzítjük.
      </p>
      <h3 style="margin-left: 1rem; margin-top: 1rem">
        2.9. Az élelmiszerbiztonsági intézkedések igazolása
      </h3>
      <p>
        Termékeink forgalomba hozatala előtt meggyőződünk arról, hogy az
        előállítás folyamatában az előírt és az élelmiszerbiztonságot szolgáló
        intézkedések, ellenőrzések megtörténtek. A kiszolgálást megelőzően, a
        tálalás megkezdésekor a tulajdonos vagy a szakmai vezető érzékszervi
        ellenőrzést végez, ezáltal biztosítható, hogy termékeink csak úgy
        kerülhetnek forgalomba, ha kielégítik a velük szemben támasztott
        valamennyi szakmai és minőségi követelményt.
      </p>
    </div>`;

  if (
    category === CompanyCategoryTypes.RESTAURANT ||
    CompanyCategoryTypes.CASUALRESTAURANT
  ) {
    html += `


    <div class="page">
      <h2 style="padding-top: 1rem">3. FOLYAMATÁBRA</h2>
  
      <table cellspacing="0" cellpadding="0" class="flow-chart-table">
        <tr>
          <td>
            <div class="border">
  
              <small>1. Étlaptervezés</small>
            </div>
            <span style="font-size: 20px; margin-left: 80px;">&#8595;</span>
          </td>
          <td>
  
          </td>
        </tr>
  
        <tr>
          <td>
            <div class="border">
              <small>2. Igényfelmérés</small>
            </div>
  
            <span style="font-size: 20px; margin-left: 80px;">&#8595;</span>
          </td>
          <td></td>
        </tr>
  
        <tr>
          <td>
            <div class="border">
              <small>3. Beszerzés</small>
            </div>
            <span style="font-size: 20px; margin-left: 80px;">&#8595;</span>
          </td>
          <td></td>
        </tr>
  
        <tr>
          <td>
            <small>
              <span class="border">4. Áruátvétel </span><span style="font-size: 20px; margin-left: 20px;">&#x2192;</span>
            </small>
            <br>
            <br>
            <span style="font-size: 20px; margin-left: 50px;">&#8595;</span>
          </td>
          <td>
            <div class="border">
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
              <span class="border">5. Tárolás </span><span style="font-size: 20px; margin-left: 20px;">&#x2192;</span>
            </small>
            <br>
            <br>
            <span style="font-size: 20px; margin-left: 50px;">&#8595;</span>
          </td>
          <td>
            <div class="border">
              <small>
                4.1 Minőségi követelmények rögzítése
              </small>
              <br><small> 5.1 Szakosított tárolás</small>
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
            <small><span class="border">
                6. Előkészítés
              </span><span style="font-size: 20px; margin-left: 20px;">&#x2192;</span></small>
            <br>
            <br>
            <span style="font-size: 20px; margin-left: 50px;">&#8595;</span>
          </td>
          <td>
            <div class="border">
  
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
              <span class="border">
                7. Ételkészítés
              </span><span style="font-size: 20px; margin-left: 20px;">&#x2192;</span></small>
            <br>
            <br>
            <span style="font-size: 20px; margin-left: 50px;">&#8595;</span>
          </td>
          <td>
            <div class="border">
              <small>
                7.1 Meleg ételkészítés
              </small> <br><small>
                7.2 Hideg konyhai termékek
              </small>
            </div>
          </td>
        </tr>
  
        <tr>
          <td>
            <small>
              <span class="border">
                8. Kiszolgálás
              </span><span style="font-size: 20px; margin-left: 20px;">&#x2192;</span>  </small>`;
    if (data.haccp_delivery) {
      html += `   <br>
    <br>
    <span style="font-size: 20px; margin-left: 50px;">&#8595;</span>`;
    }
    html += `   
          </td>
          <td>
            <div class="border">
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
                <span class="border">
                  9. Kiszállítás
                </span>
                <span style="font-size: 20px; margin-left: 20px;">&#x2192;</span> </small>
            </td>
            <td>
              <div class="border">
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
      </table>
    </div>
    
    `;
  }

  html += `
  
    
  
    <div class="page">
      <h2 style="padding-top: 5rem">4. VESZÉLYELEMZÉS</h2>
      <div style="height: 5rem;"></div>
      <table class="table-style">
        <tr>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Művelet</td>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Veszélycsoport: veszély és eredete</td>
          <td colspan="5">Döntési fa</td>
        </tr>
        <tr>
          <td>Q1/Szabályozó intézkedés</td>
          <td>Q2</td>
          <td>Q3</td>
          <td>Q4</td>
          <td>CCP</td>
        </tr>
        <tr>
          <td colspan="9">
            <b> 0.1 Általános veszélyek – Személyi Higiénia </b>
          </td>
        </tr>
        <tr>
          <td>0.1.1</td>
          <td>Egészségügyi könyv, és nyilatkozat</td>
          <td>1.</td>
          <td>
            B: mikrobákkal fertőződés - beteg, illetve egészségügyi könyvvel nem
            rendelkező dolgozó áll munkába
          </td>
          <td>
            Dolgozóink rendelkeznek érvényes egészségügyi könyvvel és
            nyilatkozattal. Évente 1-szer alkalmassági vizsgálaton vesznek
            részt. A beteg dolgozó nem áll munkába. Amennyiben szükséges, az
            újra munkába-állást orvosi vizsgálat előzi meg.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>0.1.2</td>
          <td>Munkaruha</td>
          <td>1.</td>
          <td>
            B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való
            szennyeződés - a dolgozó munkaruhája nem tiszta, nem fertőtlenített,
            állapota nem megfelelő
          </td>
          <td>
            A munkaruha megfelelő állapotáért a dolgozó a felelős, ennek
            ellenőrzése és a megfelelőség betartatása a közvetlen felettes
            feladata. Nem megfelelő munkaruha viselése esetén a dolgozót nem
            állítjuk munkába.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>0.1.3</td>
          <td>Kézmosás</td>
          <td>1.</td>
          <td>
            B: mikrobákkal fertőződés - a különböző munkafázisok között kimaradó
            kézmosás
          </td>
          <td>Higiéniai oktatások.</td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>2.</td>
          <td>
            K: vegyi anyagokkal szennyeződés - a dolgozók kézmosása nem
            megfelelő
          </td>
          <td>Higiéniai oktatások.</td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>3.</td>
          <td>
            F: fizikai anyagokkal szennyeződés - nem elég gyakori kézmosás
            esetén fizikai szennyeződések is maradnak a kézen
          </td>
          <td>Higiéniai oktatások.</td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  
    <div class="page">
    <div style="height: 5rem;"></div>
      <table class="table-style">
        <tr>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Művelet</td>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Veszélycsoport: veszély és eredete</td>
          <td colspan="5">Döntési fa</td>
        </tr>
        <tr>
          <td>Q1/Szabályozó intézkedés</td>
          <td>Q2</td>
          <td>Q3</td>
          <td>Q4</td>
          <td>CCP</td>
        </tr>
        <tr>
          <td colspan="9">
            <b>0.2 Általános veszélyek – Tisztítási, fertőtlenítési
              tevékenység</b>
          </td>
        </tr>
        <tr>
          <td>0.2.1</td>
          <td>Tisztítási, fertőtlenítési tevékenység</td>
          <td>1</td>
          <td>
            B: mikrobák túlélése - nem megfelelő tisztítási, fertőtlenítési
            technológia
          </td>
          <td>
            A mosogatást a szabályzatban leírtaknak megfelelően, a szükséges
            oldattöménység és behatási idő betartásával végezzük. Minden dolgozó
            egy adott területért felelős, „Napi ellenőrzési lapon” dokumentáljuk
            a takarítás megvalósulását. NAPI ELLENŐZÉSI LAP
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>2.</td>
          <td>
            B: mikrobákkal fertőződés - nem megfelelő tisztaságú, illetve nem
            megfelelő eszközök - szakosítatlan eszközhasználat
          </td>
          <td>
            Mosogatásra és takarításra csak a meghatározott beszállítótól
            rendelt eszköz használható, alkalmazni kell az egyszer használatos
            tisztítóeszközöket a különböző területeken csak a színkóddal vagy
            egyéb jól látható módon jelölt eszközök használhatóak.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>3.</td>
          <td>
            K: vegyi anyagokkal szennyeződés (üzemelés során a felületre kerülő
            kémiai szennyeződések visszamaradása, tisztító- fertőtlenítőszer
            maradványok) - elégtelen hatásfokú tisztítás - elégtelen öblítés
          </td>
          <td>
            A zsíroldást és fertőtlenítést követően, alapos öblítéssel
            távolítjuk el a vegyszert az eszközökről. Higiéniai oktatások.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>4.</td>
          <td>
            F: fizikai anyagokkal szennyeződés (üzemelés során a felületre
            kerülő szennyeződések visszamaradása) - elégtelen hatásfokú
            tisztítás
          </td>
          <td>
            A mosogatást a szabályzatban leírtaknak megfelelően, a szükséges
            oldattöménység és behatási idő betartásával végezzük
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>0.2.2</td>
          <td>Vegyszer felhasználás</td>
          <td>1.</td>
          <td>
            B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való
            szennyeződés - a tisztítószerek nem alkalmasak élelmiszeripari
            felhasználásra - nem került bejelentésre a vegyszer használat
          </td>
          <td>
            A főzőkonyha „veszélyes anyag felhasználása” bejelentésre került
            (ÁNTSZ). Ennek igazolása, valamint a felhasználásra kerülő
            (fertőtlenítést is biztosító) tisztítószerek és a kézmosószer
            biztonsági adatlapjai a helyszínen megtalálhatók. Csak belistázott
            beszállítótól vásárolunk tisztítószert.
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  
    <div class="page">
    <div style="height: 5rem;"></div>
      <table class="table-style">
        <tr>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Művelet</td>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Veszélycsoport: veszély és eredete</td>
          <td colspan="5">Döntési fa</td>
        </tr>
        <tr>
          <td>Q1/Szabályozó intézkedés</td>
          <td>Q2</td>
          <td>Q3</td>
          <td>Q4</td>
          <td>CCP</td>
        </tr>
        <tr>
          <td colspan="9">
            <b> 0.3 Általános veszélyek – Vízellátás, karbantartás</b>
          </td>
        </tr>
        <tr>
          <td>0.3.1</td>
          <td>Vízhasználat</td>
          <td>1.</td>
          <td>
            B: mikrobákkal fertőződés - nem megfelelő minőségű víz - nem
            megfelelően szerelt csőhálózat, helytelenül elvégzett javítási
            munkák - csőtörés
          </td>
          <td>
            A szükséges mennyiségű ivóvizet a települési hálózatról biztosítjuk.
            A vízminőséget vezetékbontás, fertőzés, stb. esetén akkreditált
            laboratóriummal vizsgáltatjuk.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>2.</td>
          <td>
            K: kémiai anyagokkal szennyeződés - nem megfelelő minőségű víz - nem
            megfelelően szerelt csőhálózat, helytelenül elvégzett javítási
            munkák - csőtörés
          </td>
          <td>
            A szükséges mennyiségű ivóvizet a települési hálózatról biztosítjuk.
            A vízminőséget vezetékbontás, fertőzés, stb. esetén akkreditált
            laboratóriummal vizsgáltatjuk.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>3.</td>
          <td>
            F: fizikai anyagokkal szennyeződés - nem megfelelő minőségű víz -
            nem megfelelően szerelt csőhálózat, helytelenül elvégzett javítási
            munkák - csőtörés
          </td>
          <td>
            A szükséges mennyiségű ivóvizet a települési hálózatról biztosítjuk.
            A vízminőséget vezetékbontás, fertőzés, stb. esetén akkreditált
            laboratóriummal vizsgáltatjuk.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>0.3.2</td>
          <td>Karbantartás</td>
          <td>1.</td>
          <td>
            B, F: mikrobákkal, fizikai anyagokkal való szennyeződés - az épület,
            az alkalmazásra kerülő eszközök, berendezési tárgyak, illetve a
            szállítójármű állapota nem megfelelő
          </td>
          <td>
            Az alkalmazásra kerülő eszközök, berendezési tárgyak, a
            szállítójármű állapotát a megfelelő kezeléssel óvjuk, a
            karbantartási munkákat rendszeresen, szükség esetén soron kívül,
            elvégezzük.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  
    <div class="page">
    <div style="height: 5rem;"></div>
      <table class="table-style">
        <tr>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Művelet</td>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Veszélycsoport: veszély és eredete</td>
          <td colspan="5">Döntési fa</td>
        </tr>
        <tr>
          <td>Q1/Szabályozó intézkedés</td>
          <td>Q2</td>
          <td>Q3</td>
          <td>Q4</td>
          <td>CCP</td>
        </tr>
        <tr>
          <td colspan="9">
            <b> 0.4 Általános veszélyek – Hulladékkezelés</b>
          </td>
        </tr>
        <tr>
          <td>0.4.1</td>
          <td>Kommunális hulladék</td>
          <td>1.</td>
          <td>
            B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való
            szennyeződés - nincs megfelelő számú és nagyságú hulladékgyűjtő
            kihelyezve a kommunális hulladékok számára - kommunális hulladékok
            elszállítása nem rendszeres, nem dokumentált
          </td>
          <td>
            A keletkező kommunális-hulladék gyűjtésére fedeles, könnyen
            tisztítható fertőtleníthető tárolókat helyezünk ki. A napi
            takarítást-fertőtlenítést követően, a hulladéktárolókat
            szemeteszsákkal béleljük. Az összegyűjtött hulladék elszállítása a
            szerződésben foglaltaknak megfelelően, rendszeresen történik. A
            szállítási szerződést a központban, az elszállítást igazoló
            szállítóleveleket a helyszínen lefűzve őrizzük
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
        <td>0.4.2</td>
        <td>Használt sütőzsiradék</td>
        <td>1.</td>
        <td>
        B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való szennyeződés
        -	a többször újrahevített olajban káros anyagok képződnek
        -	elhasznált sütőzsiradék elszállítása nem rendszeres, nem dokumentált
        -	gyűjtése nem higiénikus        
        </td>
        <td>
        A sütőzsírt nem szabad túlhevíteni, amennyiben 160 fokon füstöl az olaj, azonnal cseréljük. Az összegyűjtött elhasználódott		sütőzsiradék elszállítása          a	szerződésben foglaltaknak megfelelően, az igényeknek			megfelelő rendszerességgel történik.
        , az elszállítást igazoló szállítóleveleket a helyszínen lefűzve őrizzük        
        </td>
        <td>N</td>
        <td>N</td>
        <td></td>
        <td></td>
      </tr>`;

  if (
    category === CompanyCategoryTypes.RESTAURANT ||
    CompanyCategoryTypes.CASUALRESTAURANT
  ) {
    html += `

              <tr>
              <td>0.4.3</td>
              <td>Ételhulladék</td>
              <td>1.</td>
              <td>
                B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való
                szennyeződés - ételhulladék elszállítása nem rendszeres, rágcsálók
                és rovarok jelenhetnek meg - nem dokumentált az elszállítás -
                gyűjtése nem higiénikus
              </td>
              <td>
                Az ételhuladék elszállítását hűtőkamra hiányában naponta elvégzi a
                szerződött szolgáltató. az elszállítást igazoló szállítóleveleket a
                helyszínen lefűzve őrizzük. A keletkező élelmiszer-hulladék
                gyűjtésére fedeles, könnyen tisztítható fertőtleníthető anyagból
                készült edényzetet biztosítunk. Az elszállításig történő tárolás az
                arra kijelölt helyiségben, az elszállító által biztosított és
                tisztított, fertőtlenített, fedeles tárolókban történik
              </td>
              <td>N</td>
              <td>N</td>
              <td></td>
              <td></td>
            </tr>
              
              `;
  }

  html += `
        
        <tr>
          <td colspan="9">
            <b> 0.5 Általános veszélyek – Rovar és rágcsálómentesítés</b>
          </td>
        </tr>
        <tr>
          <td>0.5.1</td>
          <td>Rovar és rágcsálómentesítés</td>
          <td>1.</td>
          <td>
            B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való
            szennyeződés - nem elég gyakori irtás, nem megfelelő folyamat
          </td>
          <td>
            A cégünk szakértő céget bízott meg a rágcsáló és rovarmentesítéssel,
            így tudjuk elérni a megfelelő biztonságot. Az irtás minden
            negyedévben megtörténik, de szezonálisan előfordulhat eseti
            mentesítési munka is.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>2.</td>
          <td>
            K: kémiai anyagokkal szennyeződés - az irtás üzemidőben, illetve az
            élelmiszerek, munkafelületek, gépek védelme nélkül történik
          </td>
          <td>
            A munkát üzemidőn kívül, az élelmiszerek teljes védelme mellett
            végeztetjük. A használt vegyszerre vonatkozó információkat (hatás,
            veszélyesség, ellenszer) a szakember biztosítja.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  
    <div class="page">
    <div style="height: 5rem;"></div>
      <table class="table-style">
        <tr>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Művelet</td>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Veszélycsoport: veszély és eredete</td>
          <td colspan="5">Döntési fa</td>
        </tr>
        <tr>
          <td>Q1/Szabályozó intézkedés</td>
          <td>Q2</td>
          <td>Q3</td>
          <td>Q4</td>
          <td>CCP</td>
        </tr>
        <tr>
          <td colspan="9">
            <b>0.6 Általános veszélyek – Dolgozók oktatása, dokumentumkezelés,
              felelősségi körök</b>
          </td>
        </tr>
        <tr>
          <td>0.6.1</td>
          <td>Dolgozók oktatása</td>
          <td>1.</td>
          <td>
            B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való
            szennyeződés - nem megfelelő technológiai és higiéniai magatartás
          </td>
          <td>
            A dolgozók munkába állásukat megelőzően, majd rendszeresen ismétlődő
            alap higiéniai-, tűz és munkavédelmi oktatásban részesülnek
            (évente). A dolgozók tudását elméleti és gyakorlati vizsga keretein
            belül ellenőrizzük.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>0.6.2</td>
          <td>Dokumentumkezelés</td>
          <td>1.</td>
          <td>
            B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való
            szennyeződés - nyomonkövetés nem valósul meg - teljes árupálya
            kontroll nem valósul meg
          </td>
          <td>
            Minden dokumentum vezetésére a „Napi ellenőzési lap” dokumentumon
            külön személyeket jelölünk ki. Az ellenőrzés az üzemvezető vagy az
            általa kijelölt személy feladat. <b>NAPI ELLENŐZÉSI LAP</b>
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>0.6.3</td>
          <td>Felelősségi körök</td>
          <td>1.</td>
          <td>
            Nem állapítható meg élelmiszerbiztonsági veszély - elmarad a
            dokumentumkezelés
          </td>
          <td>
            Minden dokumentum vezetésére a „Napi ellenőzési lap” dokumentumon
            külön személyeket jelölünk ki. <b>NAPI ELLENŐZÉSI LAP</b>
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="9">
            <b> <i>
                Veszélyek technológiai lépésenként</b>
            </i>
          </td>
        </tr>
        <tr>
        <td colspan="9">
          <b> 
          1. ÉTLAPTERVEZÉS</b>
        
        </td>
      </tr>
        <tr>
          <td></td>
          <td></td>
          <td>1.</td>
          <td>
            B: kórokozó mikrobák szaporodása, toxinok jelenléte - a tervezés nem
            veszi figyelembe az adott főzőkonyha lehetőségeit, korlátait - az
            étlap tervezés nem számol a környezeti körülményekkel
          </td>
          <td>
            Az étlapot az ellátásra kerülő fogyasztók igényeinek, valamint a
            konyha kapacitásának figyelembevételével tervezi meg a vezető
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  
    <div class="page">
    <div style="height: 5rem;"></div>
      <table class="table-style">
        <tr>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Művelet</td>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Veszélycsoport: veszély és eredete</td>
          <td colspan="5">Döntési fa</td>
        </tr>
        <tr>
          <td>Q1/Szabályozó intézkedés</td>
          <td>Q2</td>
          <td>Q3</td>
          <td>Q4</td>
          <td>CCP</td>
        </tr>
        <tr>
          <td colspan="9">
            <b>2. IGÉNYFELMÉRÉS, RENDELÉS FELVÉTEL</b>
          </td>
        </tr>
        <tr>
          <td>2.1</td>
          <td>Adagszám</td>
          <td>1.</td>
          <td>
            B: kórokozó mikrobák szaporodása, toxinok jelenléte
            - a szerződött adagszám nem áll arányban a konyha kapacitásával
  
          </td>
          <td>
            A konyha kapacitásunknak megfelelő adagszámra vonatkozó vendéget látunk el.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="9">
            <b>
              3. BESZERZÉS</b>
  
          </td>
        </tr>
        <tr>
          <td>3.1</td>
          <td>Beszállítói szerződések</td>
          <td>1.</td>
          <td>
            B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való szennyeződés
            -a beszállítók kiválasztása nem kellő körültekintéssel történik, a szolgáltatás nem megbízható, nem egyenletes
  
          </td>
          <td>
            Az alap-, segéd-, nyersanyagok, illetve a vegyszerek beszállítóinak kiválasztása pályáztatás útján történik.
            Minősítésük rendszeres, probléma esetén új beszállító kerül
            kiválasztásra.
  
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3.2</td>
          <td>Rendelés a beszállítóktól</td>
          <td>1.</td>
          <td>
            B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való szennyeződés
            - a rendelés nem lett időben elküldve vagy nem lett összehangolva, emiatt nincs kellő hűtőraktár vagy egyéb
            raktár kapacitás.
          </td>
          <td>
            A konyhavezető folyamatosan figyeli a raktárkészletet és a rendeléseket ennek és az étlapnak a függvényében
            adják le.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="9">
            <b>
              4. ÁRUÁTVÉTEL</b>
          </td>
        </tr>
        <tr>
          <td>4.1</td>
          <td>Minőségi követelmények rögzítése</td>
          <td>1.</td>
          <td>
            B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való szennyeződés
            - a beszállítók kiválasztása nem kellő körültekintéssel történik, a szolgáltatás nem megbízható, nem
            egyenletes minőségűek az alapanyagok, nem megfelelő a szállítási
            körülmény
          </td>
          <td>
            Az alap-, segéd-, nyersanyagok, illetve a vegyszerek beszállítóinak kiválasztása pályáztatás útján történik.
            Minősítésük rendszeres, probléma esetén új beszállító kerül kiválasztásra.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4.2</td>
          <td>Nyomonkövetés</td>
          <td>1.</td>
          <td>
            B, K: mikrobákkal, vegyi anyagokkal való szennyeződés
            - számla, szállítólevél nem érkezik meg a termékkel vagy pontatlan, illetve nem őrzik meg a helyszínen
          </td>
          <td>
            A számlát és szállítólevelet 1 éven keresztül megőrizzük a konyhán, a szállítólevél számát a címkézés során
            feltüntetjük a termékeken. A szállítólevél hiányában nem vesszük
            át a termékeket.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4.3</td>
          <td>Minőségi átvétel</td>
          <td>1.</td>
          <td>
            B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való szennyeződés
            - szállítási körülmények nem garantálják az áru minőségi biztonságát
          </td>
          <td>
            Szúrópróbaszerűen ellenőrizzük a szállítójármű és a szállító személyzet tisztaságát (érzékszervi ellenőrzés),
            valamint az egészségügyi könyv érvényességét.
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  
    <div class="page">
    <div style="height: 5rem;"></div>
      <table class="table-style">
        <tr>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Művelet</td>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Veszélycsoport: veszély és eredete</td>
          <td colspan="5">Döntési fa</td>
        </tr>
        <tr>
          <td>Q1/Szabályozó intézkedés</td>
          <td>Q2</td>
          <td>Q3</td>
          <td>Q4</td>
          <td>CCP</td>
        </tr>
  
        <tr>
          <td></td>
          <td>Érzékszervi ellenőrzés, termékhőmérséklet ellenőrzés</td>
          <td>2.</td>
          <td>
            B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való szennyeződés
            - a csomagolás sérült, indokolatlanul piszkos, az érzékszervi paraméterek (pl. termékhőmérséklet) nem az árura
            jellemzőek, a termék hőmérséklete meghaladja a még elfogadható határértéket
          </td>
          <td>
            Az érzékszervi ellenőrzést szemrevételezéssel, a termék hőmérsékletének ellenőrzését maghőmérő alkalmazásával
            végezzük. Nagyobb eltérés esetén (pl. fagyasztott termék hőmérséklete max.
            -15 Celsius fok lehet) az átvételt megtagadjuk.
  
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
  
        <tr>
          <td></td>
          <td>Minőség-megőrzési idők ellenőrzése</td>
          <td>3.</td>
          <td>
            B, K: mikrobákkal, vegyi anyagokkal való szennyeződés
            - a minőség-megőrzési / fogyaszthatósági idő lejárt, vagy nincs összhangban a tervezett felhasználással –
          </td>
          <td>
            A minőség-megőrzési/fogyaszthatósági idő lejárta esetén egyértelműen visszautasítjuk az árut. Jelezzük a
            problémát az áruforgalom felé. Többszöri hiba esetén a szállítópartnert kizárjuk a szállításból.
  
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4.4</td>
          <td>Mennyiségi átvétel</td>
          <td>1.</td>
          <td>
            - élelmiszer-biztonsági veszély nem azonosítható
          </td>
          <td>
  
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
  
        <tr>
          <td>4.5</td>
          <td>Szakosított átvétel</td>
          <td>1.</td>
          <td>
            B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való szennyeződés
            - a különböző tisztasági fokú áruk átvétele egyidőben történik
  
          </td>
          <td>
            Különböző árucsoportok átvétele időben elkülönítve történik. Az átvételt követően az átvevő eszköz (mérleg)
            fertőtlenítése, tisztítása
            kötelező.
  
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>

        <tr>
        <td></td>
        <td></td>
        <td>2.</td>
        <td>
        K: allergén keresztszennyeződés
        - áruátvétel nem szakosított
        </td>
        <td>
        Diétás alapanyagok átvétele időben elkülönítve történik.
        </td>
        <td>N</td>
        <td>N</td>
        <td></td>
        <td></td>
      </tr>
        <tr>
          <td>4.6</td>
          <td>Csomagoló anyag</td>
          <td>1.</td>
          <td>
            B, F: mikrobákkal, fizikai anyagokkal való szennyeződés
            - nem megfelelő szállítójármű használata
            - szakosítatlan áruszállítás
            - az áru nem megfelelő csomagolása
  
          </td>
          <td>
            Szállításra vonatkozó előírások betartása
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>2.</td>
          <td>
            K: vegyi anyagokkal való szennyeződés - nem engedélyezett anyagból készült csomagolóanyag
          </td>
          <td>
            OÉTI engedély megléte
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4.7</td>
          <td>Tisztítószerek, takarítóeszközök</td>
          <td>3.</td>
          <td>
            K: vegyi anyagokkal való szennyeződés
            - a fertőtlenítőszerek minőség megőrzési ideje nem megfelelő
  
          </td>
          <td>
            Csak a szerződött partnerektől szerezhető be tisztítószer, minden
            termék átvétel során ellenőrizzük, a fertőtlenítőszerek lejárati dátumát.
  
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  
    <div class="page">
    <div style="height: 5rem;"></div>
      <table class="table-style">
        <tr>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Művelet</td>
          <td rowspan="2">Sorszám</td>
          <td rowspan="2">Veszélycsoport: veszély és eredete</td>
          <td colspan="5">Döntési fa</td>
        </tr>
        <tr>
          <td>Q1/Szabályozó intézkedés</td>
          <td>Q2</td>
          <td>Q3</td>
          <td>Q4</td>
          <td>CCP</td>
        </tr>
  
        <tr>
          <td colSpan="9">
            <b>5. Tárolás</b>
          </td>
        </tr>
  
        <tr>
          <td>5.1</td>
          <td>Szakosított tárolás</td>
          <td>1.</td>
          <td>
            B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való szennyeződés
            - nincs megfelelő számú hűtőberendezés
            - nyers és kész különböző tisztasági fokú anyagok egy légtérben történő tárolása
            - szennyezett helyen történik a tárolás
  
          </td>
          <td>
            Megfelelő számú hűtőberendezés alkalmazása, az egyes hűtők feliratozva vannak, csak a megjelölt termékek
            tárolhatók benne. Csak megfelelően tiszta raktárakban történhet a tárolás. A takarítás megtörténtét takarítás
            ellenőrző lapon
            a hűtők állapotát a napi ellenőrzési lapon dokumentáljuk.
  
  
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5.2</td>
          <td>
            Hűtve tárolás
          </td>
          <td>3.</td>
          <td>
            B: mikrobák szaporodása, toxintermelés
            - helytelen raktározási körülmények, hőmérséklet
            - túl hosszú tárolási idő
          </td>
          <td>
            Az egyes termékcsoportoknak megfelelő hőmérsékleteket a Jó vendéglátó gyakorlatban leírtaknak megfelelően
            betartjuk. A hűtőterek hőmérsékletét műszakonként 2-szer ellenőrizzük a hűtőterek hőmérséklet ellenőrző
            lapján.
            <b>HŰTŐTEREK HŐMÉRSÉKLET ELLENŐRZŐ LAPJA</b>
          </td>
          <td>N</td>
          <td>I</td>
          <td>N</td>
          <td>CCP1</td>
        </tr>`;
  if (data.haccp_require_keeping_cold) {
    html += `    <tr>
            <td>5.3</td>
            <td>Fagyasztva tárolás</td>
            <td>1.</td>
            <td>
              B: mikrobák szaporodása, toxintermelés
              - helytelen raktározási körülmények, hőmérséklet
              - túl hosszú tárolási idő
    
            </td>
            <td>
              A hűtőterek hőmérsékletét műszakonként 2-szer ellenőrizzük a hűtőterek hőmérséklet ellenőrző lapján. A saját
              fagyasztású termékeket 1 hónapon keresztül lehet tárolni, ezt a fagyasztott termék nyilvántartási lapon kell
              vezetni.
              <b>HŰTŐTEREK HŐMÉRSÉKLET ELLENŐRZŐ LAPJA</b>
            </td>
            <td>N</td>
            <td>I</td>
            <td>N</td>
            <td>CCPI</td>
          </tr>`;
  }
  html += `  
        <tr>
          <td>5.4</td>
          <td>Szárazáru</td>
          <td>1.</td>
          <td>
            K, F: fizikai, vegyi anyagokkal szennyeződés
            - csomagolás sérülése, nyitottan tárolt, felbontott áru
          </td>
          <td>
            A felbontott termékeket minden
            esetben olyan módon kell visszazárni,hogy megvédje a termék állagát.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>


    <div class="page">
    <div style="height: 5rem;"></div>
    <table class="table-style">
      <tr>
        <td rowspan="2">Sorszám</td>
        <td rowspan="2">Művelet</td>
        <td rowspan="2">Sorszám</td>
        <td rowspan="2">Veszélycsoport: veszély és eredete</td>
        <td colspan="5">Döntési fa</td>
      </tr>
      <tr>
        <td>Q1/Szabályozó intézkedés</td>
        <td>Q2</td>
        <td>Q3</td>
        <td>Q4</td>
        <td>CCP</td>
      </tr>
      <tr>
        <td>5.5</td>
        <td>Minőség megőrzési idők dokumentálása, nyomonkövetés</td>
        <td>1.</td>
        <td>
        B: mikrobák szaporodása, toxintermelés
        -	túl hosszú tárolási idő
        -	hiányzó adatok az azonosításhoz        
        </td>
        <td>
        A minőségmegőrzési időnek minden esetben szerepelni kell a terméken. Bontott termék átcsomagolása esetén saját címkét kell használni, melyen szerepel a minőség megőrzési idő és a szállítólevél száma is a
nyomonkövetés miatt. FIFO-elv.
        </td>
        <td>N</td>
        <td>N</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>5.6</td>
        <td>Csomagoló anyag</td>
        <td>1.</td>
        <td>
        F: fizikai anyagokkal szennyeződés
        - nem elzárt helyen történik a tárolás
        </td>
        <td>
        A csomagoló anyagokat elzárt helyen tároljuk,	nem	érintkezhetnek,
        szennyeződhetnek más termékkel.
        </td>
        <td>N</td>
        <td>N</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>5.7</td>
        <td>Tisztítószerek, takarítóeszközök</td>
        <td>1.</td>
        <td>
        K: szennyezettség, szennyeződés
        - tisztítószerek túltárolása        
        </td>
        <td>
        A tisztítószerek tárolása zárt szekrényekben történik. FIFO-elv alkalmazása. Lejárt tisztítószert veszélyes hulladékként kezeljük és
        elszállítjuk.        
        </td>
        <td>N</td>
        <td>N</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
      <td></td>
      <td></td>
      <td>2.</td>
      <td>
      B: mikrobiológia szennyezettség, szennyeződés
- takarítóeszközök szakosított tárolása nem valósul meg
- takarítóeszközök szennyezett eltétele, nem megfelelő állapota
      </td>
      <td>
      A takarítóeszközöket szakosítottan, abban a helyiségben kell tárolni, melynek takarítására használjuk. Az eszközöket meg kell jelölni. Az eszközöket takarítás végén fertőtleníteni kell, szennyezett, rossz állapotú takarítóeszköz használata
tilos.        
      </td>
      <td>N</td>
      <td>N</td>
      <td></td>
      <td></td>
    </tr>
      <tr>
        <td colspan="9">
          <b>
            4. Előkészítés</b>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>Csomagoló anyagok bontása</td>
        <td>1.</td>
        <td>
        B, K, F: mikrobiológiai, kémiai, fizikai anyagokkal szennyeződés
        - a csomagolóanyag külső szennyeződése esetén, ha a bontás előtt elmarad a csomagolóanyag megfelelő tisztítása
        </td>
        <td>
        Csomagoló anyagok bontása csak a raktárban történhet, figyelünk a szennyeződés visszamaradásra. A teljesen fel nem használt, bontott csomagolásokat, a termék védelme érdekében gondosan visszazárjuk
        (visszatekerés, begumizás, csipesz alkalmazása).        
        </td>
        <td>N</td>
        <td>N</td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>

  <div class="page">
  <div style="height: 5rem;"></div>
  <table class="table-style">
    <tr>
      <td rowspan="2">Sorszám</td>
      <td rowspan="2">Művelet</td>
      <td rowspan="2">Sorszám</td>
      <td rowspan="2">Veszélycsoport: veszély és eredete</td>
      <td colspan="5">Döntési fa</td>
    </tr>
    <tr>
      <td>Q1/Szabályozó intézkedés</td>
      <td>Q2</td>
      <td>Q3</td>
      <td>Q4</td>
      <td>CCP</td>
    </tr>
   
    <tr>
      <td>6.2</td>
      <td>Kimérés</td>
      <td>1.</td>
      <td>
      B: mikrobák szaporodása, toxintermelés 
      - a hűtést igénylő termékek elhúzódó kimérése esetén   
      </td>
      <td>
      A hűtést igénylő termékek kimérését a lehető leggyorsabban végezzük.
      Ügyelünk rá, hogy az előkészítés során a hűtést igénylő termékek
maximum 1 órát tartózkodjanak szobahőmérsékleten a hőkezelés előtt.
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
   
    <tr>
      <td></td>
      <td></td>
      <td>2.</td>
      <td>
      K: hibás összetétel (diéta)
      -	mérleghiba
      -	dolgozó hibája
      
      </td>
      <td>
      Anyagkiszabat, kalkuláció szerinti kimérés
      </td>
      <td>N</td>
      <td>N</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>3.</td>
      <td>
      K: vegyi anyagok bejutása a határértéken felüli mértékben
- egészségre nem közömbös, azaz adagolási határértékekkel rendelkező anyagok helytelen kimérése következtében     
      </td>
      <td>
      Anyagkiszabat, kalkuláció szerinti kimérés     
      </td>
      <td>N</td>
      <td>N</td>
      <td></td>
      <td></td>
    </tr>`;

  if (data.haccp_require_keeping_cold) {
    html += `
        <tr>
        <td>6.3</td>
        <td>
        Fagyasztott termék felengedése
        </td>
        <td>1.</td>
        <td>
        B: mikrobák szaporodása, toxintermelés
        - nem megfelelő módon, hőmérsékleten, vagy túl hosszú ideig történő felengedés        
        </td>
        <td>
        A termékek felengedtetése hűtőtérben 0-5 Celsius fok között történhet. Teljes felületén becsomagolt terméket, mely nem haladja meg a 2 kg-ot folyóvízzel, vagy 20 Celsius fok alatti
        álló vízben lehet olvasztani. Az utóbbi esetben fél óránként cseréljük a vizet.           
        </td>
        <td>N</td>
        <td>N</td>
        <td></td>
        <td></td>
      </tr>
        `;
  }
  if (hasEgg.length !== 0) {
    html += `
  <tr>
    <td>6.4</td>
    <td>Tojás fertőtlenítése, törése</td>
    <td>1.</td>
    <td>
    B: mikrobák szaporodása
    - az előkészítési folyamat elhúzódása    
    </td>
    <td>
    A	feltört	tojásokat	azonnal felhasználjuk, vagy hűtőben tároljuk
    maximum 3 órán keresztül.   
    </td>
    <td>N</td>
    <td>N</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td>2.</td>
  <td>
  F: fizikai anyagokkal szennyeződés (tojáshéj)
-	nem megfelelő törési eljárás
-	nem megfelelő tisztítási eljárás
  </td>
  <td>
  A	tojás	előkészítése	a zöldség-előkészítőben történik elkülönített asztalon és megjelölt eszközökkel. A cégünk ózonnal kezelt fertőtlenített tojást használ. A fertőtlenítés ezért csak abban az esetben szükséges, amennyiben törött tojást tartalmaz a tálca, ebben az esetben az előkészítőben kihelyezett tojásfertőtlenítési utasítás alapján klórtablettás oldattal történik a
  fertőtlenítés.  
  </td>
  <td>N</td>
  <td>N</td>
  <td></td>
  <td></td>
</tr>
    `;
  }
  html += `
  </table>
</div>

  <div class="page">
  <div style="height: 5rem;"></div>
<table class="table-style">
  <tr>
    <td rowspan="2">Sorszám</td>
    <td rowspan="2">Művelet</td>
    <td rowspan="2">Sorszám</td>
    <td rowspan="2">Veszélycsoport: veszély és eredete</td>
    <td colspan="5">Döntési fa</td>
  </tr>
  <tr>
    <td>Q1/Szabályozó intézkedés</td>
    <td>Q2</td>
    <td>Q3</td>
    <td>Q4</td>
    <td>CCP</td>
  </tr>`;

  data.haccp_preparatory.split("###").forEach((prep) => {
    console.log("PREP", prep);
    if (
      enums.ProductPreparatoryEnum[prep] ===
      enums.ProductPreparatoryEnum.vegetable
    ) {
      html += `
        <tr>
        <td>6.5</td>
        <td>Friss és mirelit zöldségek, gyümölcsök előkészítése</td>
        <td>1.</td>
        <td>
        B, K, F: mikrobiológiai, kémiai, fizikai szennyeződések visszamaradása (penészes, roncsolt darabok, külső szennyeződések, stb.)
        - nem megfelelő válogatás, mechanikai tisztítás, mosás
        </td>
        <td>
        A zöldségelőkészítés kizárólag a zöldségelőkészítőben történhet.	 Földes áru és tisztított áru egy időben nem tartózkodhat az előkészítőben. Csak a megfelelően jelölt eszközök használhatóak a tisztításra, mosásra. A konyhakészen az üzembe kerülő zöldségeket is alapos átmosást
        követően használjuk fel.
        </td>
        <td>N</td>
        <td>N</td>
        <td></td>
        <td></td>
      </tr>
        `;
    }
    if (
      enums.ProductPreparatoryEnum[prep] === enums.ProductPreparatoryEnum.meat
    ) {
      html += `
        <tr>
        <td>6.6</td>
        <td>Húselőkészítés</td>
        <td>1.</td>
        <td>
        B: mikrobák szaporodása, toxintermelés, keresztszennyezés
        - egy időben történik a baromfi és a tőkehús előkészítése
        </td>
        <td>
        Baromfi és tőkehús egyidejű előkészítése tilos!
        A különböző típusú húsok előkészítése között fertőtlenítő takarítást végzünk.
        A szakosítás szabályai a munkaruha és eszközhasználatra is kötelezők. Csak színkóddal jelölt kést és
        vágódeszkát használunk.
        </td>
        <td>N</td>
        <td>N</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
      <td></td>
      <td></td>
      <td>2.</td>
      <td>
      B, K, F: mikrobiológiai, kémiai, fizikai szennyeződések visszamaradása
- nem megfelelő a mechanikai tisztítás, mosás

      </td>
      <td>
      A húsok mosását, tisztítását a jelölt eszközökkel végezzük. Tilos meleg vízben húst tisztítani.
      </td>
      <td>N</td>
      <td>N</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td>3.</td>
    <td>
    B: mikrobiológiai szennyeződések a túltárolás miatt
    - az előkészített termék nincs ellátva jelöléssel
    
    </td>
    <td>
    Az előkészített árura átvisszük az eredeti jelölést, illetve az azonosítást biztosító felirattal (kóddal) látjuk el (megnevezés,	mennyiség, előkészítési idő, számlaszám, ill. az eredeti jelölés).
    </td>
    <td>N</td>
    <td>N</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
  <td></td>
  <td></td>
  <td>4.</td>
  <td>
  B: mikrobák szaporodása, toxintermelés
  - nem megfelelő darálás
  
  </td>
  <td>
  Darált hús a felhasználás napján lehet darálni, kiemelt kockázatú termékként
kezeljük.
  </td>
  <td>N</td>
  <td>N</td>
  <td></td>
  <td></td>
</tr>
<tr>
<td>6.7</td>
<td>Fagyasztás</td>
<td>1.</td>
<td>
B, K, F: mikrobiológiai, kémiai, fizikai szennyeződések visszamaradása
-	nem megfelelően előkészített termék
-	hiányzó jelölésből eredő túltárolás

</td>
<td>
A termékeket nem lehet eredeti csomagolásban fagyasztani. Az eredeti címkét el kell távolítani és új címkével kell ellátni a terméket.  Ezen
feltüntetjük a termék nevét, fagyasztás dátumát, szállítólevél számát, minőség-megőrzési időt. Fagyasztott termék nyílvántartási lapon dokumentáljuk a fagyasztott termékeket. max 1,5kg-os csomagban konyhakész termékeket fagyasztunk.
Darált húst fagyasztani tilos!
</td>
<td>N</td>
<td>N</td>
<td></td>
<td></td>
</tr>
        `;
    }
  });

  html += `

  <tr>
<td>6.8</td>
<td>Tisztítás, mosogatás</td>
<td>1.</td>
<td>
B: mikrobák szaporodása, toxintermelés
- nem megfelelő tisztítás, mosogatás

</td>
<td>
Az általános veszélyeknél leírtak betartása. Az előkészítő helyiségekből tilos	eszközöket	kivinni,
mosogatásukat helyben kell végezni.

</td>
<td>N</td>
<td>N</td>
<td></td>
<td></td>
</tr>


  </table>
  </div>



  <div class="page">
  <div style="height: 5rem;"></div>
<table class="table-style">
  <tr>
    <td rowspan="2">Sorszám</td>
    <td rowspan="2">Művelet</td>
    <td rowspan="2">Sorszám</td>
    <td rowspan="2">Veszélycsoport: veszély és eredete</td>
    <td colspan="5">Döntési fa</td>
  </tr>
  <tr>
    <td>Q1/Szabályozó intézkedés</td>
    <td>Q2</td>
    <td>Q3</td>
    <td>Q4</td>
    <td>CCP</td>
  </tr>
  <tr>
  <td colspan="9">
    <b> 7. Ételkészítés </b>
  </td>
</tr>
<tr>
<td colspan="9">
   7.1 Meleg Ételkészítés 
</td>
</tr>

<tr>
<td>7.1.1</td>
<td>alapanyagok</td>
<td>1.</td>
<td>
B: mikrobák szaporodása, toxintermelés
- rossz érzékszervi megjelenésű, romlott, lejárt fogyaszthatósági idejű alapanyag kerül felhasználásra –
</td>
<td>
Csak megfelelő érzékszervi tulajdonságú, lejárati időn belüli alapanyagokat használunk fel. Jelöletlen termék nem kerül
felhasználásra.
</td>
<td>N</td>
<td>N</td>
<td></td>
<td></td>
</tr>

<tr>
<td>7.1.2</td>
<td>összeállítás</td>
<td>2.</td>
<td>
B, K, F: mikrobiológiai, kémiai, fizikai szennyeződések visszamaradása
- az összeállítás során az élelmiszer személytől, illetve eszköztől szennyeződik

</td>
<td>
Az összeállítási tevékenységet tiszta környezetben,	fertőzés-mentes eszközökkel és megfelelő személyi higiénia mellett, a lehető leggyorsabban végezzük.
</td>
<td>N</td>
<td>N</td>
<td></td>
<td></td>
</tr>`;
  if (category === CompanyCategoryTypes.RESTAURANT) {
    html += `

  <tr>
<td>7.1.3</td>
<td>hőkezelés (párolás, főzés, sütés, stb.)</td>
<td>1.</td>
<td>
B: mikrobák szaporodása, túlélése, toxintermelés
- a hőkezelés nem megfelelő hőmérsékleten és ideig történik, nem terjed ki a termék teljes mennyiségére

</td>
<td>
Az élelmiszer-biztonsági és élvezeti kritériumok teljesítéséhez szükséges hőmennyiséget (hőmérséklet, idő) minden ételkészítésnél biztosítjuk. A tapasztalati úton megállapított hőmérsékleteket és időket alkalmazzuk, ügyelve arra, hogy a hőkezelés a termék teljes egészére kiterjedjen.
Szúrópróbaszerűen, maghőmérővel ellenőrizzük a termék belsejének hőmérsékleti értékeit. A hőkezelést minden esetben ételkészítés ellenőrzőlapon dokumentáljuk.
<b>TÁLALÁSI NAPLÓ</b>

</td>
<td>I</td>
<td></td>
<td></td>
<td>CCP2</td>
</tr>

<tr>
<td></td>
<td></td>
<td>2.</td>
<td>
K: egészségre ártalmas vegyi anyagok keletkezése (rákkeltő anyagok)
-	elhasználódott zsiradék felhasználás
-	zsiradék túlhevülése, túlsütése, leégése

</td>
<td>
Megégett, túlsütött termék nem kerül kiszállításra. A tálalást minden esetben érzékszervi ellenőrzés előzi meg. Az elhasználódott zsiradékot lecseréljük, a higiénikusan gyűjtjük
és tároljuk elszállításig.
</td>
<td>N</td>
<td>N</td>
<td></td>
<td></td>
</tr>
  
  
  `;
  }
  html += `

  </table>
  </div>

  <div class="page">
  <div style="height: 5rem;"></div>
<table class="table-style">
  <tr>
    <td rowspan="2">Sorszám</td>
    <td rowspan="2">Művelet</td>
    <td rowspan="2">Sorszám</td>
    <td rowspan="2">Veszélycsoport: veszély és eredete</td>
    <td colspan="5">Döntési fa</td>
  </tr>
  <tr>
    <td>Q1/Szabályozó intézkedés</td>
    <td>Q2</td>
    <td>Q3</td>
    <td>Q4</td>
    <td>CCP</td>
  </tr>
  <tr>
  <td colspan="9">
    <b> 7.3 Tízórai készítése </b>
  </td>
</tr>

<tr>
<td>7.3.1</td>
<td>alapanyagok</td>
<td>1.</td>
<td>
B: mikrobák szaporodása, toxintermelés
- rossz érzékszervi megjelenésű, romlott, lejárt fogyaszthatósági idejű alapanyag kerül felhasználásra
</td>
<td>
Csak megfelelő érzékszervi tulajdonságú, lejárati időn belüli alapanyagokat használunk fel. Jelöletlen termék nem kerül
felhasználásra. Az alapanyagokat külön helyiségben tároljuk a nem diétás alapanyagoktól.

</td>
<td>N</td>
<td>N</td>
<td></td>
<td></td>
</tr>

<tr>
<td>7.3.2</td>
<td>összeállítás</td>
<td>2.</td>
<td>
B, K, F: mikrobiológiai, kémiai, fizikai szennyeződések visszamaradása
- az összeállítás során az élelmiszer személytől, illetve eszköztől szennyeződik

</td>
<td>
Az összeállítási tevékenységet tiszta környezetben,	fertőzés-mentes eszközökkel és megfelelő személyi higiénia mellett, a lehető leggyorsabban végezzük.
Az összeállítást külön helyiségben végezzük
</td>
<td>N</td>
<td>N</td>
<td></td>
<td></td>
</tr>

<tr>
<td>7.3.3</td>
<td>Hűtve tárolás</td>
<td>1.</td>
<td>
B: mikrobák szaporodása, toxintermelés
-	helytelen raktározási körülmények, hőmérséklet
-	túl hosszú tárolási idő

</td>
<td>
Az elkészült ételeket kiszállításig hűtve tároljuk. A hűtőterek hőmérsékletét műszakonként 2-szer ellenőrizzük a hűtőterek hőmérséklet ellenőrző lapján.
<b>HŰTŐTEREK HŐMÉRSÉKLET ELLENŐRZŐ LAPJA</b>


</td>
<td>N</td>
<td>I</td>
<td>N</td>
<td>CCP1</td>
</tr>

<tr>
  <td colspan="9">
    <b> 8. Kiszolgálás </b>
  </td>
</tr>

<tr>
<td>8.1</td>
<td>Edények előkészítése</td>
<td>1.</td>
<td>
B, K, F: mikrobiológiai, kémiai, fizikai anyagokkal való szennyeződés
- a tálaló eszközök szennyezettek, alkalmatlanok a tálalásra

</td>
<td>
A	zsíroldó-fertőtlenítőszerrel elmosogatott,	lecsöpögtetett edényeket használatba vételükig védjük a szennyeződésektől.
</td>
<td>N</td>
<td>N</td>
<td></td>
<td></td>
</tr>

<tr>
<td>8.2</td>
<td>Kiadagolás</td>
<td>1.</td>
<td>
B, K, F: mikrobiológiai, kémiai, fizikai anyagokkal való szennyeződés, mikroba szaporodás
- a tevékenység elhúzódik, az élelmiszer személytől, illetve eszköztől szennyeződik

</td>
<td>
A lejelentett létszámoknak megfelelően történik a készételek összekészítése, kiadagolása. A tevékenység során fokozottan ügyelünk	a	munka
folyamatosságára, a higiéniai szabályok betartására.
</td>
<td>N</td>
<td>N</td>
<td></td>
<td></td>
</tr>
  </table>
  </div>

  <div class="page">
  <div style="height: 5rem;"></div>
<table class="table-style">
  <tr>
    <td rowspan="2">Sorszám</td>
    <td rowspan="2">Művelet</td>
    <td rowspan="2">Sorszám</td>
    <td rowspan="2">Veszélycsoport: veszély és eredete</td>
    <td colspan="5">Döntési fa</td>
  </tr>
  <tr>
    <td>Q1/Szabályozó intézkedés</td>
    <td>Q2</td>
    <td>Q3</td>
    <td>Q4</td>
    <td>CCP</td>
  </tr>
  


<tr>
<td>8.3</td>
<td>Újrahőkezelés</td>
<td>1.</td>
<td>
B: mikrobák szaporodása, toxintermelés
-	helytelen raktározási körülmények, hőmérséklet

</td>
<td>
Ha a melegentartó	hőmérséklete 63°C alá kerül újrahőkezelést végzünk.
 

<b>TÁLALÁSI NAPLÓ</b>

</td>
<td>N</td>
<td>I</td>
<td>N</td>
<td>CCP3</td>
</tr>

<tr>
<td>8.4</td>
<td>Ételminta eltétel</td>
<td>2.</td>
<td>
Nem állapítható meg élelmiszerbiztonsági veszély
-	nincs eltéve ételminta
nem megfelelő módon van eltéve ételminta

</td>
<td>
Az ételekből 29 adag felett teszünk el egy-egy adagot (100g), melyet 72 órán keresztül a főzőkonyhán, hűtött körülmények (0-5○) között megőrzünk</td>
<td>N</td>
<td>N</td>
<td></td>
<td></td>
</tr>`;
  if (data.haccp_delivery) {
    html += `
    <tr>
    <td colspan="9">
      <b> 9. Kiszállítás </b>
    </td>
  </tr>

  <tr>
<td>9.1</td>
<td>Szállítóedények előkészítése/td>
<td>1.</td>
<td>
B, K, F: mikrobiológiai, kémiai, fizikai anyagokkal való szennyeződés
- a tálaló eszközök szennyezettek, alkalmatlanok a tálalásra

</td>
<td>
A	zsíroldó-fertőtlenítőszerrel elmosogatott,	lecsöpögtetett edényeket használatba vételükig védjük a szennyeződésektől.

</td>
<td>N</td>
<td>N</td>
<td></td>
<td></td>
</tr>

<tr>
<td>9.2</td>
<td>Kimérés</td>
<td>1.</td>
<td>
B, K, F: mikrobiológiai, kémiai, fizikai anyagokkal való szennyeződés, mikroba szaporodás
- a tevékenység elhúzódik, az élelmiszer személytől, illetve eszköztől szennyeződik

</td>
<td>
A lejelentett létszámoknak megfelelően történik a készételek összekészítése, kiadagolása. A tevékenység során fokozottan ügyelünk	a	munka
folyamatosságára, a higiéniai szabályok betartására.

</td>
<td>N</td>
<td>N</td>
<td></td>
<td></td>
</tr>
    `;
  }
  html += `
  </table>
  </div>

  <div class="page">
  <div style="height: 2rem;"></div>
  <h2 style="margin-left: 1rem;">5.SZABÁLYOZÁS</h2>`;

  if (
    category === CompanyCategoryTypes.PUB ||
    CompanyCategoryTypes.CASUALRESTAURANT
  ) {
    html += `
    <img width="100%" src="data:image/png;base64,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iZltXIaaplhWTBNGKSceNFpknGbTw6zmlWXUNMFyYkwZvxuzg/PaLGcs36YplhXTBMuJMWX8bpimWFZME0YpJ16ezhhjjDHGGGOMMcYYY4wxxnjQyBhjjDHGGGOMMcYYY4wxxnjQyBhjjDHGGGOMMcYYY4wxxnTxoJExxpglg41iH3jggc6hhx7aefXVVyvb/vz4xz9Oa7VyD4b/1113XXV1PBBHhTku9Fy33357ZbObX/7yl53vf//7e9mX+P3vf5/S4sADD6xsFpdBwidtcY888IykwQsvvFBdbQ5hc6/8MsYYY4wxpg11+ngbFqPdkLNYYdalD+FyjTbLcoX2Bem8evXqysYYY5YvHjQyxhizZDz88MOdhx56qLNz587KphkMDqxbt67zve99r/P+++93VqxY0fnpT39aXR09v/vd71IcN23alMIcFwwOrV27tvOzn/2ssumkwZNnn32285vf/KayqYeGzFNPPdW5//77O3/6058q28WDfBkkfNL2vvvu63zlK1/pvPfee501a9Z0Tj755Opqc15++eV03LZtW/LLGGOMMcaYNpT08TYsVrshsphhltKH8Ldu3ZraAMYYY5YHHjQyxhizZNDYOOuss6qz5rz11ludm266Kf3/5JNP5gccxsUbb7yRGkeXXHJJZTN6aGzxhcy9995b2eyGwZPLL7+8OusNaUCaHn300ZXNYAw6s/Ib3/hG6/CZlcgg0dlnn53ONYBUQl+m1cFgEY3lI444orJpzzCzSo0xxhhjzPRSp4+3YTHaDTmLFWZd+qB733LLLdXZ8oW21kcffdR5++23KxtjjFm+eNDIGGPMVMHXLLfeeuuCQSINOIwLBqaGaTw2gcbe008/veRfyDAwc9ttt1Vn4+fTTz/tbNy4sTrrdE466aQ0+FSCL9O++OKL6mxvaMQO01hmAOuVV16pzowxxhhjzCwxCn18MdoNOYsV5qS0V4wxxowfDxoZY4yZKhhQiAMDizGrjTDG3TjimYb5QmYUMGDEOuSLubQdA37xuevyk6Uwrr766uqsTN0XSk1g5uSpp55anRljjDHGmFljFPr4YrQbchYrzElorxhjjFkcPGhkBmYUG0QaY0yEjnsGLShb2GSU8xzsGGjADYb/+YavuIkbsbKkmTaHxT2DI0D5xdcp2F933XXJLgc3updjXB5Ny6VhTxwY2MA/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">
    `;
  } else if (category === CompanyCategoryTypes.RESTAURANT) {
    html += `
<img width="100%" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABqQAAAL1CAYAAAChTYV5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAP+lSURBVHhe7L3ry13Vvf69/L33EPVVdUsx+kLqRmmiLaKCgsZGEaXVVCsiKGpUCm09JhUpGjXWbkE8RIkgRU3dVQyl8RDBgFHxTGRvcfNoRNT6Ko3V/gF57s/IvO5875Ex15rreK/D9YGx5lxjjjnOh+84zDEO2DNHyxhjjDHGGGOMMcYYY4wxxpgh8f+qqzHGGGOMMcYYY4wxxhhjjDFDwRNSxhhjjDHGGGOMMcYYY4wxZqh4QsoYY4wxxhhjjDHGGGOMMcYMFU9IGWOMMcYYY4wxxhhjjDHGmKHiCSljjDHGGGOMMcYYY4wxxhgzVDwhZYwxxhhjjDHGGGOMMcYYY4aKJ6SMMcYYY4wxxhhjjDHGGGPMUPGElDHGGGOMMcYYY4wxxhhjjBkqnpAyxhhjjDHGGGOMMcYYY4wxQ8UTUsYYY4wxxhhjjDHGGGOMMWaoeELKGGOMMcYYY4wxxhhjjDHGDBVPSBljjDHGGGOMMcYYY4wxxpih4gkpY4wxxhhjjDHGGGOMMcYYM1Q8IWWMMcYYY4wxxhhjjDHGGGOGiiekjDHGGGOMMcYYY4wxxhhjzFA5YM8c1f3QOOCAA6o7Y4wxxhhjjDHGGGOMMcYYM06MYKrIX0gZY4wxxhhjjDHGGGOMMcaY4eIJKWOMMcYYY4wxxhhjjDHGGDNURr5l3yg++zJmlDh/G1OPy4cxZVw2jDHGGGMWYvnIGDONuG4z486o86i/kDLGGGOMMcYYY4wxxhhjjDFDxRNSxhhjjDHGGGOMMcYYY4wxZqh4QsoYY4wxxhhjjDHGGGOMMcYMFU9IGWOMMcYYY4wxxhhjjDHGmKHiCSljjDHGGGOMMcYYY4wxxhgzVDwhZYwxxhhjjDHGGGOMMcYYY4aKJ6SMMcYYY4wxxhhjjDHGGGPMUPGElDHGGGOMMcYYY4wxxhhjjBkqnpAyxhhjjDHGGGOMMcYYY4wxQ8UTUsYYY4wxxhhjjDHGGGOMMWaoeELKGGOMMcYYY4wxxhhjjDHGDBVPSBljjDHGGGOMMcYYY4wxxpih4gkpY4wxxhhjjDHGGGOMMcYYM1Q8IWWMMcYYY4wxxhhjjDHGGGOGiiekJohjjjmmdeihh7b++c9/tu67777WAQcc0HrxxRerp8PjL3/5S+ucc85JbhozC1x33XWpfOV5/vPPP2+tXbs2lUNjjDHGGPHGG28k+QGZeRLp5H/6A1E24v6kk05K94Ogzn36PfSB2rklv/UT93WynzHGTBO//OUvU1+Wfi1Qx1KHUs8Osv6jTscd+s7Dptc2gDjgPY2xjTN1bdSkyx51DKJdN8aMN56QGgJUnjS8VKDdVKI0JnpHKrJz587WI4880jrssMNaH374YWvFihWtlStXVk+HAxNemzdvbr3yyiuVjjGdIc/neRlFHs/JzYyD0EEZXrVqVevmm2+udPYK688991zr0UcfbX377beVrjHGGGMmhTr5pKRKMksdH330Ueull15KMkIJBr0wI7jXYOA40Mn/8OWXX7aWLl2aZCOF5YEHHkjXfmnifjvoq+C3p59+utLpnpLsZ4wx4wITEaW2CiXqzLTrX9O//dOf/pTGmiaVXtuAV199NV23bduWxtjGmVIb1W/bOc4Mol03xow5e0YAzkjNEnMNxny45xr4SreeaH7Dhg2V7l62b9++Z8WKFdW/PXuWL1/eyM5BgNv4af369ZVO9/Tz7rijNEOZfZCHFS/k7V27dlVPFoL+6tWrk7k83y8GO3bs2DMn/NT6l3LotG6O8oDjzJiFuGwYszggP9POU/ZK8ilyL3I2127BziiviyVLlqRnyBgo7tEbN+r8D+grTrZs2ZJkt0HTzv12EJfEa690kv2MMaODekDKLCT2m+vqPcxoXIl6rcmYEW0h5id1zKZdXLQbXyCeeh1/GGVcdWqjSLte2s5xpt92fRwhnaSMGUdGnUf9hdQQ+fGPf1zdtVr3339/dVeGVZLvv/9+9a/Vuuaaa6q7vXz99detuUav+tdqnX322a2jjz66+jfesML0tddeq/6ZWYE8PCcwp3s+g69bdYT+CSeckFb85Pl+MXj77bdbzz///NivkjLGGGNM9yA/X3311dW//Tn11FMH9uWPWLp0aWvJkiWtAw88sHXkkUem/6hJYtmyZSlu4KuvvmrdeOON6X6xoZ/BDhLIkr1i2c8YMwlQR1166aXp/uSTTy7We5jRONQkjRn1Srs24Iknnmh999131b/9YYyil/GHUY9vzVobNYh23Rgz/nhCashoQJ7PaNvtS8uEVbvOMXv9xgp53bp11d14w2fE559/fvXPzBoSmPnEvF3+37hxY+uGG26o/i0uCKUWfowxxpjZhYkXTb4Mgvfee6+1e/fuNDDIgNJnn32W9CaJ2PdAVhqXQU7SiX5SP1j2M8ZMIz/84Q+ru+mlrg1g/OGWW26p/pVh0qNbFmN8a9baqEG068aY8ccTUkMGIUCTUqzQKMFA/datW1tXXnllpbOPuNd93Ps36utgw3xf/Gg+7icc9XGbQxBZHcIzDgxmRUJTOGOKd3hXh1Zq4oFnZ5xxRjpvhzOo5L6ZHRAmVqxYkfJAXf7XOQSlgR+eIYwo73Cfn7nw2GOPLci/mIl5WO+WFO9F+9rl5zpyO2P5wh/xmTHGGGMmj17k5VwGkPlOsgHPJYuUVC7voyJRP/qRvgCH1qPPFfmpKaXwM9jXlH76G8iCpQPbsRM5TXaW5Dbc0LvoK+7kd2TAKGfWxUsnWdMYYyYB6jzVm3XENqhUVzepe4F+NXWuxqpEp3o3b+Ni3V8a04r1vMDcJZdcku6ZlMrtgbxN5H8ehpwm41u5vTFsMi+FWRHDHfV7GZ/gfdklJXi3XXvMc/yM39GnDZbf0NPYTcmNaE8pPE3a0ibjP8B7ipeSMr1D3CqvRZCdSNeYP/uBfEhaDcq+xYA4IQx5/WIaUm3dN1RwRmqWYF9ZlM5gYh/U0r6vmNE+7KV4Yp929PJ9YXVGj/avjXsKs/d9DvagLz9w5b/e1960vB/3a607Q2rTpk3pfZlds2ZNMsdevBH0pm1P2wjhkzL7Qz4hbshbJcizmMlRfiTfgsoBesrD6PFfe2PLLZ1xgD55Ly93Kidxz+im+Rn70Be4wXslsyA/5n6YFYgXKWPMPlw2jFk8kGkpe7lsC7leU3kZ0IsyL+9KbohnUqEvOyK5zM1/+g/oSVbiXckxJfmC/zyLfsM8MgrPUPJTfnYGetH/gJyDH7BD78t9rp3AfK/xR/glj+X+IjzxjAn5KboT38W8zCgu8Ad+U7gkz8W06iRrGmMGC+VLyuyP2om8ToxQD2JG9SFQx/FfbUpE5rFT9TX36KFiXd2p7gXqSczl+k3qXfRkJ89yqJP1fl7PRxRP0X3B+yjV6xpXk72dKLkH+FvtC0pxqLY2jhvg7xz0sEM0HZ8o+UdhjG0VfkJPcYK9eXuMX+VH7vEPdiiOojvSi+9HsEdhb9KWyj+YBa6YQS+mS562/M9lpXEE/0k1RWGVIpyKwxziI5pFlfJ/JxSfMY+SFqUy3Q+4keflSQP/5/lzkol5ZxSMxJVRB2pcoKCqsKoxKlWQsWKuiyf08kYmr4gBe9Cj8s+hQuEdwXu5nar0Y8VQcocCRwUS7QM1XrFB4n/uzjRB+KRMGfI48ZPnf+WjEuSZmOdAQpgEG/JpbCgh5nOuEmiE8njMk93kZ97L01plpNSg4h/5dxYhXqSMMftw2TBm8UC+oOzlcgb/S3pN5GVALzcrt3IZoyRPIHfkcpHej4NUkltKMpQGDQTuYi52lrnHzvz9kv/5jxyXI9kuD1dOv/EHJf1cT2EqmUPJn8h0mJXsFtNb/op6nWRNY8xgUZlFmf1R3VWqK4XajViXCd7L41bm8zqZui53K/9fV/eW6tim9W43Y1rQ1H1QWPNBfU2C5eZL1LnXpK3VREzergB26n2uvJeHtcl4G25EmUEQttzfpfZYcZT7kXfRj0gv+gfkf9GkLcWuPP4xg/1xPKWprDRu4D+pbiAu4+Qf4Vc+yUGfuG5nplfqylQvkF8GNZGDv/JyMig62U0+zPP+JKM8hhoF3rJvRFxxxRXp+vvf/z5dBZ/4zVUWA9uHHXvmKuHW+++/v9/nr2wLGLdFu/fee1sXXnhh9W8vRxxxRLo+++yz6VrHc889l675NmtzlUq68gmzMeKuu+5K1zz/s40f+TWHT7XJQ3NCSaWzl6OOOipdX3jhhXQ99NBD0/ls+nQcLr744upub/5cuXJl9W/vJ+iXXXZZOlg87hndb37mPfxKuck/Kcd/v/jFL6p/xhhjjBkXtJWPVOm8iX7k5W5Bfueg+sgpp5ySrlG+4ByqW2+9NW0blG+d9+c//7l1+eWXV/9arYceeigdbB8PQ+ceWYj38/5CBDeRgVatWlXp7EOyHfa3Y1jxh4y2bNmy6t/eMNWBjCYZj3M4MHvggQemODj++OOTPhx00EHV3T46yZrGGLMYxC3jctXp7KQ6fvzjH1d3e+HsQOpJ3NI2cd3UvTlN691uxrS65fHHHy+Ov914443pSpvVC03bWragIw7zM+ZpY/CT3u91fIJt0L788svi+Vjdtsc/+9nPqruFxDTR+E7cmhDwfxzn6dSWNh3/gaay0rRAnuAcsTVr1qT/hP/2229P9zmYpRxfdNFFC/LiuPH222+3nn/++YH4UfLoMGhnN+WAcuYzSHvHE1IjQg3Pzp07F3Qcn3zyydYNN9xQ/RsMl156abo+88wz6Qq4edVVV1X/9lbUNIzXXnvtAuHlxBNPrEy0r8xpMHg/votSQ/bFF1+kqzFw1llnJWGM/B8FGATC0tlpn3zySbqSH2P+Ir8Ch4EDDTNgDuGLPEuDUCekXn/99SnfPvXUUwuE0EHkZwlj999/f7oC5S4XTI0xxhgzHqxfv54lgPNqw4YN1ZO99Csv94JknJxDDjmkutsL8hOyVVzsg18YrIuLcRi4QJ6J/kcRLvj666/TtcSrr76argcffHC6Ro477rh0bTepNMz4I54YLAXkLc6S6Abkxd27d6e4YlCQMwy0gDDSraxpjDGjgIH72H5FRds2KDTwr/55P3Vv03oXmoxpdQt9fsYjSn1zxgbyyaNu6Katvfrqq5O+2lhgQkftDXQ7PkF8Mub43nvvtW6++eZKdx/Dao9pC8mLTDbF9//4xz8umHDq1JY2Hf8RTWWlaQJZTAuEiO98EnCSID+Q/v1CXqqbnO2XTnaTdylzpnc8ITVCbrrppnRlEgpo6Gg4Bt2hwT6tulCjgJvxK41vvvkmXbds2VIUYlD5qpEI9rKypPQeqrQiw8wuCH2s5AWtMkCgrPs6kFU9sGvXrmL+kgBCI4bwJyGIfF93KCIHgiLA0YjHgRoYRH6uK3dxlbIxxhhjxpc4GAT9ysvdgozCYJnkCPj+++/T9YILLkhXgWxFRzgudstXJAPPWVVb8juqXWf6u+++q+72p8lAwrDjTwekv/76662NGzdWus2hH8ah3ccee2z6X1oJ242saYwxs0A/dW+TeheajGl1y7///e/qrkz+1U03dNPWKgxaUEKcEMbYrnY7PoFMQJrQXhG/OcNsjzWpqIW5jHMyuRfD06ktbTr+A93IStMGXz9t2rQp3TNZx8RlO0iLOMGHivHOvfTPOeecpIdMyX0nWadkd5zMLemTZpQF6R9zzDH7TaxF9ykbTAxhlvwteRcwQ16C0047LZmRn1XP8I7e5T/6Ar/IDHCPWdzr125QPYkZJu4Jd4wf4wmpkULDQ8XMLCsZkdUev/vd76qng0WTX3RMKWg0LnElCJ9Lw5tvvpmu3cLKAxqUvNAZU4cEL/I/DWe7rwO1Evedd95J13aQt19++eXW9u3bk9DGFgU0CBHyqbbqe/jhhyvdfQwqP0ugRhij3CE45ZNfxhhjjBlf4srifuXlbrntttuSrEJnGJkEdccddyT5pjRxpC2GNKhV+vIc+/hqqh8+/PDD6m5/GFSqY5jxRxwRX9u2betpyxTilgEH4ubTTz9N6X7kkUdWTxfSRNY0xphp5gc/+EG69lP3dlPvQqcxrV559913q7syCms3dNPWEg5NqjAuyJdS+ZdivYxP3HnnnamNuvvuu9Ni3Mgw22Pkkzh5WDfO2a4t7Wb8p1tZadogjNq+74wzzmibR5jYJb6JL2AngCjnco9d5EfShnyzefPmRl8d5XYz2YmeYCKRNGECDX38ye5B5HsmHlG8y8SaJmqi+yyKYmvC8847L9kNSnPAv/oaFH/gnsLGzkjkR+op9IkzygVHhgB2UK9ghi8HmWziin+Y9OrHbiAcfCVIGcYM5aHdjgKziiekRgiNp1YtMnBNgzWsClOTX3RMGRzXJ88CwYHnFIpSBRZnnktQ8QGFuESn983sgQCi/M+n9kzWxAYr8tOf/jRdOQehRCl/YRcNB8IQDULkV7/6VWpg/va3vxWF2EHlZ8qzhDHKHQ27McYYYyaTfuXlbsG9e+65Jw1EHX744WkFOasqkW9KSLaic08nHb+iF6HzT4e4tIqWgaN2qzVZyQylQTbFB/bXMaz44z1kLeKqm8HQCIMcxAur+5sOcLaTNY0xZhqh7qbOo23pt+7ttt7tNKbVLdTh2Me4QKlNjGHtlm7bWi3MZfLmT3/6UzriINLL+ARxStwSRhbjRr8MW56JC3PJI3l4IqW2tJvxn25lpWmEbTOR0cjLTPK2g/jWbkUlkPGY5AMWU3dzpAx2141pk8/Ik3rOtozIqzrfCvWHP/whPXvrrbfSNbr/wQcfpElW9FA6O1XbO7aDfM4Xj6qnsAdee+21dMVtJpjiV5FMsFOGUe3oZDeQjxkLVF1CHGgS0ezDE1JDpLTNhVYtMuPL3rHdkDccH3/8cbqWzrdRwafAU8FQUeToORUYjaSg4WJWuh1qYJjNzj+xpEPcbqVLdMvMFlrJSyVf93k+ULkjoFDZx1UQgDCiT7rzZ+T7vFyRPylvNAB5OdBnt/3k5xyt5EIQK52PZYwxxpjJoR95OaLtZADZRdvPRDuRcbCXKysqOWuDDjLyTR3aZhC5o7QiWdvXMLgVB8TwAzKOzoIqgTymAY98sEpnX0i2q2NQ8ReRHBjJ+0mR0rNSfySmkWgiaxpjzDjS77netBn02x988MH0v9u6N6dpvSuajGk1BX+iNDCf9/nxW6cxijp4t9u2lrAw3kHbzWRK3s73Oj5Bu8152bTbLAKO6TOM9lhgNxNehIeFMnl4OrWlTcd/oBdZaRp5+umnU5yRb4mzdujcUb7aiRCPoMmVXpAcqHpCMJkav/zjKz38cPzxx1c6rdZBBx1U3e3PmWeeWUxTTV61g3hZtmxZ9W9vfmuHvn5iAqnThHQTu9mqj7Kg+IV4ppqpmCvAQwdnpGaFXbt27ZnLqHtWrVqV7iNzFfSeuYK4n/6GDRvm44n7CPagv379+j3bt2/fs2bNmnnz2IV+bt+OHTuKdgnML1++fN7NuQ5n+o99vCvkDs+iG5s2bZp/l7DyPu8SvgjPMLNly5bk77lGsHoyHSgOUKYzyid5fs0hD2KOeOXKe+SlmA+VZ5VfyVuYIZ/pP++il7vHM94VTfIzdig/Y74EZuRf4/JhTB0uG8YsDrEtp63O5YMcniMvqLxK9qCtj/Ky5G5UlHWlzzvIwsgPyO3Ygz4yPvqAv7CX51KYR/ZvJz9LZqkLC7KM/IY/5HaUZdr5H7tR+AO48r+ujxHpN/5A7wncRw87FKfqK0kPJXMo+V0Qt+jjF57FNOFK2PCH/Cu/okc6SdY0xgwWlVmU2Z9Y18U6VFDnqi6jror1Kc9Kfdk4rqT2SPV87As3rXujWepW0bTejahtqGtv6toO7tEjvLilcMQ2SXZiFj3C0gTFIWGN41tN2tqI4r2UjsB7sg83sS9Pk7rwy238If2m7bHSNLZzMe/UpYXSl/jOkVtyBz9hX3SDZ/gFO7jyDmZ4D/cFejzHPSniCndjHIwbhEuqFxTWSIwz5bOSOUAvmgPyUp6epbILdfqg/Bbjn3Srg/TEHuWpaGedO/zP9aVXynOC8Crf48+I/F2iH7tjuhDH45wvI/hXahSMxJVRB2qxUaaOKhYaMnRsRCA3LyXIwLJXFTn2UICpQGIFHckr7xyexYaTxkeNBJTCEgskjbAqEa4xnAIzFEaeS0CZJmLcmM6Qf5p24smLyoPkIfJqzM/k15hHJZgICVPtVKRdfsbf+bu4XQJ3Y0M/y8T4Msbsw2XDmNFTkmtRJfk10kle5v1oHyraiayOjIKSDIRfsDPK1TzL7YmqTrbA/rxvkYN/cB976B9EmbyT/wlrlKny9zvRb/zxP5e5FFdR9sMM/4mPTnbiJ+UH9VHQ433+K13wa8w30T1jzOBRWUOZfZTqNClRZ4Y6rNSXjXUZz5vU853qXiH3ohtN692cujGtUnijHXqOm7HNwS7aJNzled7v7wT+lp/zOMIe2duprcQfmGkH7+NOyZ+l8KNXpw8Ku/Tz9ji+I1XKO8RpDvbgxxJN21LskDnM4Nc87XuVlRab6MdeUNrmEF7ZS/zVmWNMGTNKI+KVOM7jt1R2oU4f5AfJopiVvBvBLfSV/nov2lnnDv9zfenxTo5kb/xEvGAuz7fKayX6tTuO4aPy8Iwj8itqFBzAz5xjQ+WAAw6o7lKoqjtjpgPnb5NzzDHHpAM5Z+2z8RIuH8aUcdkwxuSwzQ9bkZxyyimtr7/+esEWNR9++GHasoitaXLYKoc99/vZzmicob6c69TP1PkQxswqlo+mA9qz0047rbV+/fr57bDMdMPWghxbMuz07lVWWmz6rdt03EQpfnl2yy23pO3kVq1a1Tr44IOL5tjaj63kNm3alP6//vrrabvDSF3Z7VSm2aYOPv3003ReHFv5xe3v2IZR510hzzFWVrKzzh2FMepLb/v27QtkYMLJlo7btm2b346wJEviH473KKVHv3YLwvOb3/wmba24Zs2adP7XuDLq9tdnSBljzAChceJQU09GGWOMMaYp7DPP2RV0sun4MsnEvRTyRTx8Wejci2mdjDLGGGPM+MP5RL/4xS+qf8OhV1lp2iHsTETt3Lmzdffdd1e6+6Pznv70pz8ldd5556X/g4Dz2Ti77IknnkiyaX4WE5NUyKsbN24c6lgZeYBJt3vuuaevs7FK9GI3+ZSJKiYL26XNLOIJKWOM6ZN4KOiTTz7Z8YBvY4wxxpgIndt4iHcOgzAc8AyYk1kOje7lEPZJ48ILL6zujDHGTAp8NWCmF42D8BUIi3LzSYhB042sNGs8/PDDreXLl1f/ypA+TFwxMcTk0cqVK6sn/aPJSL4quuKKK9J9JI6Zie+//766Gwy4Eb+YE+3yDHR6Dt3YzVdUUZ8JuKuvvrr6Z4QnpIwxpg8QeljtwCfKJ510UmvZsmVDF8SMMcYYM10gSzBAwLa/bBPy4osvpgEeVmPSsWUrHFbAwrHHHts6/PDD01Yjf/3rX9MK4WkCeYp4IPwoBliGveraGGNM7zBYS3+Ydol7tlRbvXr1wL9QMOMDsgeyC202ExCjWJTbjaw0TTC5wXaEjz/+eO3kCZMefH20ZMmSSqcMWzxD3QTJxx9/nK7Il9GtOn2hyS7cL8mlmii86qqrUpqRfg8++GDSe+2111LaUXfIHfSiO4Q/XuGoo45K14ceeijlBRZpsZUj3HbbbUmPvHH99dcnvXfffTfpoXDrs88+S/p81ZXTr93UhYwVAv9JO7bsM4E9IwBnpIyZNpy/ZxsOK5wTjOYPZjQLcfkwpozLhjEmh8Od4wHIKA4Czw9Fl5nSYd/TQDywnPBPYxiNMWVU9lFmcqCeVttEv5h63Ew3jH2Q3qT7jh07Kt3h01RWGjeif7tB8RxVu3En4qHTuBRllHGsnDxeUXX627dvT88iuF1X9mMdwfgZZtHDL/zHvjp3cj2U0DtRJpYcGcfoMMf/DRs2FO3keU4vdgP5Ue/mZscZ+Rc1Cg7gZ86xoeKDKc004/xtTD0uH8aUcdkwxhhjjFmI5SNjzDQyLnUbX+2wrR7nGhkTGXUe9ZZ9xhhjjDHGGGOMMcYYY8yUwtZ4pTOejBk1I/9CyhhjzGziVY7G7MOykTHGGGOMMcbMFqMeF+EMI8544kwmzjZ67733qifG7MNfSBljjDHGGGOMMcYYY4wxpif4Imrp0qWtY445pvWTn/yk9Yc//KF6Yszi4gkpY4wxxhhjjDHGGGOMMWZK+I//+I/WkiVL0v2DDz7YWrlyZbo3ZrEZ+ZZ93rKpGY6zyWFW08p51DTB+cSYMi4bs4XT20wzzt+mCc4npgnOJ8aUcdmYbJx+ZtwZdR71F1LGGGOMMcYYY4wxxhhjjDFmqHhCyhhjjDHGGGOMMcYYY4wxxgwVT0gZY4wxxhhjjDHGGGOMMcaYoeIJKWOMMSbjn//8Z+uYY45pnXTSSZVOe0rm0XvssceS/htvvFHpLh744brrrmudc845lc5o+Mtf/pL2I+7HXfyNHffdd1+lMzjq7Mbf+HkYbhpjjDHGGGOMMaOCfi1jE/R9Dz300Mb93EnvF3caB9F4hcLHfbtxIMyvXbu2+md6xRNSxhhjJg6EhJLSxA/CROn5KHnuuedaGzdubO3cubPSWTyIl5deeqn16KOPVjqjY/Pmza2lS5e2nn766UqnexD6Vq1a1br55psrncFRsvvFF19M/n7llVcqHWOMMcYYY4wxZvJgQubDDz9sffbZZ2l84uyzz27dcsstrY8++qgyUaZTv5j3P//88+rf3nEHFuaOC/iv0zjIl19+mcYrGA9QfDzwwAPpWoL4uPjii6t/plc8IWWMMWbi2LNnT2v79u3Vv1Zr9erVSe/UU09N/xEmtmzZku4RLjZt2pSeN+Wwww5Lwtp7771X6ewDIUsTX6Jk/pprrmlddNFF1b/FhXhZt25d9W+wlOIjsnXr1tbzzz+f4qgXEApZwfXwww9XOt3RbiVXnd0rV65s3XDDDdU/Y4wxxhhjjDFm8qDPy4TM5Zdfnv4fffTRaVEm4yMnnHBC0qujXb8Ye0888cTW8uXL0392hznttNNa119/ffo/DhC+TuMgr732WuvJJ59M9//4xz/S2JLGlXKYbHv//fc7xpvpjCekjDHGTCQICStWrEj3l156abpG/v73vyfh6J133mn98pe/rHT756677qruDLSLDyaqHnnkkb4EtrfffrvnCS0Exnvvvbf6tz/92G2MMcYYY4wxxowz9HnhoIMOStdBceCBB7aWLFmSFgDDj370owX/J4Vly5bNT0B99dVXrRtvvDHdl3j11VfT7iqmfzwhZYwxZurgk3R4+eWXBzrZgL3exm0fneIDwa7fyUC+NOtlQovJKPaJ/vbbbyud/enVbmOMMcYYY4wxZtz57rvvqrvBwpdWu3fvnt8lhr4//4e1M8uwiP5lfIBw1eHt+gaHJ6SMMcZMFZqM4sucusko9jnmIEq2awPuOWNK7/JlD/fx4Evutfcwn6JjXtvBlczXEc+0KikRz8HK7cU9HUjKFbfbbU1XAvOEHztKh3Lyyb3cQDGxFPeHbhcfTAYpftHnyv+4n3SMM00eYZbtAwR7VnOgaLd24I+f/OQn6XN6QA+FedHJ7hKyX4r/xhhjjDHGGGPMOKHxBM6KAvXZYx+W/i/9afXb6R/HPnMJ2Sslon6pn5yPL0SF+byvjYpEffmxF/9HSu/H8YgIZr1d3+DwhJQxxpipQMIEMBlVB+aee+65NJnC1zMITlz5vBzhg72QSwdf8rXV+vXr0z3nV7Hnsg6+7HRQZkRnW2HXrl27kj0cLIr7EezesWNH9W8fTAqdf/75aZ9j3uXKOU3dwOTLUUcd1frb3/6WtjW8++67FwhuCIvXXntt2o4PNziD69lnn52PX6iLD2DfaOJj27ZtSZ/JLNx44okn0vM8zjCvlUisOgLS4o477mht3Lgx2cFeztihPanb2aEDW7WlI++j9Cl+J7vrePrpp9OVz/RJM+LAGGOMMcYYY4wZJ+ib09fN++zqwzIuwiTQD3/4w/RlE2MPjIswcUVfuw7s7Wb8AhhzYXxBYxgbNmyonrTm+9X0temXA9v+MVYS0X/coF/fq/8F4yrHHntsuv/000+T/UxIXXLJJQvGPQRHQXi7vgEylxGGDs5ImWY4ziaHWU2rWQ236Y5h55MVK1Yku7ds2bJn+fLle+YEhOpJZ/TunICW/s8JQkkJnmEmgln054S5SmcfTczPCTnJzJywlP5H5J+c3N454S2FNUL4FY52YNec4LjAffyGfny/5BfczPXq4gO96GfCnesBevF9/IVZFP7M7ZUfov/r7IBSOJrazXP+x3iZE5D3bNq0qfrXH/J37j8znTi9zTTj/G2a4HximuB8YkwZl43JZjHTr67Pjn7eP2dcAbNxXKXUL4ZSXxvQK40F5GM1ej/2r9VXR+Xgt2hHU/9D7ifg/9KlS6t/+0AP83l8MRYQxyGmDcIsNQr8hZQxxpiJ58EHH0yfT/OlUJPVMBF91cPXNe32C+4X/PWrX/0qrVDq5zPvgw8+OIU1fkq+cuXKpN+Ek08+ueg+XxUJ4mH58uXVv710cxYXK5o4HFS0e3dOEJz/cgl/YZYv2ED6Qgek5udWleyoo1u7QauvzjvvvL7PxDLGGGOMMcYYYxaTe++9t3XhhRdW//ZyxBFHpCu7owyKTz75JF1//OMfp6s488wz0/XLL79MV6Aff+utt6YvnfKt8/785z+3Lr/88upff/7n6yj6/asKXzyxSww89NBD6So4K8vb9Q0OT0gZY4yZeH7/+9+nz7sRXM4444x0PtA4wdZy+OvXv/5130LMWWedlSaL+JScSRJttccBnP3wr3/9q7rbu+WhDifFfiZhShM1dbBdng4HRZDk0/duYPKOtIz7RKMkWH7xxRfp2gvd2s1EHfHMBBsTf8YYY4wxxhhjzKTChAx9YrbRi33iE088sTKx18wgqevD5wtrr7zyyrQdIGM8Ar+w+Fj98X79/+qrr6ZraVHvcccdl65xUovxpbPPPrv6ZwaBJ6SMMcZMBUyiaFLq3HPP3W9FzWLCeU1w2WWX9S3YsWqIPZbXrFmTJonYI5kJI77iGSRMRHHoKCuEWInEV0jdwDlUHA76+uuvp7OauoE4YtJtz569Zz/lqt0ZYZ3o1m59OcUZU+M20WmMMcYYY4wxxnTDN998k65btmwp9olRg9o9hp1JmGDKz73+7rvv0pUFtxHGOxjf4Gwpjemwy4nOl4J+/S+3S5QWEP/9739vXXzxxdU/Mwg8IWWMMWZq0KQU8AXRuExK/ehHP0p+Y7Ks9Fl4tyCk8QUSQhr2sXqHr3gGBfHGRBeTUUx+dftlEIeA3nbbba1t27alcHf7VdghhxyStiUc9CQbdGs3q6aYUEOIHsSEojHGGGOMMcYYs1gceOCB6frmm2+m67BhTICxi7Vr16b/7Fry6KOPpkW2pYmjG2+8MV31ldTjjz+evpwSg/J/PLYgRwtTwdv1DR5PSBljjJkqEHY2bdqU7sdpUopVPkyWMRnChM0gQHgjfExKYa+27+sHJlyIN+zs5bwk/INwec899/QstLG9Iei8p5x+0rQXuwlHnFAcxkSZMcYYY4wxxhgzbOjfsuCSha2lvu2gx1A0FvLBBx+krfV+/vOfp7OitM1/DuMcmGcSi7ET/Bonrvr1v3Z/yb/aAtmnLfq8Xd9w8ISUMcaYqQOBJ05K3Xfffem+RD+TC91+LcOkBtvFMWFTJyRF/7ByCDiTSRAW6Ysbbrihuusfff6e0ySeiI94KKlo927pmT7bZ09otv6LIJAeeeSR1b+9NE1D/Net3YI8xQouJv5uv/32StcYY4wxxhhjjJks6N8y4cNOK3Fcg7GGzZs3V/8602n8Auhnn3766Wn3FbbT4/nNN99cPS2jM7IZO/nd736X7iP9+J8JLSalWHCaj8vofCl9peXt+obEXEYYOjgjZZrhOJscZjWtZjXcpjuGmU927Ngxb/fq1av37Nq1q3qyF/5H9+cEjj1btmxJz+YElz1Lly5N+uvXr096kWg3ZsWmTZuS3qpVq5JderfOPObQw39i+/bt82Y3bNhQ6e5J9+jxDmawGzdkds2aNckd9JcsWTIfFsLJO8uXL0//65AfeTf6Ue4SH9iFwgx6PMMd7Fd8EQfydyk+FD75ETOKB+mhYjxwnyO7UbhN+vF+XVyW7MAsz/AX9qGgid2KF+I15i29V8pz3SB7UGb6cXqbacb52zTB+cQ0wfnEmDIuG5PNYqUf/VX6s7hLnzwSn6HoE/OffjFjB6KuXyx97KUvXjd+wdiD3seMlMYE2vWp1U8vmWnqf42DoOI4CPqYRWksgSv/Nd4B2DkLKI5Qo2Akrow6UNOA42xymNW0mtVwm+4YVj6J9kYVJyVKz+sUwotAOMqfR3sxi54mJOrM53ooqNMHTaAwSaLJEwQihDkJT7gnwUzvd5ocKflR9uT6gNuyPw8nfolu5fEBmEEPO3gP5GeEuzr/5CCkaiKMazTTxA7ijPeiP0Q7u0vxQprW6fdCtMNMP05vM804f5smOJ+YJjifGFPGZWOyWYz0qxuTiP1e+u8ag0AxuRQnczr1f5uMX0CcOMoV5qObEcYOcKOOTv7vNGaAWS2eReFPxgkE94RlFohxNAoO4GfOsaHC/pBiBM5NBY6zyWFW08p51DTB+cSYMi4bs4XT20wzzt+mCc4npgnOJ8aUcdmYbGY9/Th24Pjjj28ddNBBrY8//rj13XffVU9arb/+9a+tpUuXFo80YFs+jic49dRTKx0zLEadRz0hNaY4ziaHWU0r51HTBOcTY8q4bMwWTm8zzTh/myY4n5gmOJ8YU8ZlY7KZ5fRjoul//ud/WuvWrat0FsIZVNdff/1+E1KcC3X22Wfvdx6VGQ6jzqP/r7oaY4wxxhhjjDHGGGOMMcb0zXXXXVfdlXnuuefSV1DA5BQK0L/rrrvSvZk+/IXUmOI4mxxmNa2cR00TnE+MKeOyMVs4vc004/xtmuB8YprgfGJMGZeNyWaW0++kk05qvf/++60VK1a0zjzzzNYpp5yS9Nm674UXXmhdccUVaWs+OPTQQ1vffvttMsvE1HvvvZf0zfAZdR71F1JmLDjmmGNS5n/jjTcqHWOmBz49Jn+fc845lY4xxswevdSFyAWsqosCMqBPh2Xt2rWVjpk2lPajbjsfe+yxlN9efPHFSqd7lGfZL99MFwyOkEfou/TSb2H7Geot6q8SPI/1JFfMom9GR6ke6DftS0xDH9j13XSiuoj6R18rdCLWbzFP8z55nUFpY7qBvgPtoOuXyYZJJSY4Xn755dbNN9+czoNCXXPNNUlPk1Gwe/fuebOejJpupm5CikYQoYhGkAaUho/Ki0bQldhgoEEgbqXaDQZFc1I5H330UWvnzp2tDRs2+KC6OWh0EdYUX1TOCHRSZrgQxzG/thsEoE6JZlGlembz5s3pkMann3660jHGmPGDuo46LLZBTdudXDYYRF2I22+99Vbr0UcfrXTMKEEeQQaRTI0inRmQRa4e5mQgsuFLL700sWlP3K1atSp1us3oyWW5doo83Q1sH7Nx48bUd+kWyg3vk69Z/Vvim2++SddHHnkkXd99993Wrbfe2jr66KPT/1kkl7fbDWrnbRFqUP2nftK+xLT0gV3fLR6UDdpp5fWS7FUiL1OlevDVV19N123btrUOO+ywdN8OZEjKyLPPPltbv5npJOalTqobWBBA3+GVV16pdIwxU8WeEYAzUsNkTqDbs2TJkj1zAlG6l97q1auT2ytWrEh6k8Co4qxXduzYsWf58uXzfty0aVP1ZH+2b9/e1sycEJ7SbFJRHKD6Zc2aNSkPx7jifunSpcl+4nJcGGS4x41du3alfKnwkdfRK4E++bedGdKUMjOLTHM+MaYfxrlsUF/Jb8hQnYjmaa8GXRfy3jjGUzcofiYhHKSfZLz169cvSDPuafN4hplhgzuTJL8DcdSuHEwjytuocYL8W+cv0ofnveQv2durXI6bdXGF3SjAj+SlaUFpURf2dsQ+Papd24RZ4q1J+9Ut/aZ9ZJB9YPwzrH6i8mOJYdR3SmOUaYbkpKb1hcyj6uQy8iZ5tFskI4zTuMW0oDRDjRukt/xWSnvGtMh33SJ729VDk4LiB2XMODLqPDpVX0jdf//96frwww/PryLjygozVh6ZwXHCCSekTygFX6WxyquEVnzFzzAjX375ZUqzWYdVRXfffXdaBRnjivt33nknrSo3o4FVYHw+vGbNmvSf/W5vv/32dJ+D2R//+Metiy66qLh6jFWZ1EGUGWOMmQRifcVK/rqvRAVfzKiNuvrqqwdeF5588snVnRk2fMHBSumdO3e2duzYkVa8xzTjntXwq1evTm2j2Z+333679fzzzzdaUW6GS7svNkgfnnOWwbhx5ZVXpusnn3zSevDBB9P9rKM+/fLly9N/2ibqohKYZZeUSy+9tNIZTwbZBx7Woe+0Cffee2/1b39c340HkpNou+vKheA5Xz4DZ7TUyWWYoT/cLfSLzezBmB/5qQ7GtBjnMsYYMVUTUgyY0HCWBCIa01ne6mAYKJ5XrVqVPsv++c9/noTWblm3bp2F2Dm0RcdRRx2VrhHiZ1gdDVPPwQcfnPI30PFl0LVbEM7qJmONMWacYdIBnnjiiXQtgeyl7Xra4bpwMrj++uvTRNM999zTdvKQgWEvlClDn6OXiVezOIzbNmP4R/0i6s2VK1eme7MX4kbtzSWXXFK7IHISGFQfmIWhw9jSSgsU2m2/5vpufJDM9qc//Sld6/j973+fFg91gnbemEEybu3tLEA93s3Zh5hhTD1uy007q7MCBwn9QtzqtPBxEPR61mGv75lmTN0ZUu1WhZx++unV3V7I+NpnmoJAgSDDiXxv3VwNc+/8SYKVXaxWI+4ZyOgG4liHuXKNA/55fMdKIO4PPm2VA0JkaWKvtEKc+CLvEg/sp04ejg2N4qikRlX5Tzqs8tq0aVO6v/baa7vq+GKWNFGcc684L9UvgjQs6RtjzCi58cYb05UJ+boFJ5wXwIpHJvDr4F3kq9he1clqeb3JeyW32VceWSCXAahj4/u5bGHqoe3h7IclS5Y0WhV90003pWveZqFiusT2jjQD0lQHn6PPlf91+Uy0azuB51Gu5H9uJ3lPeYf8hjnc5x6zdR33TjJXN3lPbshsVIojyM1FOcIMh3ayWxPyPFiXB+pokofxj/pC5En8GPuwol+/jCs33HDD/OB7kwWRxANxEFUsu4pLlOJbZS+vB3JK9V98p6TPNZ7VyH18J3efPCk/osd/gT5tNJx22mnJDGEA7OlUz2I/eQd70Jc72PGTn/xk/ktY9FDyZ9P6Dr129aYZHHwRyEIR0qwujtEnrU455ZRKp0xed6hc5KAX5Tvyz4cfflg93Qd5Vvks0iSPmuklzz95XdgJ+gKqS513yrCosJ+zDym7//3f/z3fzkwqWjzZ7aRor++ZhlRb9w0VnJEaJlu2bJl3Zy7TzJ8jVQd732svUsyynzdKsO80dkbYY5e9T9mfd5h7w48qzvpF/iP+tBdxaX/XUjiIX9KJeEQR95jTXsXYqTMMOFspBz3sWGzwn1S/KLzEZd2ZW4K8ST5UPsc872rPXuXpPJ8SZ5jrZU/oiMKMmlbIy8rP5DfCStrkcRrNCe2prjpE9VOsO0gDxWFuJ/9xq25f70lB4UMZY/Yx7mVD/lLbXGrbVU/R3vC8ZE7yAW0P5lFqh/I2XDKWzEY5QP4B2jvkh9w93qGO5R25pfcX+ywDhSGGY9xQuhC33UL8kna8X5IvaEOjvdzHNk5u5/kHvSibA2mKytNU+pKL1MaiR14A2mLlHfyE3VH+RGGe/9H+TjJXN3lPZUX6URaQ/SB9yYNyM4+PcUD+R40bdf7K8xo0kd0gT0NBPiZ/KQ/EvBWRfg55BtUuDwP/5X/MKh9HmvpllOC+VK8QDsW7ylgedojmIJazkmyNXYobrrK7U/kF7lX/Ke9EsEvlGLcxR/roP++ilMbRfe4xixsKQx7euvzYqZ5FX/0b7MS8zHAP6PM/gj+b1Hed6s06MCNlmqH8rryQ5xGBPumA2TpzpCWqUz2kdJdZ/iv/oJTOXGM+i3TKo2YhilvUOEL64re8jPM/11P+ifUR9QXvKz8A76GX5wnyMe/LrPKY6q5xBP9JjRLVC3kadMNi+HtQKG/F+ku0q2vavTetKJ1HldYjcWWUgVJhQ9G48b+UgchcmInPuI+NJJVaDpUe7/VTmJugMKDGmeg/NRaoXBjPw4HZKHgD95hDX0hwLaUFaVVK21GjMOdh7AXypfIYijDW5TUa2zxe+C/zXPN0UMc6FwZ7QX5ETSvUH7GRkpBFGkVyc4DZXE+CEoK9kOCV52XSKn9/ElEeQRlj9jHuZUP+UttOXZVDG83gAVBfYa5UF5beVd0X2zj08vaJQQ7MyT9C/orulfTU7i12faowoMYVpUmvccV7vB/bOBEHDQBzMa0lA+bpn+vFPBeR2xpAE6XBLeWTKIfGfCi7ol4TmSt3p5T3FM58wIQwok/4hPQikhHHDfwkNW6U/EU+KdVLxHlMLyjJbqU8wn2Tvg2U0lZ2dsrDTfqw3fhllOC+VK8QTsU7YSI82JeXz2hOKN5jXQSyJ1JKY6jTVzrlfa88bUrvK49FPZkrhQv9SJ2f0ItuKw9EPUAvvk/8YBZK7mEOPdwVpfquU71Zh/yTu2vqIZ2I11gm8rok1ntKwzwvKC81aUvRy+sZKMl3UHIv16vLo2YvxI3UOEK64beY9qQpdUGeH8hLeTqrHokykvJqzHvK57mdkpHyOn5cwG9So0TlOo+vblgMfw8K5LdSnlA+qqPuvWlG6TyqtJ66Lfv4lG4u06QD9djv+JZbbmkde+yx+31CfuCBB6br7bffnq7AHs4XXnhh9W/vvs4RPlXmE+g5QSrt6W0WQpzMFdp0f9llly3YTiDnoYceap199tkL9s3mfq5CSOmmT3X5rH9OqNlvuyDs5kywQey7PU6wB/d7773Xmms0UlywHzjbL/B5e75dyKGHHpriJcbzxRdfXN3tv+888Ue6YK/3hO6Np59+en4rhNLWKII0Ie2ohyI6H+yFF15IV9DZYPkZLX/+859bv/jFL6p/xhizONCWUO/tLGyJzDkE7bZ2o92iLpzrWFY6+1DdhzwAbLuBG1dccUX6L2jrcb8JyHa0cccff3yl02oddNBB1Z3pBPHfCW3nFJW24LnyyitT/P/xj39M/4XklHjOCGm6bNmy6t++c0nbQbv75ZdfFmWYxx9/PG0fnZ8Xq20nS4fys9Wk3O0k13eSuZrmvU8++SRd80PfzzzzzHQlfIKwEKbItMm9oyTmWdVpkW5ktxJN+zZ1NM3DTfqw/fplUiBM27ZtS/d333137VawgjYL8nEBtp5dXW0B2CtKpwcffDBdBXbHdo38RDr84Ac/qHT2nllbx89+9rPqbiFN0rCbepZ8r3qQurqd2ab1Xad60wwe0o3xE7j//vvTVfBfW+3W0bQeYlyBtMWtPK9Q9zSlF1nAjD/aPhR1+OGHp+2gc8hLsd2CI444Il1L5iPUq5DLbuovDONMPTO5lM46pA6j/+IzEheXqZuQAjLNyy+/nM59oVIik3H2SxxAppFF8KQhZV9cCbB1AysIUkxu0UDnE1VmH8Qf8UqcX3XVVQsmkSIM6NPQxM4hShXC119/na7AoZvov/rqq5XO3o5Eu0GwSYeJVeJInSMaVfJeFOgV/hNPPDHlbQb+yPt1gyqc70U8PvXUU/sJmaYZCMnPP/986oRRd9R1fDXgRNrE/E09BJ999lm6wllnnZXsowMgNPnodDLGjAOaPNJgHjAYhvzUTlBXu10abDvuuOPSVZ3Ov//97+l65JFHpmsEd5qAX3bv3p0WYyB/sJAon+Aynfnuu++qu/1Bvt6+fXv1r5UWIqEHtJFM8uSTl8hsyIQR2kHJ05jlDIA6SEsGvViwU9rDHdkIN0sDWbSjgxiE7yRzdZv3vvjii+puIbGsMPFGmAG/EwceZOmdPXvSziBJkV/yyb5uZLcS3fRtcrrJw036sP34ZdKg7NHnB8pm7CvlUF6ZeCHu4kI/JtH7nSghXbCbMhrt5uwOTRAA99QVmMccfi5NmA+CburZbmha33XbVzWDIZ7/qbxIOm3durXtYsdu6iHJdz/84Q/TNVLSq2NYedQsLsiJam937dq134Q/+ZK8RPsa2yjqChHr0RzyKu/Hd1HqU9TJWGZv3GlxGTJE3mZSDnlOvV6CukTnvqFK53ZRR+hsLxT3uQxO+uIGduTQb8Bvep92U/kBe6QvFe0u6edhwq52ZyQC8YK7esZ9HgbTP1M5ISXINO+880762gTyAWQ6enSkEaguueSSVFDyAinUkUaoNO258847UyePAs4kSAmEHb40i53DqEg7IcFJA2FUeFQiCLTTDIIfeZQGnfik0eXgXkH4iWN1rJh8rWs4WHlOA80q9fjVlOke4l2rs6k3SnWGVjgjgJXydxzUQOgnv1MmVD+x6ufyyy9P98YYs9hQRzEQQT0lYZxJql//+tfpvo52Ext5G96u49kN6ijxdTxoMs10Rl+GMGjVjjiY+KMf/ai620tJZqNtKw2C0eGkI/r666+3la9pJzGHzEPa5vz73/+u7sqcfPLJ1V3vNJG5muQ94o6ylMexygqLVCKUNzrl2IVcoDQy/YGMfdFFF1X/9tKN7Faim75NTrd5uFMfth+/TCKERwsi6Svlg2MRTZzo6xHKGGVyEP3Kkt2lr0Vo7xgc49npp5++32DtIGlaz3ZLk/qum76qGRzUb/oyXV+SsBMHeqXJJtFNPRS/5u2XYeVRMx6Q5y699NLq316++eabdN2yZUuxjUKRj+ugDmV8rPQeSmM1mniJCr1Z5eOPP07lDRkdGQJZgY8uBGOGmzdvbrv4SYvc1W7xdXIc80UW4Qs55BLSgt3LcOf888+fb5tJP+omFmNgVwT/MVFJm8L7LDhhHJNFDYAczfgo7TaQh2K/hHfIG7yHfilM5C1kOsnUyjeyh3eYHD3jjDOSPv5HEa44n2D6Z6ompEoCDhUgqyk1KfXkk0+mq2DlzqeffpqeIzCR6fJBEezlGWYGIaxOO8Q5q2WpJKg8qFRySp3xOiRUUQkg2LMiZxpXPBM2VA4Vo+JTcSCIG61WpuKlQckHa6j4tVXfww8/XOmafqDjqzqFjm8+6KoVzkyIN0ErCFU/vfbaa544NMaMFXz5AnQQkJMQ5JvWUx9++GF1tz/aXmMQ0N7R0US+QLZD/it9cWXKaOsUZN5cFm4KcgmdVOQVOm3IbLSZ+SAYHcvbbrstbbfFwEEn+VqLnej40lEs8e6771Z3ZeIWWb3QTubqJu8RXuJH79J5Z7CWCQTcEMQfnV/KHO5aLhgs+dd23cpuOd30beroJg+368MOwi+TBuWKwSXKVt2CSKA+ot2hzBFfzzzzTOt3v/td9bQ/sJu4p+xSJ2A3W5lGKO/UH5R12lHeabdlXz90W882pZv6rklf1QyeG264IV0Z8CW92Ikjz4t1DLstjQwrj5rxgvGsOGmgrWfffPPNdO2WQw45JLV75O12sB0k7UJUcYvIWYP2h3JGWiBDEB9xogY5U3VHHZRX7ODLRtKANo8xX41Ryj5NQlKmtWBEX6LTLtBulBaMaXtk2kZdaTuiP/G/nueQJ+hz6HmTMEV4n7FT/KwxOvyrr++oszrlO9OcqZqQYhC3LnO0+zxZk1bMElNQtJIEKFgIThTWvONi6iFOtae3trqIsCKMCiyu5hN0DvKJGVUiCPZ/+tOf9ltBOi289NJL1d1CYqVaQpNWdLAYrIn86le/Svn6b3/7234DQqZ3qA80UZrH+U9/+tN05RyoEvnKChpqCQRMgOssCWOMGRc0kEE9hTBeWg2dQ70GpYFRyWtaPa4OYl072ATOVEG2YIWt27vuQVbWBCGTI72i7YKQ11DnnXde+i9oAxkMvueeexoPPpGepCsd3/ycUmQg9JF1SnIleY1wxcmefijJXN3kPeQ5OroffPBBWq3LwhYmfOOW4MjCfPmCnNFO/jODo1vZLafbvk2k1zxMXiv1YfvxyySjs14ZOIqDVzlqv/iSibpokP1KyjJpwRcpxHWeZtrtggG9YdJLPduUXtradn1VM3iIbwZxyYuMBVAndGoDu6mHdH7YX//613TthWHmUTPekN6ayCiN33Zqb1mAAXHcNqL3kauod6KKstaskX+pJkrlvY5YVqkLKL+g/lu35yTmYCd1V6TUzjQ9t7FbWEhHHZj3XfCXJtbq8p3pnqnbsi8e8Br5v//7v3TVQC+CeP7ljmZABZUjmZkCVRIa9UUW5rCvVJnOMlRW2tM754ILLkhXGpPYKSIOGejS2RICAQkBCKGFzz+bCr+TBuGraxA4R4C8qLjJZ+eJE87bipDH6ZAxsEQcRuIXhbjZTUNk9sIXZ3mDCeR9dYjzdEJAKm1zoIaTCfB2E+jGGDNsSvIMbQyCOLB6tskAHnUhk1II73nnUucPqEOhg9tL7WBT+YrBv5zvv/++ujOdII11TiLtV6cBgTrotDGRwoAlaZ9/2VNqA5ukMfmJczCxMz+nVF/w5bI9eQJ/lCZQ220pmdNJ5uom72EX23QxMMJWIHwlkS9603Y2OU3LgumeXmS3SLd9m5ymebhJH7Zfv0wqsQ5rB5O8mKG9oV3jvUEhGR55vjQoxkK2nG7qoiaQZ7qtZ5vWLdjdtL7rVG+awVFKP335x1hA3UB0TtN6iPNXKEPo5bJC0/zcqyxgpgPqYepDvraMdQp9ALZYa4f6ICx8z/Mq9Y53R+iOTtt1tkNbd7PICkjXfs5JZNy9yfmp2K8F3TH/sFCin4VcynsHHXRQukaQE0FfcZkBMNcRGjo4IzVM5jJkcoPr9u3bK909e7Zs2bJnrsHcs3z58j27du1KejzH7IYNG+b11q9fn8zNVYzp/5o1a+bN5KCHeZgTZJM5roMC+6TGlRiH7VD85EgfRdoo/TZt2lSZWAju8HzHjh2VznigMKD6QfFJHiSsyodcFVcxbogv4k3xgbm5jnTKt/qPXegpjwue8a7u5X/um6J3UNMIcbZq1api/EWIf+JZ9YGQPvHDlfTCrlgP5WAON6eJac8nxvTKOJcNtbdRlgK1F3l9R51G/cazvM5UXYiSfVz5n8sPaut4RnuHOfRkN+2b2jy1mdEv3KNHPctz/kfZMLatowY/SI07xLHinHhDjhbEn/IHSmmaU0ofoWekM3aT1rR9UQ+FP+ROTDelKeksffIc/9FXvuIZenm7qnxCGEv5QX4h7wncxC7lP97jfclcTfMeSuYwI0V4eU9lhytxgVne5blkEvSIM4VzHMBPUuNEzKvEYSdUX2GeK2lHnJNesV4r5RFQHYbiHeWBKL9jT0xH0TQPq/xgRn4iD+HfmJ+b+GXUyD+oXlC5y8t0DmHEDeKqDuKsnZm6NK7Tj2CG9CihdOB93OaqdKc+wV8gd1THQMw7sfwrvLxDPscO5RP8gR5mZKf0UDKHKsWF8hF2YgdKcYe/eYf/ChdX/EZacY+ZunqzDvkHZTqjtlJ5J0J8kw45ygsopQ80rYdA+U5uKy/ofeVHgV70S9M8avZB3EiNG8qHqE5lHGJeQ6m+IO1jniQf8pxnavMg5j/lc95tVzcvNvIvapSozs7reOIs11e5zOuTOn/LfCzbqv9JF9KJ/JC7A3I/B3NKU+qAOnPKA0pz3ivlvbowleyVXu5XkD2YmVYIn9QoGIkrowoUmY9KKjZmKDIzmS9WYGQmKjWeyRwZS5VfrFDrlDK0CgLXQRHdGUei/5r4k7guQRzScPA+ZtoJHWq0xo2mcdAJ8iThJ++Rl2PeJD/nlSJ6qjBRxGOsZGMZqFOgeEXFMtKJ3J5pgniM4UPFuM0h3UrPSUulkQSkdnFMuk+b4B3j0Bizj3EsGxK0cxWhTqOjIUr1JSrWidSFsU1q197znuQCyWVcqT+5F/JrdIf6VXUubShuoId9/M/b0VGisKMmBcnTSg8p4pj2KuaDErxXZ4b3sQszSkPs5T+DD6V8hV6dPpDW5BP5V/J/RPkjqpgv8meYh04yVzd5j/wve3KFeeVz4l9hkfyg8KvPMy7EMIwDdXUZqhOdZLfcPlSENFK65XVdyV/KY4A7nfIwdmAvz6IdsX4U7fyyGMi/qG6J5U8qlqscyki758QXcVgid0dplOujShDPuF9C7vKu0k35gv/UmdF+qU55R/ET82uv9WwE/+DfaAf2yz2e1dV3nerNOmQeZdoT40oq5nviO45RlfIRKualJvWQIO2Vn5UXMIt9eX2TuwOd8qhZCHElNU5Ef0UV82IJ5TWZp86IbVmsP6SinXn+a1K/LCYxHKOEeMnjDhS/UV91RB6Xdf6WedIRSD/Kr/5DJ/cjpbH1kjmBWyjlpVK/oy5MJXulV6p/8rBOI4RPahQcwM+cY0OF/dHFCJybChxnk8OsppXzqGmC84kxZVw2+oNtHE477bR0oP8knPE5a+nNlitsWcW2dGYhbJnM+RtsB/Lxxx8v2N6I8ziWLl3a83aJi4XrM9OEcconbPNE2fMZ0eOH65PphHRdsWKF5YI+cNmYbBYr/ZA7kcm3b9++4BgPtktky7uoX9e/kt9zf7/44outc889Nx3VwlZ5xxxzTNqyDyU6uS872XoPGXjVqlUL5ODcXER249/XXnutWL/UhalkL7IBW0HmfoA8rNPIqPPo1J0hZYwxxhhjjFk86ND1c6jwtELnlkFwztWiU87ZP3SOpTxQZ8xo+OMf/+gzW40xxpg+ePDBB9OZ6pqg2dnHOYm9nJ/a6dzGbmBCDPuWVGfpxrOp4O9//3uaMJvWyajFwBNSxhhjjDFmImG1rRkP1HGj48iBxO6w7Q+HO7fjueeea91www3VP2PMIFEdxWrps88+Ox2KbowZHRdeeGF1Z4wZFR9++GG6vvTSS+kKyOqfffZZuudrfaF7vtiPE0FM0gByLG0pz7h/9913Wxs3bkzPgH7Zt99+m57R1nLdunVreob7fNFUx3HHHTc/GcTCNr5Ioi+BfcCiLvQjtON8zcR7df2OujBJBsBP2E1YDjvssNYjjzyS9LFXcgPuYubJJ59M/81g8ISUMcYYY4wZa+gQHHrooWl7Be7feuut1urVq1snnHBCZcIsJnTUWDXIVh0/+clPWn/4wx+qJyZCHN19990pH9MBprOOIv7QO/jggxdsZ2KMGQwMVFH+TjrppLSK+sYbb6yeGGOGAWUNmUDtHF9R+KtEY0YLW7AxwQPIn/ynPB5++OHzXzOxRR0yKXIo9/D+++8nM+LTTz9NW94xuURbeuyxx87rx74YZnj+6KOPtu666660E8ADDzyQnn3wwQdt6wBNBjG5hD/4Iunhhx9uXX311en5//zP/xTfv/zyy1OfsES7MCEH4Nd777239eWXX85PaHHdsmVLuuc5cbZt27akLKMPFp8hNaY4ziaHWU0r51HTBOcTY8q4bHQHK9p+9atfpb2+6ajQ8Vi3bl31dPyZ9vRmFeNll12WJg3ZvoMt6cz+kI+feOKJtEqTjjFoVSed9kmdYHV9ZpqwmPlE50ywepsBMy9mGF9cn0wHa9euTQPgwJcGDCwz4Gx6x2VjsnH6LYTJorqzocziMOo86gmpMcVxNjnMalo5j5omOJ8YU8ZlY7ZweptpxvnbNMH5xDTB+cSYMi4bk43TbyGekBo/Rp1HvWWfMcYYY4wxxhhjjDHGGGOGDl9PmtnFE1LGGGOMMcYYY4wxxhhjjBkobOPJ1t6cm8oW1p999lnrtttuq56aWcQTUsYYY4wxxhhjjDHGGGOMGSj/+Z//ma7XXntt2q7v+eef93mOM44npIwxxhhjjDHGGGOMMcb0zRtvvNG67rrr0uRDib/85S/pzJr77rsv/ef+pJNOSvdm+vjlL3/Z2r17dzqb6L333vNklPGElDHGGGOMMcYYY4wxxpj++Oijj1ovvfRS69FHH6109ufLL79sLV26tHXzzTcn8/DAAw+kqzFm+vGElDHGGGOMMcYYY4wxxpi+4OuXdevWVf/KvPbaa60nn3wy3f/jH/9orV69unXqqaem/8aY6ccTUsYYY4wxxhhjjDHGGGOGzrJly+YnoL766qvWjTfemO6NMbPBAXvYwHHIsBeoGIFzU4HjbHKY1bRyHjVNcD4xpozLxmzh9DbTjPO3aYLziWmC84kxZSaxbODnFStWtF5++eVKZ3Zx3WbGnVHnUX8hZYwxxhhjjDHGGGOMMWao/POf/2xdd911rUMPPTQNgp900kmtv/zlL9XTfbzxxhutY445Jpnhyjv33Xdf9XQvJbt4zxgz3nhCyhhjjDHGGGOMMcYYY8zQ+Pzzz1vHHntsuv/0009bu3btSpNIl1xySZpYEpg7//zz0zlTfK3BdevWrdXTvTAZdc4557R++MMftnbv3t3asWNH69tvv22ddtpprY8++qgyZYwZRzwhZYwxxhhjjDHGGGOMMWZo6GumRx55pHXYYYclxf3SpUtbjz766PzXTa+++mrS0zlTXB988MF0L5544on0/s0335z+n3DCCfNm7rnnnnQ1xownnpAyxhhjjDHGGGOMMcYYMxT46umVV15prVq1qtLZx1133ZWuDz30ULoefPDBrffff3/BVn4rV65M+uLee+9tXXjhhdW/vRxxxBHp+uyzz6arMWY88YSUMcYYY4wxxhhjjDHGmKHAV08QJ5XEcccdl66aSDrrrLNay5cvT1v5sS2fvpy65ppr0pXJLbbnu/baa9PZUVInnnhieg6YMcaMJ56QMsYYY4wxxhhjjDHGGDMUvvvuu+puf9huL8JWfC+//HJrzZo16asqzoX65S9/mc6Ngm+++SZdt2zZks6YKqmjjz46mTHGjB+ekDLGGGOMMcYYY4wxxhgzVD788MPqbn84N0owKbVu3brWzp070zZ/fD3F11Jw4IEHpuubb76ZrsaYycITUsYYY4wxxhhjjDHGGGOGwooVK9J169at6RrRl09nn312ukb40omzpJiU4lwptu/ji6olS5akSSq9G4lnTxljxg9PSBljjDHGGGOMMcYYY4wZCkwiMSnF2U/5hJHOl7rxxhvT9b777mt99NFH6V7ccMMN1d1e2MKPr6f4aiqeF8V7mzdvrv4ZY8YRT0gZY4wxxhhjjDHGGGOM6RtNJnH+U5wsWr9+ffqy6brrrktfOgFX/m/YsGHBuU9nnHFG68UXX0z3fAX10EMPtZYvX9469dRTk96dd96Z/vPVFFv9MTF10kknpfduu+22ZMYYM554QsoYY4wxxhhjjDHGGGNMX/B104knnlj923suFHrAV1Lbtm1LW/OddtpprQMOOKD1m9/8pvXUU0+1rrnmmmRGnHzyya3LLrssmTn88MNbhx56aOvll1+unu49Y4r/q1evTv+Z/MIt7McdY8z4csCeOar7oUHlIUbg3FTgOJscZjWtnEdNE5xPjCnjsjFbOL3NNOP8bZrgfGKa4HxiTBmXjcnG6WfGnVHnUX8hZYwxxhhjjDHGGGOMMcYYY4aKJ6SMMcYYY4wxxhhjjDHGGGPMUPGElDHGGGOMMcYYY4wxxhhjjBkqnpAyxhhjjDHGGGOMMcYYY4wxQ+WAPSM4qSoejGWMMcYYY4wxxhhjjDHGGGPGhxFMFXlCyhhjjDHGGGOMMcYYY4wZJqMY7DemW+LczSjyqLfsM8YYY4wxxhhjjDHGGGOMMUNl5F9IeSa4OcSb42symNW0ch41TXA+MaaMy8Zs4fQ204zzt2mC84lpgvOJMWVcNiYbp58ZZ8ifYhT51F9IGWOMMcYYY4wxxhhjjDHGmKHiCSljjDHGGGOMMcYYY4wxxhgzVDwhZYwxxhhjjDHGGGOMMcYYY4aKJ6SMMcYYY4wxxhhjjDHGGGPMUPGElDHGGGOMMcYYY4wxxhhjjBkqnpAyxhhjjDHGGGOMMcYYY4wxQ8UTUsYYY4wxxhhjjDHGGGOMMWaoeELKGGOMMcYYY4wxxhhjjDHGDBVPSBljjDHGGGOMMcYYY4wxxpih4gkpY4wxxhhjjDHGGGOMMcYYM1Q8IWWMMcYYY4wxxhhjjDHGGGOGiiekjDHGGGOMMcYYY4wxxhhjzFDxhJQxxhhjjDHGGGOMMcYYY4wZKp6QMsYYYyaMv/zlL60DDjigdc4551Q6gwc3sP++++6rdPbnuuuuS/5oZ6aON954o3XooYe21q5dW+kYY4wxxhhjjDHGmGnGE1LGGGPMCGGSh0mcpoqJm5zNmze3li5d2nr66acrncHy4osvJjdeeeWVSqcMk1arVq1q3XzzzZWOMcYYY4wxxhhjjDFlPCFljDHGjJjVq1e3du3a1dqzZ09SK1asSPrbt2+f1+N+yZIlST9n69atreeff7512GGHVTqDZeXKla0bbrih+lfmo48+Sl84Pfzww5VOd5x66qmt3bt3t9atW1fpGGOMMcYYY4wxxphpxhNSxhhjzAg5+uijW4888kjHySQmbDCXwxdT6J9wwgmVzuLw9ttvD3VSzBhjjDHGGGOMMcZMF56QMsYYY0bI6aefXt115qyzzmp9/fXX1b+9MFH1y1/+svq3eFxzzTWLPilmjDHGGGOMMcYYYyYHT0gZY4wxI6SbySS+PpL5f/7zn621a9embfI4W4or/9EXn3/++bwZ4B6z1113XfoPbLWHnTqjivvSOVV14EZ8/5hjjmk99thj1dO9yK8yw7lZqAjnT6F33333VTrGGGOMMcYYY4wxZprxhJQxxhgzAVx//fWtRx99tLVt27Z0xhSTQnfffXfriSeeSM+ZBHruueeSmW+//TZN9HDlHComf+DFF19snXjiia0zzjgj2bFz586kTjvttHkz7cCNs88+O73DGVgo7L/22msXTGr913/91wIzy5Yta73yyivV073+2Lx58wI9Y4wxxhhjjDHGGDPdeELKGGOMmQCeffbZ1sknnzy/Td6dd96Zrq+99lq68jXVzTffnMwIzpp6//33k2Iy6bLLLmutXr06bbcHnGeFvcBXVPFrqxKffPJJmmi66KKLknuoP/zhD+nZW2+9la7ApNjll18+b2bdunWt5cuXV09brZUrV7ZuuOGG6p8xxhhjjDHGGGOMmQU8IWWMMcZMAEuXLk1fGgkmetrB5BQw6YR69dVX0xdT5513XtIXPGOSimd8YdWOAw88MH0Rdfzxx1c6rdZBBx1U3e2DLQPvuOOOBRNcV111VXVnjDHGGGOMMcYYY2YRT0gZY4wxE8Bnn32WvjQCttc76aST0n1T2CIPShNI+urqhRdeSNc6MLd79+70hROTTWwLeMUVV1RP93HXXXelr7KOPfbYZAaz+irLGGOMMcYYY4wxxswmnpAyxhhjJoTHHnssfX30+uuvtzZu3FjpNuNf//pXdbc/P/rRj6q7zjC5tHbt2jTZBEw+5XC+1fbt25Nfb7nllmSWc6OMMcYYY4wxxhhjzOziCSljjDFmAuCMp9tuu621bdu2dDaUvmrqlo8//ri62x+272sHk1HnnHNOa+vWra1PP/00bQt45JFHVk8Xcuqpp6avujZt2pT+n3vuuZ6UMsYYY4wxxhhjjJlhPCFljDHGjDls0ffoo4+27rnnnp4noi688MJ0ZUIr5/vvv0/X008/PV3ruP3229NWfHyd1ekMK8HXUnLzwQcfTFdjjDHGGGOMMcYYM3t4QsoYY4wZc7788svqbh98rdSO/PkvfvGL1pIlS1rPPvts6/PPP6909/L3v/+9tXTp0jR51I78PdBkViS3h0m0FStWVP+MMcYYY4wxxhhjzCziCSljjDFmEfnoo49ar7zySrp/5pln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BU9IGWOmGhoCBux1b5pzzTXXJCHADJ977rlnv8GACHn3zDPPTPeYk9nnnnsuTWQZY4wxxpi9IDf9/Oc/b11++eVple+WLVtazz77bOvss89uK291ggGxO+64o7Vx48Zk7+rVq1t333136/rrr0/PGZDavHlz2pnhu+++a91+++2t8847L7kPDGjl7jNg9de//jV9CY+dN910U+uWW25JA1dR3sPNnTt3pq/pcYNBNPo4fFWPOZ7xvtSmTZvSu6tWrWqtXLky3XfyPxCGP/7xj8luzPzud79LcSeI25deeqn16KOPVjrGGGOmAdoS2h7qd8Yndu3aldqmM844o++289xzz219++23yc6rr746tXNx8gj9yBdffJHeW758eXrvkksu2W9RCW0q9mCG9oor/+PkEQt31QYLjQuy+wx2f/PNN+k/bWJsS2k/xY033ljd7e/uYYcdlsIXJ5WQQbCLcD3yyCML7II8vDPJXOQNHZyRMs1xfE0Os5pW4x5u7cka1aj2lDX7GPd8Mg7o/CjtS85e5ey7zJ7E7IOOEtornr2GOYfJTC4uG7OF09tMM87fpgmjyifISLnML1krnt+JrIVebrakv2vX3rOFeBZBFsOszrDQu/iBdwR2oR/flx7n8kSQ+3L3ZVZnTWC33CRsEezDryj5oan/OXMnt4//+XvRL4MGu40x++OyMdmMe/qpnaStENTz6MV2gf9SsW0o6as9Qk/tL89kLraT0kPpfbmPiu034yW52WhvPNsp6kfztKv4DT/S9kW/RPtjWxz149lV/NfYDPr8j20wbuRtpuxByU+LSfTPKPAXUsaYqYWtzubquQUKPWPGDbZFZCUrn32z2oYVNpxdwApYVtayqkZo676jjz669fLLL6d7Y4wxxhizd+UzXyitWLGi0tnLUUcdla4vvPBCunYLXylBvk3y0qVL0xU3I3zZzqrpHL5wEo8//nhaYY1MF9FK7P+fvb9/9arY///x1fd3tW39VB6JVPhEvUhKTSIFg7RjEYXWzooQlNQU4dV12yQOXqSnKwg1EwWR1DoZSrTLFBTaFakdMV5JP6QRnt79tI+V/QF+9232emxnz571fK71vNrPi/sN5rmea9Zcz6xZM/OYi02bNrmrzyuvvOKuuH3rrbe6/+H22szeZtb3+++/PxSGvOFn5RWz420GOTzyyCPpPyGEEO2K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33CAczTzqNr4MfZB3x/suxyDPjvvWGyshPjnHTxuN0h3EyDzX4hWg/fX6oADBw64K+zbty959tln07srUA/yrtNe99vvtOcNX7BlrFy50tl7//33nZ9G0X6HT6fVSxs2bHBj1yyi4DtT9Lw60gm7uMG5YHwvigrsirjhh48xYhYh8J1qFHwfqZupo/+//+//c9/zkydPpk8ro1xZOn78ePovTrt/J1tGIGWV3i+//OKuebnzzjvTf/GKrp7w0iMwoSC3A3xw9u/f7xr4VCq+QrjU3d2dmozDBwC7fASww/++vj5X8fNh8T9oWbz22muuM0nliuI/9ulkNDp/hRBCiHaHgb3t27e7xjmrCsKDWvmmM0HEJuyEKmwD2YomZj0W+W7bivf+/v6oPxJIjS50lhhYRfDy5JNPDrXb80KHlTYz7cHYIcONptbh4T2gzYubTMxCMFX0QGhRPeQrAkby1fot1Guxuuitt95y9Rt9D38wzChS5vPUewy6UNYoG1Dq0PhylKu3O4Fq6qRq84I8ZrIlEyhnz57thE8ho5lHtSxrWfz111/pvzhM9hVCtCavvPKKuyJYoD6hzmPsMzbu+dtvv7krq5Rj7XdU+I2lfYTQie90KLgt2u/w6cR6ie8K3xcmR1Ra15MffC8++ugjt0tBJeRxg7zzv5e01e64446GCqUAoZktuKh3mcizyqydaRmBlC3xPHLkiLvmheV9CCygWulmEXjx/+///s81NtuJWAVPBcEH45FHHkl14nz77bdOEOV/cMgfS6M82+1s3brVdSYN/lulVe4DI4QQQojiMGv7p59+cisL6Bww098GVWljFWmb3Xzzze67z4yvchNZfGybByaiiOaCQQhWmtDRpZ1X6azvdevWuQlOzIpsBmFNrcNDmxfBKZO74L777muKeLY7DCyE0Beh3MZmeQPCDPKd57FVK0XLfLl6j74UAgzqUupahGa2ZVpI3pU+pertdqeaOqlIXsRgDIB6gzLG+07fObZNEYxGHlUbPx9/W8Isyo2/5HFDCNFc0J5hsJ5vGt9PVJaQwbYo/frrr921HNRRtlUfY38hRfsdMTqlXqKNyXeF7wttkErqetpQtFfJ63C1eF6KuEE4batBQADpb29bb/g+MnGM8s0CCFFfWkYgtXDhQlf5UCBpZJbD73xY5WiS/FKYdL8aaIj+61//arsC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JEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb2yQ0qSJEmSJEmSJEm9skNKkiRJkiRJkiRJvbJDSpIkSZIkSZIkSb065tCa4efeHHPMMcNPkiRJkiRJkiRJWiZz6CryF1KSJEmSJEmSJEnqlx1SkiRJkiRJkiRJ6tVcHtknSZIkSZIkSZKkzctfSEmSJEmSJEmSJKlXdkhJkiRJkiRJkiSpV3ZISZIkSZIkSZIkqVd2SEmSJEmSJEmSJKlXdkhJkiRJkiRJkiSpV3ZISZIkSZIkSZIkqVd2SEmSJEmSJEmSJKlXdkhJkiRJkiRJkiSpV3ZISZIkSZIkSZIkqVd2SEmSJEmSJEmSJKlXdkhJkiRJkiRJkiSpV3ZISZIkSZIkSZIkqVd2SEmSJEmSJEmSJKlXdkhJkiRJkiRJkiSpV3ZISZIkSZIkSZIkqVd2SEmSJEmSJEmSJKlXdkhJkiRJkiRJkiSpV3ZISZIkSZIkSZIkqVd2SEmSJEmSJEmSJKlXdkhJkiRJkiRJkiSpR4PB/wfU1A2eiZsbzQAAAABJRU5ErkJggg==">
    `;
  }
  html += `

  </div>
  </body>
  
  </html>
`;

  return html;
};
