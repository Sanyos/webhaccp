const enums = require("../enums/enums");

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
        .border {
          margin: 0;
          padding: 1rem 2rem;
          border: 1px solid black;
          width: 180px;
        }
      </style>
    </head>
    <body>
      <div class="page">
        <div style="text-align: center; margin-top: 20rem">
          <h1 style="color: #31849b" ; font-size: 60px;>WEB HACCP TERV</h1>
          <h2 style="font-size: 30px;">${data.haccp_unit_name}</h2>
          <h2 style="font-size: 30px;">${data.haccp_company_location}</h2>
  
          <h2 style="font-size: 30px;">
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
          </tr>
          <tr>
          <td>1.</td>
            <td>Napi ellenőrzési lap</td>
            <td>1.</td>
            <td> ${new Date()
              .toISOString()
              .split("T")[0]
              .replace(/-/g, ".")}</td>
          </tr>`;

  let counter = 2;

  if (data.haccp_require_keeping_warm) {
    html +=
      `<tr>
            <td>` +
      counter +
      `.</td>
            <td>Ételek hőmérsékletének ellenőrző lapja</td>
            <td>1.</td>
            <td>
              ${new Date().toISOString().split("T")[0].replace(/-/g, ".")}
            </td>
          </tr>`;
    counter++;
  }

  if (data.haccp_require_keeping_warm) {
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

  if (data.haccp_require_keeping_cold) {
    html +=
      `<tr>
            <td>` +
      counter +
      `.</td>
            <td>Tálalási napló</td>
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
  
        <h2 style="margin-top: 5rem">2. TERMÉKLEÍRÁS</h2>
        <h3 style="margin-left: 1rem">2.1. Termékleírás</h3>
        <table>
          <tr>
            <td>Alapanyagok</td>
            <td>Készételek</td>
          </tr>
          <tr><td>`;

  data.haccp_preparatory.split("###").forEach((prep) => {
    html += "<li>" + enums.ProductPreparatoryEnum[prep] + "</li>";
  });

  html += `</td>
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

      <div class="page">
      <h3 style="margin-left: 1rem; padding-top: 4rem;">2.6. Forgalmazás módja</h3>
      <p>Helyben történő értékesítés és`;
  if (data.haccp_delivery) {
    html += "<span> kiszállítás</span>";
  }
  html += `<span>. A frissen elkészített késztermékek kiadásáta dolgozók végzik. </span></p>
  <h3 style="margin-left: 1rem; margin-top: 1rem;">2.7. Összetétel</h3>
  <p>A pontos összetételt a szakképzett szakácsok felkészültsége és a különböző, vendéglátói körökben elfogadott és magas szakmai szintet képviselő szakácskönyvek használata garantálja. Anyaghányad nyilvántartást vezetünk, melyet 365 napig megőrizzük.
  Az étterem színvonala és hírneve nem engedheti meg, hogy az étel összetétele és mennyisége ne feleljen meg az előírásoknak.
</p>  
<h3 style="margin-left: 1rem; margin-top: 1rem;">2.8. Jó vendéglátó gyakorlat és Higiéniai és takarítási utasítás</h3>
<p>Az élelmiszer-előállítással kapcsolatban foglalkoztatott személyzet munkaköri alkalmasságára vonatkozó követelményeket a „Jó vendéglátó gyakorlatban” és a „Higiéniai és takarítási utasításban” határoztuk meg. Az oktatásról, képzésről a HACCP Kézikönyv vonatkozó fejezete szerint gondoskodunk. A szociális helyiségek takarításáról, a rovar- és rágcsálóirtásról, a munkaruhák mosásáról és karbantartásáról, a hulladékok és melléktermékek elszállításáról a „Higiéniai és takarítási utasításban” előírtak szerint gondoskodunk. A rendszeres szolgáltatást végző alvállalkozókkal kötött szerződésekben az élelmiszerbiztonsággal, higiéniával kapcsolatos követelményeket is rögzítjük.</p>
<h3 style="margin-left: 1rem; margin-top: 1rem;">2.9. Az élelmiszerbiztonsági intézkedések igazolása</h3> 
<p>Termékeink forgalomba hozatala előtt meggyőződünk arról, hogy az előállítás folyamatában az előírt és az élelmiszerbiztonságot szolgáló intézkedések, ellenőrzések megtörténtek.
A kiszolgálást megelőzően, a tálalás megkezdésekor a tulajdonos vagy a szakmai vezető érzékszervi ellenőrzést végez, ezáltal biztosítható, hogy termékeink csak úgy kerülhetnek forgalomba, ha kielégítik a velük szemben támasztott valamennyi szakmai és minőségi követelményt.
</p>
</div>


<div class="page">
<h2 style="padding-top: 5rem;">3. FOLYAMATÁBRA</h2>
<div style="display: grid;  grid-template-columns:1fr 1fr;  width: 15.3in;
height: 9.5in; background-color: yellow;">

<div style="background-color: red;">
  <p class="border">1. Étlaptervezés</p>
  <span style='font-size:40px; margin-left: 100px;'>&#8595;</span>
  <p class="border">2. Igényfelmérés</p>
  <span style='font-size:40px; margin-left: 100px;'>&#8595;</span>
  <p class="border">3. Beszerzés</p>
  <span style='font-size:40px; margin-left: 100px;'>&#8595;</span>
  <p class="border">4. Áruátvétel</p> 
  <span style='font-size:40px; margin-left: 100px;'>&#8595;</span>
  <p class="border">5. Tárolás</p>
  <span style='font-size:40px; margin-left: 100px;'>&#8595;</span>
  <p class="border">6. Előkészítés</p>
  <span style='font-size:40px; margin-left: 100px;'>&#8595;</span>
  <p class="border">7. Ételkészítés</p>
  <span style='font-size:40px; margin-left: 100px;'>&#8595;</span>
  <p class="border">8. Kiszolgálás</p>
  <span style='font-size:40px; margin-left: 100px;'>&#8595;</span>
  <p class="border">9. Kiszállítás</p>
</div>
</div>
</div>

<div class="page">
<h2 style="padding-top: 5rem;">4. VESZÉLYELEMZÉS</h2>
<table style="margin-left: 16.15pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td rowspan="2" style="width: 41.45pt;border: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.55pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 183.6pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:72.65pt;margin-bottom:.0001pt;margin-left:73.9pt;text-align:center;'><span style="font-size:13px;">Művelet</span></p>
            </td>
            <td rowspan="2" style="width: 41.5pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.6pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 185.75pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:23.55pt;'><span style="font-size:13px;">Vesz&eacute;lycsoport: vesz&eacute;ly &eacute;s eredete</span></p>
            </td>
            <td colspan="5" style="width: 312.85pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  133.0pt;margin-bottom:.0001pt;margin-left:134.9pt;text-align:center;'><span style="font-size:13px;">D&ouml;nt&eacute;si fa</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  25.25pt;margin-bottom:.0001pt;margin-left:26.95pt;text-align:center;'><span style="font-size:13px;">Q1/Szab&aacute;lyoz&oacute; int&eacute;zked&eacute;s</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  6.65pt;margin-bottom:.0001pt;margin-left:8.85pt;text-align:  center;'><span style="font-size:13px;">Q2</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:13.3pt;'><span style="font-size:13px;">Q3</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:12.15pt;'><span style="font-size:13px;">Q4</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  10.25pt;margin-bottom:.0001pt;margin-left:12.45pt;text-align:center;'><span style="font-size:13px;">CCP</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="9" style="width: 765.15pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.9pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;'><strong><span style="font-size:16px;">0.1 &Aacute;ltal&aacute;nos vesz&eacute;lyek &ndash; Szem&eacute;lyi Higi&eacute;nia</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;'><span style="font-size:13px;">0.1.1</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.4pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">Eg&eacute;szs&eacute;g&uuml;gyi k&ouml;nyv, &eacute;s nyilatkozat</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.4pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">B: mikrob&aacute;kkal fertőződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.2pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;line-height:98%;'><span style="font-size:16px;line-height:  98%;">-&nbsp;</span><span style="font-size:13px;line-height:98%;">beteg, illetve eg&eacute;szs&eacute;g&uuml;gyi k&ouml;nyvvel nem rendelkező dolgoz&oacute; &aacute;ll munk&aacute;ba</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:2.0pt;margin-bottom:.0001pt;margin-left:4.0pt;text-align:justify;'><span style="font-size:13px;">Dolgoz&oacute;ink rendelkeznek &eacute;rv&eacute;nyes eg&eacute;szs&eacute;g&uuml;gyi&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;k&ouml;nyvvel&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&eacute;s nyilatkozattal. &Eacute;vente 1-szer alkalmass&aacute;gi vizsg&aacute;laton vesznek r&eacute;szt.</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.85pt;margin-bottom:.0001pt;margin-left:4.0pt;text-align:justify;'><span style="font-size:13px;">A beteg dolgoz&oacute; nem &aacute;ll munk&aacute;ba. Amennyiben sz&uuml;ks&eacute;ges, az &uacute;jra munk&aacute;ba-&aacute;ll&aacute;st orvosi vizsg&aacute;lat előzi</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.0pt;text-align:justify;line-height:10.95pt;'><span style="font-size:13px;">meg.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.0pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.1pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 103.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.7pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.55pt;'><span style="font-size:13px;">0.1.2</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.8pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">Munkaruha</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:16.4pt;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">B, K, F: mikrob&aacute;kkal, vegyi anyagokkal, fizikai anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.2pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;line-height:98%;'><span style="font-size:16px;line-height:  98%;">-&nbsp;</span><span style="font-size:13px;line-height:98%;">a dolgoz&oacute; munkaruh&aacute;ja nem tiszta, nem fertőtlen&iacute;tett, &aacute;llapota nem megfelelő</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.85pt;margin-bottom:.0001pt;margin-left:4.0pt;text-align:justify;'><span style="font-size:13px;">A munkaruha megfelelő &aacute;llapot&aacute;&eacute;rt a dolgoz&oacute; a felelős, ennek ellenőrz&eacute;se &eacute;s a megfelelős&eacute;g betartat&aacute;sa a k&ouml;zvetlen felettes&nbsp;feladata.</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:2.0pt;margin-bottom:.0001pt;margin-left:4.0pt;text-align:justify;line-height:  11.5pt;'><span style="font-size:13px;">Nem megfelelő munkaruha visel&eacute;se eset&eacute;n a dolgoz&oacute;t nem &aacute;ll&iacute;tjuk munk&aacute;ba.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.0pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.1pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.7pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.4pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;'><span style="font-size:13px;">0.1.3</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.45pt;'><strong><span style="font-size:19px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.0pt;'><span style="font-size:13px;">K&eacute;zmos&aacute;s</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.4pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.65pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">B: mikrob&aacute;kkal fertőződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.3pt;margin-right:38.9pt;margin-bottom:.0001pt;margin-left:4.0pt;line-height:11.3pt;'><span style="font-size:13px;">- a k&uuml;l&ouml;nb&ouml;ző munkaf&aacute;zisok k&ouml;z&ouml;tt kimarad&oacute; k&eacute;zmos&aacute;s</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.45pt;'><strong><span style="font-size:19px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:8.3pt;margin-bottom:.0001pt;margin-left:10.05pt;text-align:center;'><span style="font-size:13px;">Higi&eacute;niai oktat&aacute;sok.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.6pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.0pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.6pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.1pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 46.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.6pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.7pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">2.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">K: vegyi anyagokkal szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;line-height:10.95pt;'><span style="font-size:13px;">- a dolgoz&oacute;k k&eacute;zmos&aacute;sa nem megfelelő</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:8.3pt;margin-bottom:.0001pt;margin-left:10.05pt;text-align:center;'><span style="font-size:13px;">Higi&eacute;niai oktat&aacute;sok.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.25pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.0pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.25pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.1pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.25pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.7pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.5pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">3.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">F: fizikai anyagokkal szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:7.8pt;margin-bottom:.0001pt;margin-left:4.0pt;line-height:11.5pt;'><span style="font-size:13px;">- nem el&eacute;g gyakori k&eacute;zmos&aacute;s eset&eacute;n fizikai szennyeződ&eacute;sek is maradnak a k&eacute;zen</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:19px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:8.3pt;margin-bottom:.0001pt;margin-left:10.05pt;text-align:center;'><span style="font-size:13px;">Higi&eacute;niai oktat&aacute;sok.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.75pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.0pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.75pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.1pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.75pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.7pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="9" style="width: 765.15pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.8pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;line-height:13.05pt;'><strong><span style="font-size:16px;">0.2 &Aacute;ltal&aacute;nos vesz&eacute;lyek &ndash; Tiszt&iacute;t&aacute;si, fertőtlen&iacute;t&eacute;si tev&eacute;kenys&eacute;g</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:10.75pt;'><span style="font-size:13px;">0.2.1</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong><span style="font-size:11px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">Tiszt&iacute;t&aacute;si, fertőtlen&iacute;t&eacute;si tev&eacute;kenys&eacute;g</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>&nbsp;</p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">B: mikrob&aacute;k t&uacute;l&eacute;l&eacute;se</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:23.1pt;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">- nem megfelelő tiszt&iacute;t&aacute;si, fertőtlen&iacute;t&eacute;si technol&oacute;gia</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.0pt;text-align:justify;'><span style="font-size:13px;">A mosogat&aacute;st a szab&aacute;lyzatban le&iacute;rtaknak megfelelően, a sz&uuml;ks&eacute;ges oldatt&ouml;m&eacute;nys&eacute;g &nbsp; &nbsp; &eacute;s &nbsp; &nbsp; &nbsp; &nbsp;behat&aacute;si &nbsp; &nbsp;idő</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:2.0pt;margin-bottom:.0001pt;margin-left:4.0pt;text-align:justify;line-height:  11.5pt;'><span style="font-size:13px;">betart&aacute;s&aacute;val v&eacute;gezz&uuml;k. Minden dolgoz&oacute; &nbsp;egy &nbsp;adott &nbsp; &nbsp; &nbsp;ter&uuml;let&eacute;rt &nbsp;felelős,</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.0pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.1pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.7pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
    </tbody>
</table>
</div>

<div class="page">
<div style="height: 2rem;"></div>
<table style="margin-top: 5rem; margin-left: 16.15pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td rowspan="2" style="width: 41.4pt;border: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.55pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 183.6pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:72.6pt;margin-bottom:.0001pt;margin-left:73.95pt;text-align:center;'><span style="font-size:13px;">Művelet</span></p>
            </td>
            <td rowspan="2" style="width: 41.5pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.65pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 185.75pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:23.6pt;'><span style="font-size:13px;">Vesz&eacute;lycsoport: vesz&eacute;ly &eacute;s eredete</span></p>
            </td>
            <td colspan="5" style="width: 312.9pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  133.0pt;margin-bottom:.0001pt;margin-left:134.95pt;text-align:center;'><span style="font-size:13px;">D&ouml;nt&eacute;si fa</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:27.95pt;'><span style="font-size:13px;">Q1/Szab&aacute;lyoz&oacute; int&eacute;zked&eacute;s</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  6.6pt;margin-bottom:.0001pt;margin-left:8.9pt;text-align:  center;'><span style="font-size:13px;">Q2</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:13.35pt;'><span style="font-size:13px;">Q3</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:12.2pt;'><span style="font-size:13px;">Q4</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  10.2pt;margin-bottom:.0001pt;margin-left:12.45pt;text-align:center;'><span style="font-size:13px;">CCP</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 51.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 51.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 51.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 51.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 51.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">&bdquo;Napi&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;ellenőrz&eacute;si&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;lapon&rdquo;&nbsp;dokument&aacute;ljuk&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;a&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;takar&iacute;t&aacute;s&nbsp;megval&oacute;sul&aacute;s&aacute;t.</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.8pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:24.25pt;line-height:10.5pt;'><strong><span style="font-size:13px;">NAPI ELLENŐZ&Eacute;SI LAP</span></strong></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 51.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 51.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 51.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 51.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.1pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.1pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.1pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">2.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.1pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.75pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B: mikrob&aacute;kkal fertőződ&eacute;s</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-5.95px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="line-height:97%;font-size:13px;">-&nbsp;</span><span style="line-height:;font-size:10.0pt;line-height:;;">nem megfelelő tisztas&aacute;g&uacute;, illetve nem megfelelő&nbsp;eszk&ouml;z&ouml;k</span></li>
                    </ul>
                    <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:0.05000000000000071px;">
                            <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">szakos&iacute;tatlan&nbsp;eszk&ouml;zhaszn&aacute;lat</span></li>
                        </ul>
                    </div>
                </div>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.1pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.75pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">Mosogat&aacute;sra &eacute;s takar&iacute;t&aacute;sra csak a meghat&aacute;rozott besz&aacute;ll&iacute;t&oacute;t&oacute;l rendelt eszk&ouml;z haszn&aacute;lhat&oacute;, alkalmazni kell &nbsp;az&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;egyszer&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;haszn&aacute;latos tiszt&iacute;t&oacute;eszk&ouml;z&ouml;ket a k&uuml;l&ouml;nb&ouml;ző ter&uuml;leteken csak a sz&iacute;nk&oacute;ddal vagy egy&eacute;b j&oacute;l l&aacute;that&oacute; m&oacute;don&nbsp;jel&ouml;lt</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;text-align:justify;line-height:10.85pt;'><span style="font-size:13px;">eszk&ouml;z&ouml;k haszn&aacute;lhat&oacute;ak.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.1pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.1pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.1pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 92.1pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">3.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:14.75pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">K: vegyi anyagokkal szennyeződ&eacute;s (&uuml;zemel&eacute;s sor&aacute;n a fel&uuml;letre ker&uuml;lő k&eacute;miai szennyeződ&eacute;sek visszamarad&aacute;sa, tiszt&iacute;t&oacute;- fertőtlen&iacute;tőszer maradv&aacute;nyok)</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:0.05000000000000071px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">el&eacute;gtelen hat&aacute;sfok&uacute;&nbsp;tiszt&iacute;t&aacute;s</span></li>
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">el&eacute;gtelen&nbsp;&ouml;bl&iacute;t&eacute;s</span></li>
                    </ul>
                </div>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.25pt;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">A zs&iacute;rold&aacute;st &eacute;s fertőtlen&iacute;t&eacute;st k&ouml;vetően, alapos &ouml;bl&iacute;t&eacute;ssel t&aacute;vol&iacute;tjuk el a vegyszert az eszk&ouml;z&ouml;kről. Higi&eacute;niai oktat&aacute;sok.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">4.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.6pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;line-height:98%;'><span style="font-size:13px;line-height:  98%;">F: fizikai anyagokkal szennyeződ&eacute;s (&uuml;zemel&eacute;s sor&aacute;n a fel&uuml;letre ker&uuml;lő szennyeződ&eacute;sek visszamarad&aacute;sa)</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.1pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;line-height:10.95pt;'><span style="font-size:13px;">- el&eacute;gtelen hat&aacute;sfok&uacute; tiszt&iacute;t&aacute;s</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.6pt;margin-right:1.75pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;line-height:98%;'><span style="font-size:13px;line-height:98%;">A mosogat&aacute;st a szab&aacute;lyzatban le&iacute;rtaknak megfelelően, a sz&uuml;ks&eacute;ges oldatt&ouml;m&eacute;nys&eacute;g &eacute;s behat&aacute;si idő betart&aacute;s&aacute;val v&eacute;gezz&uuml;k</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 124.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.55pt;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:10.75pt;'><span style="font-size:13px;">0.2.2</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 124.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.55pt;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;'><span style="font-size:13px;">Vegyszer felhaszn&aacute;l&aacute;s</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 124.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.55pt;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 124.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:16.35pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B, K, F: mikrob&aacute;kkal, vegyi anyagokkal, fizikai anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-5.95px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">a tiszt&iacute;t&oacute;szerek nem alkalmasak &eacute;lelmiszeripari&nbsp;felhaszn&aacute;l&aacute;sra</span></li>
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">nem ker&uuml;lt bejelent&eacute;sre a vegyszer&nbsp;haszn&aacute;lat</span></li>
                    </ul>
                </div>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 124.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">A főzőkonyha &bdquo;vesz&eacute;lyes anyag felhaszn&aacute;l&aacute;sa&rdquo; bejelent&eacute;sre ker&uuml;lt (&Aacute;NTSZ). Ennek igazol&aacute;sa, valamint a felhaszn&aacute;l&aacute;sra ker&uuml;lő (fertőtlen&iacute;t&eacute;st is biztos&iacute;t&oacute;) tiszt&iacute;t&oacute;szerek &eacute;s a k&eacute;zmos&oacute;szer biztons&aacute;gi adatlapjai a helysz&iacute;nen&nbsp;megtal&aacute;lhat&oacute;k.</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:2.05pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">Csak belist&aacute;zott besz&aacute;ll&iacute;t&oacute;t&oacute;l v&aacute;s&aacute;rolunk tiszt&iacute;t&oacute;szert.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 124.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 124.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 124.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 124.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
    </tbody>
</table>
</div>

<div class="page">
<div style="height: 3rem;"></div>
<table style="margin-top: 5rem; margin-left: 16.15pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td rowspan="2" style="width: 41.45pt;border: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.55pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 183.6pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:72.65pt;margin-bottom:.0001pt;margin-left:73.9pt;text-align:center;'><span style="font-size:13px;">Művelet</span></p>
            </td>
            <td rowspan="2" style="width: 41.5pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.6pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 185.75pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:23.55pt;'><span style="font-size:13px;">Vesz&eacute;lycsoport: vesz&eacute;ly &eacute;s eredete</span></p>
            </td>
            <td colspan="5" style="width: 312.85pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  133.0pt;margin-bottom:.0001pt;margin-left:134.9pt;text-align:center;'><span style="font-size:13px;">D&ouml;nt&eacute;si fa</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:27.9pt;'><span style="font-size:13px;">Q1/Szab&aacute;lyoz&oacute; int&eacute;zked&eacute;s</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  6.65pt;margin-bottom:.0001pt;margin-left:8.85pt;text-align:  center;'><span style="font-size:13px;">Q2</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:13.3pt;'><span style="font-size:13px;">Q3</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:12.15pt;'><span style="font-size:13px;">Q4</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  10.25pt;margin-bottom:.0001pt;margin-left:12.45pt;text-align:center;'><span style="font-size:13px;">CCP</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="9" style="width: 765.15pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.6pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.8pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;line-height:12.85pt;'><strong><span style="font-size:16px;">0.3 &Aacute;ltal&aacute;nos vesz&eacute;lyek &ndash; V&iacute;zell&aacute;t&aacute;s, karbantart&aacute;s</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:10.75pt;'><span style="font-size:13px;">0.3.1</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:9.25pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">V&iacute;zhaszn&aacute;lat</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">B: mikrob&aacute;kkal fertőződ&eacute;s</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-6px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">nem megfelelő minős&eacute;gű&nbsp;v&iacute;z</span></li>
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">nem megfelelően&nbsp;szerelt csőh&aacute;l&oacute;zat, helytelen&uuml;l elv&eacute;gzett jav&iacute;t&aacute;si&nbsp;munk&aacute;k</span></li>
                    </ul>
                    <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:0px;">
                            <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">csőt&ouml;r&eacute;s</span></li>
                        </ul>
                    </div>
                </div>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:2.1pt;margin-bottom:.0001pt;margin-left:4.0pt;text-align:justify;'><span style="font-size:13px;">A sz&uuml;ks&eacute;ges mennyis&eacute;gű iv&oacute;vizet a telep&uuml;l&eacute;si h&aacute;l&oacute;zatr&oacute;l biztos&iacute;tjuk.</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:1.85pt;margin-bottom:.0001pt;margin-left:4.0pt;text-align:justify;'><span style="font-size:13px;">A v&iacute;zminős&eacute;get vezet&eacute;kbont&aacute;s, fertőz&eacute;s, stb. eset&eacute;n akkredit&aacute;lt laborat&oacute;riummal vizsg&aacute;ltatjuk.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.55pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.0pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.55pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.1pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.55pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.7pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td rowspan="4" style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td rowspan="4" style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">K: k&eacute;miai anyagokkal szennyeződ&eacute;s</span></p>
            </td>
            <td rowspan="4" style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:2.1pt;margin-bottom:.0001pt;margin-left:4.0pt;text-align:justify;'><span style="font-size:13px;">A sz&uuml;ks&eacute;ges mennyis&eacute;gű iv&oacute;vizet a telep&uuml;l&eacute;si h&aacute;l&oacute;zatr&oacute;l biztos&iacute;tjuk.</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:1.85pt;margin-bottom:.0001pt;margin-left:4.0pt;text-align:justify;'><span style="font-size:13px;">A v&iacute;zminős&eacute;get vezet&eacute;kbont&aacute;s, fertőz&eacute;s, stb. eset&eacute;n akkredit&aacute;lt laborat&oacute;riummal vizsg&aacute;ltatjuk.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td rowspan="4" style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1.5pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.5pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 15.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 15.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.45pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">- nem megfelelő minős&eacute;gű v&iacute;z</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 15.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 15.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1.5pt solid black;padding: 0cm;height: 15.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.5pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 29.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.9pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">2.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 29.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:4.0pt;margin-right:29.2pt;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">- nem megfelelően szerelt csőh&aacute;l&oacute;zat, helytelen&uuml;l elv&eacute;gzett jav&iacute;t&aacute;si munk&aacute;k</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 29.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:1.1pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.0pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 29.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:1.1pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.1pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1.5pt solid black;padding: 0cm;height: 29.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:1.1pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.7pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 14.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 14.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.45pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;line-height:10.95pt;'><span style="font-size:13px;">- csőt&ouml;r&eacute;s</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 14.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 14.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 14.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td rowspan="4" style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td rowspan="4" style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">F: fizikai anyagokkal szennyeződ&eacute;s</span></p>
            </td>
            <td rowspan="4" style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:2.1pt;margin-bottom:.0001pt;margin-left:4.0pt;text-align:justify;'><span style="font-size:13px;">A sz&uuml;ks&eacute;ges mennyis&eacute;gű iv&oacute;vizet a telep&uuml;l&eacute;si h&aacute;l&oacute;zatr&oacute;l biztos&iacute;tjuk.</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;margin-right:1.85pt;margin-bottom:.0001pt;margin-left:4.0pt;text-align:justify;line-height:98%;'><span style="font-size:13px;line-height:98%;">A v&iacute;zminős&eacute;get vezet&eacute;kbont&aacute;s, fertőz&eacute;s, stb. eset&eacute;n akkredit&aacute;lt laborat&oacute;riummal vizsg&aacute;ltatjuk.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td rowspan="4" style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1.5pt solid black;padding: 0cm;height: 19.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.5pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 15.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 15.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.45pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">- nem megfelelő minős&eacute;gű v&iacute;z</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 15.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 15.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1.5pt solid black;padding: 0cm;height: 15.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.5pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 29.7pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.9pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">3.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 29.7pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:4.0pt;margin-right:29.2pt;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">- nem megfelelően szerelt csőh&aacute;l&oacute;zat, helytelen&uuml;l elv&eacute;gzett jav&iacute;t&aacute;si munk&aacute;k</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 29.7pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:1.1pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.0pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 29.7pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:1.1pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.1pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1.5pt solid black;padding: 0cm;height: 29.7pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:1.1pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.7pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 14.25pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 14.25pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.3pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;line-height:10.95pt;'><span style="font-size:13px;">- csőt&ouml;r&eacute;s</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 14.25pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 14.25pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 14.25pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:10.75pt;'><span style="font-size:13px;">0.3.2</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:18px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">Karbantart&aacute;s</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.95pt;margin-right:8.05pt;margin-bottom:.0001pt;margin-left:4.0pt;line-height:97%;'><span style="font-size:13px;line-height:  97%;">B, F: mikrob&aacute;kkal, fizikai anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:6.2pt;margin-bottom:.0001pt;margin-left:4.0pt;text-indent:35.5pt;line-height:11.5pt;'><span style="font-size:13px;">- az &eacute;p&uuml;let, az alkalmaz&aacute;sra ker&uuml;lő eszk&ouml;z&ouml;k, berendez&eacute;si t&aacute;rgyak, illetve a sz&aacute;ll&iacute;t&oacute;j&aacute;rmű &aacute;llapota nem megfelelő</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.0pt;text-align:justify;'><span style="font-size:13px;">Az alkalmaz&aacute;sra ker&uuml;lő eszk&ouml;z&ouml;k, berendez&eacute;si t&aacute;rgyak, a sz&aacute;ll&iacute;t&oacute;j&aacute;rmű &aacute;llapot&aacute;t a megfelelő &nbsp;kezel&eacute;ssel &oacute;vjuk, a karbantart&aacute;si munk&aacute;kat rendszeresen, sz&uuml;ks&eacute;g eset&eacute;n&nbsp;soron</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.0pt;text-align:justify;line-height:11.05pt;'><span style="font-size:13px;">k&iacute;v&uuml;l, elv&eacute;gezz&uuml;k.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.6pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.0pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.6pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.1pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.6pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.7pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="9" style="width: 765.15pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.8pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;line-height:13.05pt;'><strong><span style="font-size:16px;">0.4 &Aacute;ltal&aacute;nos vesz&eacute;lyek &ndash; Hullad&eacute;kkezel&eacute;s</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:10.75pt;'><span style="font-size:13px;">0.4.1</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.0pt;'><span style="font-size:13px;">Kommun&aacute;lis hullad&eacute;k</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:16.4pt;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">B, K, F: mikrob&aacute;kkal, vegyi anyagokkal, fizikai anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-6px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="line-height:98%;font-size:13px;">-&nbsp;</span><span style="line-height:;font-size:10.0pt;line-height:;;">nincs megfelelő sz&aacute;m&uacute; &eacute;s nagys&aacute;g&uacute; hullad&eacute;kgyűjtő kihelyezve a kommun&aacute;lis hullad&eacute;kok&nbsp;sz&aacute;m&aacute;ra</span></li>
                    </ul>
                    <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:0.5px;">
                            <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">kommun&aacute;lis hullad&eacute;kok elsz&aacute;ll&iacute;t&aacute;sa&nbsp;nem</span></li>
                        </ul>
                    </div>
                </div>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.65pt;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.0pt;text-align:justify;'><span style="font-size:13px;">A keletkező kommun&aacute;lis-hullad&eacute;k gyűjt&eacute;s&eacute;re fedeles, k&ouml;nnyen tiszt&iacute;that&oacute; fertőtlen&iacute;thető t&aacute;rol&oacute;kat helyez&uuml;nk ki. A napi takar&iacute;t&aacute;st-fertőtlen&iacute;t&eacute;st k&ouml;vetően, a hullad&eacute;kt&aacute;rol&oacute;kat szemeteszs&aacute;kkal b&eacute;lelj&uuml;k. Az &ouml;sszegyűjt&ouml;tt hullad&eacute;k elsz&aacute;ll&iacute;t&aacute;sa a</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.0pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.1pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.15pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 87.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.7pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
    </tbody>
</table>
</div>

<div class="page">
<div style="height: 6rem;"></div>
<table style="margin-left: 16.15pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td rowspan="2" style="width: 41.4pt;border: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.55pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 183.6pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:72.6pt;margin-bottom:.0001pt;margin-left:73.95pt;text-align:center;'><span style="font-size:13px;">Művelet</span></p>
            </td>
            <td rowspan="2" style="width: 41.5pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.65pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 185.75pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:23.6pt;'><span style="font-size:13px;">Vesz&eacute;lycsoport: vesz&eacute;ly &eacute;s eredete</span></p>
            </td>
            <td colspan="5" style="width: 312.9pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  133.0pt;margin-bottom:.0001pt;margin-left:134.95pt;text-align:center;'><span style="font-size:13px;">D&ouml;nt&eacute;si fa</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:27.95pt;'><span style="font-size:13px;">Q1/Szab&aacute;lyoz&oacute; int&eacute;zked&eacute;s</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  6.6pt;margin-bottom:.0001pt;margin-left:8.9pt;text-align:  center;'><span style="font-size:13px;">Q2</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:13.35pt;'><span style="font-size:13px;">Q3</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:12.2pt;'><span style="font-size:13px;">Q4</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  10.2pt;margin-bottom:.0001pt;margin-left:12.45pt;text-align:center;'><span style="font-size:13px;">CCP</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;line-height:11.0pt;'><span style="font-size:13px;">rendszeres, nem dokument&aacute;lt</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.65pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">szerződ&eacute;sben&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;foglaltaknak megfelelően, rendszeresen t&ouml;rt&eacute;nik.&nbsp;</span><span style="font-size:13px;">A sz&aacute;ll&iacute;t&aacute;si szerződ&eacute;st a&nbsp;k&ouml;zpontban, az</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:2.05pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;line-height:  11.3pt;'><span style="font-size:13px;">elsz&aacute;ll&iacute;t&aacute;st igazol&oacute; sz&aacute;ll&iacute;t&oacute;leveleket a helysz&iacute;nen lefűzve őrizz&uuml;k</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 57.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 149.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.25pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:10.75pt;'><span style="font-size:13px;">0.4.2</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 149.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.55pt;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;'><span style="font-size:13px;">&Eacute;telhullad&eacute;k</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 149.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.25pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 149.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B,&nbsp;</span><span style="font-size:13px;">K, F:&nbsp;mikrob&aacute;kkal, vegyi&nbsp;anyagokkal, fizikai anyagokkal val&oacute;&nbsp;szennyeződ&eacute;s</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-5.95px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="line-height:97%;font-size:13px;">-&nbsp;&nbsp;</span><span style="line-height:;font-size:10.0pt;line-height:;;">&eacute;telhullad&eacute;k elsz&aacute;ll&iacute;t&aacute;sa nem rendszeres, r&aacute;gcs&aacute;l&oacute;k &eacute;s rovarok jelenhetnek&nbsp;meg</span></li>
                    </ul>
                    <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-0.1999999999999993px;">
                            <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">nem dokument&aacute;lt az elsz&aacute;ll&iacute;t&aacute;s</span></li>
                        </ul>
                        <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                            <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-5.95px;">
                                <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">gyűjt&eacute;se nem&nbsp;higi&eacute;nikus</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 149.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.75pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">Az &eacute;telhulad&eacute;k elsz&aacute;ll&iacute;t&aacute;s&aacute;t hűtőkamra hi&aacute;ny&aacute;ban naponta elv&eacute;gzi a szerződ&ouml;tt szolg&aacute;ltat&oacute;. az elsz&aacute;ll&iacute;t&aacute;st igazol&oacute; sz&aacute;ll&iacute;t&oacute;leveleket a helysz&iacute;nen lefűzve őrizz&uuml;k. A keletkező &eacute;lelmiszer-hullad&eacute;k&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;gyűjt&eacute;s&eacute;re&nbsp;fedeles, k&ouml;nnyen tiszt&iacute;that&oacute; fertőtlen&iacute;thető anyagb&oacute;l k&eacute;sz&uuml;lt ed&eacute;nyzetet&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;biztos&iacute;tunk.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Az elsz&aacute;ll&iacute;t&aacute;sig t&ouml;rt&eacute;nő t&aacute;rol&aacute;s az arra kijel&ouml;lt helyis&eacute;gben, az elsz&aacute;ll&iacute;t&oacute; &aacute;ltal biztos&iacute;tott &eacute;s tiszt&iacute;tott,&nbsp;fertőtlen&iacute;tett,</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;text-align:justify;line-height:10.95pt;'><span style="font-size:13px;">fedeles t&aacute;rol&oacute;kban t&ouml;rt&eacute;nik</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 149.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.5pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 149.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 149.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 149.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.5pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="9" style="width: 765.15pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.6pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.8pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;line-height:12.85pt;'><strong><span style="font-size:16px;">0.5 &Aacute;ltal&aacute;nos vesz&eacute;lyek &ndash; Rovar &eacute;s r&aacute;gcs&aacute;l&oacute;mentes&iacute;t&eacute;s</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:10.75pt;'><span style="font-size:13px;">0.5.1</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.8pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Rovar &eacute;s r&aacute;gcs&aacute;l&oacute;mentes&iacute;t&eacute;s</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:16.35pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B, K, F: mikrob&aacute;kkal, vegyi anyagokkal, fizikai anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:20.25pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">- nem el&eacute;g gyakori irt&aacute;s, nem megfelelő folyamat</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.75pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">A c&eacute;g&uuml;nk szak&eacute;rtő c&eacute;get b&iacute;zott meg a r&aacute;gcs&aacute;l&oacute; &eacute;s rovarmentes&iacute;t&eacute;ssel, &iacute;gy tudjuk el&eacute;rni a megfelelő biztons&aacute;got. Az irt&aacute;s minden negyed&eacute;vben megt&ouml;rt&eacute;nik, de szezon&aacute;lisan előfordulhat eseti mentes&iacute;t&eacute;si munka</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;text-align:justify;line-height:10.95pt;'><span style="font-size:13px;">is.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 80.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
    </tbody>
</table>
</div>


<div class="page">
<div style="height: 7rem;"></div>
<table style="margin-left: 16.15pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td rowspan="2" style="width: 41.45pt;border: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.55pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 183.6pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:72.65pt;margin-bottom:.0001pt;margin-left:73.9pt;text-align:center;'><span style="font-size:13px;">Művelet</span></p>
            </td>
            <td rowspan="2" style="width: 41.5pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.6pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 185.75pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:23.55pt;'><span style="font-size:13px;">Vesz&eacute;lycsoport: vesz&eacute;ly &eacute;s eredete</span></p>
            </td>
            <td colspan="5" style="width: 312.85pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  133.0pt;margin-bottom:.0001pt;margin-left:134.9pt;text-align:center;'><span style="font-size:13px;">D&ouml;nt&eacute;si fa</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 161.45pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:27.9pt;'><span style="font-size:13px;">Q1/Szab&aacute;lyoz&oacute; int&eacute;zked&eacute;s</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  6.6pt;margin-bottom:.0001pt;margin-left:8.9pt;text-align:  center;'><span style="font-size:13px;">Q2</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:13.35pt;'><span style="font-size:13px;">Q3</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:12.2pt;'><span style="font-size:13px;">Q4</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  10.2pt;margin-bottom:.0001pt;margin-left:12.45pt;text-align:center;'><span style="font-size:13px;">CCP</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 68.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 68.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 68.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">2.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 68.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">K: k&eacute;miai anyagokkal szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.0pt;margin-right:23.95pt;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">-&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;az irt&aacute;s &uuml;zemidőben, illetve az &eacute;lelmiszerek, munkafel&uuml;letek, g&eacute;pek v&eacute;delme n&eacute;lk&uuml;l&nbsp;t&ouml;rt&eacute;nik</span></p>
            </td>
            <td style="width: 161.45pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 68.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.0pt;text-align:justify;'><span style="font-size:13px;">A munk&aacute;t &uuml;zemidőn k&iacute;v&uuml;l, az &eacute;lelmiszerek teljes v&eacute;delme mellett v&eacute;geztetj&uuml;k. A haszn&aacute;lt vegyszerre vonatkoz&oacute; inform&aacute;ci&oacute;kat (hat&aacute;s, vesz&eacute;lyess&eacute;g, ellenszer) a szakember</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.0pt;text-align:justify;line-height:10.85pt;'><span style="font-size:13px;">biztos&iacute;tja.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 68.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 68.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 68.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 68.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="9" style="width: 765.15pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.8pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;line-height:13.05pt;'><strong><span style="font-size:16px;">0.6 &Aacute;ltal&aacute;nos vesz&eacute;lyek &ndash; Dolgoz&oacute;k oktat&aacute;sa, dokumentumkezel&eacute;s, felelőss&eacute;gi k&ouml;r&ouml;k</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:10.75pt;'><span style="font-size:13px;">0.6.1</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.8pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">Dolgoz&oacute;k oktat&aacute;sa</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:16.4pt;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">B, K, F: mikrob&aacute;kkal, vegyi anyagokkal, fizikai anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:14.2pt;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">- nem megfelelő technol&oacute;giai &eacute;s higi&eacute;niai magatart&aacute;s</span></p>
            </td>
            <td style="width: 161.45pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.85pt;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">A dolgoz&oacute;k munk&aacute;ba &aacute;ll&aacute;sukat megelőzően, majd rendszeresen ism&eacute;tlődő alap higi&eacute;niai-, tűz &eacute;s munkav&eacute;delmi oktat&aacute;sban r&eacute;szes&uuml;lnek (&eacute;vente). A dolgoz&oacute;k tud&aacute;s&aacute;t elm&eacute;leti &eacute;s gyakorlati vizsga keretein bel&uuml;l</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.0pt;line-height:10.7pt;'><span style="font-size:13px;">ellenőrizz&uuml;k.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:10.75pt;'><span style="font-size:13px;">0.6.2</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:9.25pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">Dokumentumkezel&eacute;s</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.95pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;line-height:97%;'><span style="font-size:13px;line-height:  97%;">B,&nbsp;</span><span style="font-size:13px;line-height:97%;">K, F:&nbsp;mikrob&aacute;kkal, vegyi&nbsp;anyagokkal, fizikai anyagokkal val&oacute;&nbsp;szennyeződ&eacute;s</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-0.25px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">nyomonk&ouml;vet&eacute;s nem val&oacute;sul&nbsp;meg</span></li>
                    </ul>
                    <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:0px;">
                            <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">teljes &aacute;rup&aacute;lya kontroll nem val&oacute;sul&nbsp;meg</span></li>
                        </ul>
                    </div>
                </div>
            </td>
            <td style="width: 161.45pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.85pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">Minden dokumentum vezet&eacute;s&eacute;re a</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:4.9pt;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">&bdquo;Napi ellenőz&eacute;si lap&rdquo; dokumentumon k&uuml;l&ouml;n szem&eacute;lyeket jel&ouml;l&uuml;nk ki. Az ellenőrz&eacute;s az &uuml;zemvezető vagy az &aacute;ltala kijel&ouml;lt szem&eacute;ly feladat.</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.3pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:24.2pt;'><strong><span style="font-size:13px;">NAPI ELLENŐZ&Eacute;SI LAP</span></strong></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.55pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.55pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.55pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:11px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:10.75pt;'><span style="font-size:13px;">0.6.3</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.25pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">Felelőss&eacute;gi k&ouml;r&ouml;k</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:11px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:11.4pt;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">Nem &aacute;llap&iacute;that&oacute; meg &eacute;lelmiszerbiztons&aacute;gi vesz&eacute;ly</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">- elmarad a dokumentumkezel&eacute;s</span></p>
            </td>
            <td style="width: 161.45pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.0pt;line-height:11.05pt;'><span style="font-size:13px;">Minden dokumentum vezet&eacute;s&eacute;re a</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:4.9pt;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">&bdquo;Napi ellenőz&eacute;si lap&rdquo; dokumentumon k&uuml;l&ouml;n szem&eacute;lyeket jel&ouml;l&uuml;nk ki.</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.3pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:24.2pt;line-height:10.7pt;'><strong><span style="font-size:13px;">NAPI ELLENŐZ&Eacute;SI LAP</span></strong></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 52.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="9" style="width: 765.15pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;line-height:12.35pt;'><strong><em><u>Vesz&eacute;lyek technol&oacute;giai l&eacute;p&eacute;senk&eacute;nt</u></em></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="9" style="width: 765.15pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.95pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;'><strong><span style="font-size:13px;">1. &Eacute;TLAPTERVEZ&Eacute;S</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.45pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 98.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 98.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 98.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.9pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:14.95pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 98.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:2.5pt;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">B: k&oacute;rokoz&oacute; mikrob&aacute;k szaporod&aacute;sa, toxinok jelenl&eacute;te</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-6px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="line-height:98%;font-size:13px;">-&nbsp;&nbsp;</span><span style="line-height:;font-size:10.0pt;line-height:;;">a tervez&eacute;s nem veszi figyelembe az adott főzőkonyha lehetős&eacute;geit, korl&aacute;tait</span></li>
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">az &eacute;tlap tervez&eacute;s nem sz&aacute;mol a&nbsp;k&ouml;rnyezeti k&ouml;r&uuml;lm&eacute;nyekkel</span></li>
                    </ul>
                </div>
            </td>
            <td style="width: 161.45pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 98.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:16px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:18.25pt;margin-bottom:.0001pt;margin-left:4.0pt;'><span style="font-size:13px;">Az &eacute;tlapot az ell&aacute;t&aacute;sra ker&uuml;lő fogyaszt&oacute;k ig&eacute;nyeinek, valamint a konyha kapacit&aacute;s&aacute;nak figyelembev&eacute;tel&eacute;vel tervezi meg a vezető</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 98.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.15pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 98.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.15pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 98.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 98.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.15pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
    </tbody>
</table>

</div>

<div class="page">
<div style="height: 7rem;"></div>

<table style="margin-left: 16.15pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td rowspan="2" style="width: 41.4pt;border: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.55pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 183.55pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:72.65pt;margin-bottom:.0001pt;margin-left:74.05pt;text-align:center;'><span style="font-size:13px;">Művelet</span></p>
            </td>
            <td rowspan="2" style="width: 41.5pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.7pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 185.7pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:23.65pt;'><span style="font-size:13px;">Vesz&eacute;lycsoport: vesz&eacute;ly &eacute;s eredete</span></p>
            </td>
            <td colspan="5" style="width: 313.05pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  133.05pt;margin-bottom:.0001pt;margin-left:135.05pt;text-align:center;'><span style="font-size:13px;">D&ouml;nt&eacute;si fa</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:28.05pt;'><span style="font-size:13px;">Q1/Szab&aacute;lyoz&oacute; int&eacute;zked&eacute;s</span></p>
            </td>
            <td style="width: 31.45pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  6.4pt;margin-bottom:.0001pt;margin-left:8.85pt;text-align:  center;'><span style="font-size:13px;">Q2</span></p>
            </td>
            <td style="width: 38.65pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:13.4pt;'><span style="font-size:13px;">Q3</span></p>
            </td>
            <td style="width: 36.25pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:12.2pt;'><span style="font-size:13px;">Q4</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  10.25pt;margin-bottom:.0001pt;margin-left:12.4pt;text-align:center;'><span style="font-size:13px;">CCP</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="9" style="width: 765.2pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.95pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;'><strong><span style="font-size:13px;">2. IG&Eacute;NYFELM&Eacute;R&Eacute;S, RENDEL&Eacute;S FELV&Eacute;TEL</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:14.6pt;'><span style="font-size:13px;">2.1</span></p>
            </td>
            <td style="width: 183.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:11px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;'><span style="font-size:13px;">&nbsp;Adagsz&aacute;m</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.15pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.7pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:2.35pt;margin-bottom:.0001pt;margin-left:4.1pt;'><span style="font-size:13px;">B: k&oacute;rokoz&oacute; mikrob&aacute;k szaporod&aacute;sa, toxinok jelenl&eacute;te</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.8pt;margin-right:5.75pt;margin-bottom:.0001pt;margin-left:4.1pt;line-height:11.5pt;'><span style="font-size:13px;">- a szerződ&ouml;tt adagsz&aacute;m nem &aacute;ll ar&aacute;nyban a konyha kapacit&aacute;s&aacute;val</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.45pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:5.7pt;margin-bottom:.0001pt;margin-left:4.15pt;text-align:justify;line-height:  98%;'><span style="font-size:13px;line-height:98%;">A konyha kapacit&aacute;sunknak megfelelő adagsz&aacute;mra vonatkoz&oacute; vend&eacute;get l&aacute;tunk el.</span></p>
            </td>
            <td style="width: 31.45pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.25pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.65pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.2pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.25pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.65pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="9" style="width: 765.2pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 17.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.75pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;line-height:10.7pt;'><strong><span style="font-size:13px;">3. BESZERZ&Eacute;S</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:14.6pt;'><span style="font-size:13px;">3.1</span></p>
            </td>
            <td style="width: 183.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:18px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Besz&aacute;ll&iacute;t&oacute;i szerződ&eacute;sek</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.15pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.7pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:16.25pt;margin-bottom:.0001pt;margin-left:4.1pt;'><span style="font-size:13px;">B, K, F: mikrob&aacute;kkal, vegyi anyagokkal, fizikai anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:1.65pt;margin-bottom:.0001pt;margin-left:4.1pt;line-height:11.5pt;'><span style="font-size:13px;">-a besz&aacute;ll&iacute;t&oacute;k kiv&aacute;laszt&aacute;sa nem kellő k&ouml;r&uuml;ltekint&eacute;ssel t&ouml;rt&eacute;nik, a szolg&aacute;ltat&aacute;s nem megb&iacute;zhat&oacute;, nem&nbsp;egyenletes</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.65pt;margin-bottom:.0001pt;margin-left:4.15pt;text-align:justify;'><span style="font-size:13px;">Az alap-, seg&eacute;d-, nyersanyagok, illetve a vegyszerek besz&aacute;ll&iacute;t&oacute;inak kiv&aacute;laszt&aacute;sa p&aacute;ly&aacute;ztat&aacute;s &uacute;tj&aacute;n t&ouml;rt&eacute;nik. Minős&iacute;t&eacute;s&uuml;k rendszeres, probl&eacute;ma eset&eacute;n&nbsp;&uacute;j besz&aacute;ll&iacute;t&oacute;&nbsp;ker&uuml;l</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.15pt;text-align:justify;line-height:11.05pt;'><span style="font-size:13px;">kiv&aacute;laszt&aacute;sra.</span></p>
            </td>
            <td style="width: 31.45pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.6pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.25pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.65pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.6pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.2pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.25pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.6pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.65pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:14.6pt;'><span style="font-size:13px;">3.2</span></p>
            </td>
            <td style="width: 183.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:18px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Rendel&eacute;s a besz&aacute;ll&iacute;t&oacute;kt&oacute;l</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.15pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.7pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:16.25pt;margin-bottom:.0001pt;margin-left:4.1pt;'><span style="font-size:13px;">B, K, F: mikrob&aacute;kkal, vegyi anyagokkal, fizikai anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:10.75pt;margin-bottom:.0001pt;margin-left:4.1pt;text-align:justify;line-height:11.5pt;'><span style="font-size:13px;">- a rendel&eacute;s nem lett időben elk&uuml;ldve vagy nem lett &ouml;sszehangolva, emiatt nincs kellő hűtőrakt&aacute;r vagy egy&eacute;b rakt&aacute;r kapacit&aacute;s.</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.95pt;margin-bottom:.0001pt;margin-left:4.15pt;text-align:justify;'><span style="font-size:13px;">A konyhavezető folyamatosan figyeli a rakt&aacute;rk&eacute;szletet &eacute;s a rendel&eacute;seket ennek &eacute;s az &eacute;tlapnak a f&uuml;ggv&eacute;ny&eacute;ben adj&aacute;k le.</span></p>
            </td>
            <td style="width: 31.45pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.25pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.65pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.2pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.25pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.65pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="9" style="width: 765.2pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 17.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.75pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;line-height:10.7pt;'><strong><span style="font-size:13px;">4. &Aacute;RU&Aacute;TV&Eacute;TEL</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:14.6pt;'><span style="font-size:13px;">4.1</span></p>
            </td>
            <td style="width: 183.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;'><span style="font-size:13px;">Minős&eacute;gi k&ouml;vetelm&eacute;nyek r&ouml;gz&iacute;t&eacute;se</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.15pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.7pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:16.25pt;margin-bottom:.0001pt;margin-left:4.1pt;'><span style="font-size:13px;">B, K, F: mikrob&aacute;kkal, vegyi anyagokkal, fizikai anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.15pt;margin-right:4.05pt;margin-bottom:.0001pt;margin-left:4.1pt;line-height:98%;'><span style="font-size:13px;line-height:  98%;">- a besz&aacute;ll&iacute;t&oacute;k kiv&aacute;laszt&aacute;sa nem kellő k&ouml;r&uuml;ltekint&eacute;ssel t&ouml;rt&eacute;nik, a szolg&aacute;ltat&aacute;s nem megb&iacute;zhat&oacute;, nem egyenletes minős&eacute;gűek az alapanyagok, nem megfelelő a sz&aacute;ll&iacute;t&aacute;si</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.2pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.1pt;line-height:10.95pt;'><span style="font-size:13px;">k&ouml;r&uuml;lm&eacute;ny</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.65pt;margin-bottom:.0001pt;margin-left:4.15pt;text-align:justify;'><span style="font-size:13px;">Az alap-, seg&eacute;d-, nyersanyagok, illetve a vegyszerek besz&aacute;ll&iacute;t&oacute;inak kiv&aacute;laszt&aacute;sa p&aacute;ly&aacute;ztat&aacute;s &uacute;tj&aacute;n t&ouml;rt&eacute;nik. Minős&iacute;t&eacute;s&uuml;k rendszeres, probl&eacute;ma eset&eacute;n&nbsp;&uacute;j besz&aacute;ll&iacute;t&oacute; &nbsp;ker&uuml;l kiv&aacute;laszt&aacute;sra.</span></p>
            </td>
            <td style="width: 31.45pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.25pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.65pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.2pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.25pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 92.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.65pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:14.6pt;'><span style="font-size:13px;">4.2</span></p>
            </td>
            <td style="width: 183.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Nyomonk&ouml;vet&eacute;s</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.15pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.7pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:9.6pt;margin-bottom:.0001pt;margin-left:4.1pt;'><span style="font-size:13px;">B, K: mikrob&aacute;kkal, vegyi anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:5.45pt;margin-bottom:.0001pt;margin-left:4.1pt;line-height:11.5pt;'><span style="font-size:13px;">- sz&aacute;mla, sz&aacute;ll&iacute;t&oacute;lev&eacute;l nem &eacute;rkezik meg a term&eacute;kkel vagy pontatlan, illetve nem őrzik meg a helysz&iacute;nen</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.7pt;margin-bottom:.0001pt;margin-left:4.15pt;text-align:justify;'><span style="font-size:13px;">A sz&aacute;ml&aacute;t &eacute;s sz&aacute;ll&iacute;t&oacute;levelet 1 &eacute;ven kereszt&uuml;l megőrizz&uuml;k a konyh&aacute;n, a sz&aacute;ll&iacute;t&oacute;lev&eacute;l sz&aacute;m&aacute;t a c&iacute;mk&eacute;z&eacute;s sor&aacute;n felt&uuml;ntetj&uuml;k a term&eacute;keken. A sz&aacute;ll&iacute;t&oacute;lev&eacute;l hi&aacute;ny&aacute;ban nem vessz&uuml;k</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.15pt;text-align:justify;line-height:11.2pt;'><span style="font-size:13px;">&aacute;t a term&eacute;keket.</span></p>
            </td>
            <td style="width: 31.45pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.6pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.25pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.65pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.6pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.2pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.25pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.6pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.65pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 2.25pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:14.6pt;'><span style="font-size:13px;">4.3</span></p>
            </td>
            <td style="width: 183.55pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.4pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Minős&eacute;gi &aacute;tv&eacute;tel</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.15pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.7pt;border-top: none;border-left: none;border-bottom: 2.25pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:16.25pt;margin-bottom:.0001pt;margin-left:4.1pt;line-height:11.5pt;'><span style="font-size:13px;">B, K, F: mikrob&aacute;kkal, vegyi anyagokkal, fizikai anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.65pt;margin-right:1.7pt;margin-bottom:.0001pt;margin-left:4.15pt;'><span style="font-size:13px;">Sz&uacute;r&oacute;pr&oacute;baszerűen&nbsp; &nbsp;&nbsp;ellenőrizz&uuml;k&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;a sz&aacute;ll&iacute;t&oacute;j&aacute;rmű &eacute;s a sz&aacute;ll&iacute;t&oacute;&nbsp;szem&eacute;lyzet</span></p>
            </td>
            <td style="width: 31.45pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.25pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.65pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.2pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.25pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 28.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.65pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
    </tbody>
</table>

</div>


<div class="page">
<div style="height: 7rem;"></div>
<table style="margin-left: 16.15pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td rowspan="2" style="width: 41.4pt;border: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.55pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 183.6pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:72.6pt;margin-bottom:.0001pt;margin-left:73.95pt;text-align:center;'><span style="font-size:13px;">Művelet</span></p>
            </td>
            <td rowspan="2" style="width: 41.5pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.65pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 185.75pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:23.6pt;'><span style="font-size:13px;">Vesz&eacute;lycsoport: vesz&eacute;ly &eacute;s eredete</span></p>
            </td>
            <td colspan="5" style="width: 312.9pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  133.0pt;margin-bottom:.0001pt;margin-left:134.95pt;text-align:center;'><span style="font-size:13px;">D&ouml;nt&eacute;si fa</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:27.95pt;'><span style="font-size:13px;">Q1/Szab&aacute;lyoz&oacute; int&eacute;zked&eacute;s</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  6.6pt;margin-bottom:.0001pt;margin-left:8.9pt;text-align:  center;'><span style="font-size:13px;">Q2</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  11.35pt;margin-bottom:.0001pt;margin-left:0cm;text-align:  right;'><span style="font-size:13px;">Q3</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  9.25pt;margin-bottom:.0001pt;margin-left:11.2pt;text-align:  center;'><span style="font-size:13px;">Q4</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  10.2pt;margin-bottom:.0001pt;margin-left:12.45pt;text-align:center;'><span style="font-size:13px;">CCP</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:5.85pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">- sz&aacute;ll&iacute;t&aacute;si k&ouml;r&uuml;lm&eacute;nyek nem garant&aacute;lj&aacute;k az &aacute;ru minős&eacute;gi biztons&aacute;g&aacute;t</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.85pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">tisztas&aacute;g&aacute;t (&eacute;rz&eacute;kszervi ellenőrz&eacute;s), valamint az eg&eacute;szs&eacute;g&uuml;gyi k&ouml;nyv &eacute;rv&eacute;nyess&eacute;g&eacute;t.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.6pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.6pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:9.0pt;margin-right:5.9pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">&Eacute;rz&eacute;kszervi ellenőrz&eacute;s, term&eacute;khőm&eacute;rs&eacute;klet ellenőrz&eacute;s</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.6pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">2.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.6pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.75pt;margin-right:16.35pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B, K, F: mikrob&aacute;kkal, vegyi anyagokkal, fizikai anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.8pt;margin-right:7.8pt;margin-bottom:.0001pt;margin-left:4.05pt;line-height:11.5pt;'><span style="font-size:13px;">- a csomagol&aacute;s s&eacute;r&uuml;lt, indokolatlanul piszkos, az &eacute;rz&eacute;kszervi param&eacute;terek (pl. term&eacute;khőm&eacute;rs&eacute;klet) nem az &aacute;rura jellemzőek, a term&eacute;k hőm&eacute;rs&eacute;klete meghaladja a m&eacute;g elfogadhat&oacute; hat&aacute;r&eacute;rt&eacute;ket</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.6pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.85pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">Az&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&eacute;rz&eacute;kszervi&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;ellenőrz&eacute;st&nbsp;szemrev&eacute;telez&eacute;ssel, a term&eacute;k hőm&eacute;rs&eacute;klet&eacute;nek&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;ellenőrz&eacute;s&eacute;t&nbsp;maghőm&eacute;rő alkalmaz&aacute;s&aacute;val v&eacute;gezz&uuml;k. Nagyobb elt&eacute;r&eacute;s eset&eacute;n&nbsp;(pl. fagyasztott term&eacute;k hőm&eacute;rs&eacute;klete&nbsp;max.</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:2.05pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;line-height:  11.5pt;'><span style="font-size:13px;">-15 Celsius fok lehet) az &aacute;tv&eacute;telt megtagadjuk.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.6pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.6pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-right:14.3pt;text-align:  right;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 92.6pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 92.6pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:18px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Minős&eacute;g-megőrz&eacute;si idők ellenőrz&eacute;se</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">3.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:9.7pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B, K: mikrob&aacute;kkal, vegyi anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:13.85pt;margin-bottom:.0001pt;margin-left:4.05pt;line-height:11.5pt;'><span style="font-size:13px;">- a minős&eacute;g-megőrz&eacute;si / fogyaszthat&oacute;s&aacute;gi idő lej&aacute;rt, vagy nincs &ouml;sszhangban a tervezett felhaszn&aacute;l&aacute;ssal &ndash;</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">A&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;minős&eacute;g-megőrz&eacute;si/fogyaszthat&oacute;s&aacute;gi idő lej&aacute;rta eset&eacute;n&nbsp;egy&eacute;rtelműen visszautas&iacute;tjuk az &aacute;rut. Jelezz&uuml;k a probl&eacute;m&aacute;t az &aacute;ruforgalom fel&eacute;.&nbsp;T&ouml;bbsz&ouml;ri hiba eset&eacute;n&nbsp;a sz&aacute;ll&iacute;t&oacute;partnert kiz&aacute;rjuk a&nbsp;sz&aacute;ll&iacute;t&aacute;sb&oacute;l.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:  14.3pt;margin-bottom:.0001pt;margin-left:0cm;text-align:  right;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 29pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:14.6pt;'><span style="font-size:13px;">4.4</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 29pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.15pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Mennyis&eacute;gi &aacute;tv&eacute;tel</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 29pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 29pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:36.35pt;margin-bottom:.0001pt;margin-left:4.05pt;line-height:11.5pt;'><span style="font-size:13px;">- &eacute;lelmiszer-biztons&aacute;gi vesz&eacute;ly nem azonos&iacute;that&oacute;</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 29pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 29pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.05pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 29pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:1.65pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 29pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.2pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 29pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:14.6pt;'><span style="font-size:13px;">4.5</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:11px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;'><span style="font-size:13px;">Szakos&iacute;tott &aacute;tv&eacute;tel</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:16.35pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B, K, F: mikrob&aacute;kkal, vegyi anyagokkal, fizikai anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.35pt;margin-right:10.55pt;margin-bottom:.0001pt;margin-left:4.05pt;line-height:11.3pt;'><span style="font-size:13px;">- a k&uuml;l&ouml;nb&ouml;ző tisztas&aacute;gi fok&uacute; &aacute;ruk &aacute;tv&eacute;tele egyidőben t&ouml;rt&eacute;nik</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;line-height:  98%;'><span style="font-size:13px;line-height:98%;">K&uuml;l&ouml;nb&ouml;ző &aacute;rucsoportok &aacute;tv&eacute;tele időben elk&uuml;l&ouml;n&iacute;tve t&ouml;rt&eacute;nik. Az &aacute;tv&eacute;telt k&ouml;vetően&nbsp;az &aacute;tvevő eszk&ouml;z (m&eacute;rleg) fertőtlen&iacute;t&eacute;se,&nbsp;tiszt&iacute;t&aacute;sa</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;text-align:justify;line-height:11.45pt;'><span style="font-size:13px;">k&ouml;telező.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-right:14.3pt;text-align:  right;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 57.8pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:14.6pt;'><span style="font-size:13px;">4.6</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:9.25pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Csomagol&oacute; anyag</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:8.0pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B, F: mikrob&aacute;kkal, fizikai anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-0.1999999999999993px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">nem megfelelő sz&aacute;ll&iacute;t&oacute;j&aacute;rmű&nbsp;haszn&aacute;lata</span></li>
                    </ul>
                    <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:0.05000000000000071px;">
                            <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">szakos&iacute;tatlan&nbsp;&aacute;rusz&aacute;ll&iacute;t&aacute;s</span></li>
                            <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">az &aacute;ru nem megfelelő&nbsp;csomagol&aacute;sa</span></li>
                        </ul>
                    </div>
                </div>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:19px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.95pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Sz&aacute;ll&iacute;t&aacute;sra&nbsp; &nbsp; &nbsp;&nbsp;vonatkoz&oacute;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;elő&iacute;r&aacute;sok&nbsp;betart&aacute;sa</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.55pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.55pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-right:14.3pt;text-align:  right;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 81.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.55pt;'><strong><span style="font-size:14px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 17.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 17.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 17.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;line-height:10.95pt;'><span style="font-size:13px;">2.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 17.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;line-height:10.95pt;'><span style="font-size:13px;">K: vegyi anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 17.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.65pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">O&Eacute;TI enged&eacute;ly megl&eacute;te</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 17.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.75pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.1pt;text-align:  center;line-height:10.7pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 17.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.75pt;margin-right:  14.3pt;margin-bottom:.0001pt;margin-left:0cm;text-align:  right;line-height:10.7pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 17.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 17.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.75pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.75pt;text-align:  center;line-height:10.7pt;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
    </tbody>
</table>
</div>

<div class="page">
<div style="height: 8rem;"></div>
<table style="margin-left: 16.15pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td rowspan="2" style="width: 41.4pt;border: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.55pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 183.6pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:72.6pt;margin-bottom:.0001pt;margin-left:73.95pt;text-align:center;'><span style="font-size:13px;">Művelet</span></p>
            </td>
            <td rowspan="2" style="width: 41.5pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.65pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 185.75pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:23.6pt;'><span style="font-size:13px;">Vesz&eacute;lycsoport: vesz&eacute;ly &eacute;s eredete</span></p>
            </td>
            <td colspan="5" style="width: 312.9pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  133.0pt;margin-bottom:.0001pt;margin-left:134.95pt;text-align:center;'><span style="font-size:13px;">D&ouml;nt&eacute;si fa</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:27.95pt;'><span style="font-size:13px;">Q1/Szab&aacute;lyoz&oacute; int&eacute;zked&eacute;s</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  6.6pt;margin-bottom:.0001pt;margin-left:8.9pt;text-align:  center;'><span style="font-size:13px;">Q2</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  10.45pt;margin-bottom:.0001pt;margin-left:12.35pt;text-align:center;'><span style="font-size:13px;">Q3</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:12.2pt;'><span style="font-size:13px;">Q4</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  10.2pt;margin-bottom:.0001pt;margin-left:12.45pt;text-align:center;'><span style="font-size:13px;">CCP</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:29.45pt;margin-bottom:.0001pt;margin-left:4.05pt;line-height:11.5pt;'><span style="font-size:13px;">- nem enged&eacute;lyezett anyagb&oacute;l k&eacute;sz&uuml;lt csomagol&oacute;anyag</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.25pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:14.6pt;'><span style="font-size:13px;">4.7</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.25pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Tiszt&iacute;t&oacute;szerek, takar&iacute;t&oacute;eszk&ouml;z&ouml;k</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.25pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">3.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">K: vegyi anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:17.2pt;margin-bottom:.0001pt;margin-left:4.05pt;line-height:11.5pt;'><span style="font-size:13px;">- a fertőtlen&iacute;tőszerek minős&eacute;g megőrz&eacute;si ideje nem megfelelő</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Csak&nbsp; &nbsp; &nbsp;a&nbsp; &nbsp; &nbsp;&nbsp;szerződ&ouml;tt&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;partnerektől&nbsp;szerezhető be&nbsp;tiszt&iacute;t&oacute;szer,&nbsp;minden</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;line-height:11.5pt;'><span style="font-size:13px;">term&eacute;k &aacute;tv&eacute;tel sor&aacute;n ellenőrizz&uuml;k, a fertőtlen&iacute;tőszerek lej&aacute;rati d&aacute;tum&aacute;t.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.5pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.5pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:1.7pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 46.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.5pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="9" style="width: 765.15pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.6pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.95pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;'><strong><span style="font-size:13px;">5. T&aacute;rol&aacute;s</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:14.6pt;'><span style="font-size:13px;">5.1</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;'><span style="font-size:13px;">Szakos&iacute;tott t&aacute;rol&aacute;s</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:16.35pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B, K, F: mikrob&aacute;kkal, vegyi anyagokkal, fizikai anyagokkal val&oacute; szennyeződ&eacute;s</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-5.95px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">nincs megfelelő sz&aacute;m&uacute;&nbsp;hűtőberendez&eacute;s</span></li>
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">nyers &eacute;s k&eacute;sz k&uuml;l&ouml;nb&ouml;ző tisztas&aacute;gi fok&uacute;&nbsp;anyagok egy l&eacute;gt&eacute;rben t&ouml;rt&eacute;nő&nbsp;t&aacute;rol&aacute;sa</span></li>
                    </ul>
                    <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:0.05000000000000071px;">
                            <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">szennyezett helyen&nbsp;t&ouml;rt&eacute;nik a&nbsp;t&aacute;rol&aacute;s</span></li>
                        </ul>
                    </div>
                </div>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.75pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">Megfelelő sz&aacute;m&uacute; hűtőberendez&eacute;s alkalmaz&aacute;sa, az egyes hűtők feliratozva vannak, csak a megjel&ouml;lt term&eacute;kek t&aacute;rolhat&oacute;k benne. Csak megfelelően tiszta rakt&aacute;rakban t&ouml;rt&eacute;nhet a t&aacute;rol&aacute;s. A takar&iacute;t&aacute;s megt&ouml;rt&eacute;nt&eacute;t takar&iacute;t&aacute;s ellenőrző lapon</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:2.05pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;line-height:  11.5pt;'><span style="font-size:13px;">a hűtők &aacute;llapot&aacute;t a napi ellenőrz&eacute;si lapon dokument&aacute;ljuk.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:1.7pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 103.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 103.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:14.6pt;'><strong><span style="font-size:13px;">5.2</span></strong></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;'><strong><span style="font-size:13px;">Hűtve t&aacute;rol&aacute;s</span></strong></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B: mikrob&aacute;k szaporod&aacute;sa, toxintermel&eacute;s</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-5.95px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">helytelen rakt&aacute;roz&aacute;si k&ouml;r&uuml;lm&eacute;nyek, hőm&eacute;rs&eacute;klet</span></li>
                    </ul>
                    <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:0.05000000000000071px;">
                            <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">t&uacute;l hossz&uacute; t&aacute;rol&aacute;si&nbsp;idő</span></li>
                        </ul>
                    </div>
                </div>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.75pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">Az egyes term&eacute;kcsoportoknak megfelelő hőm&eacute;rs&eacute;kleteket a J&oacute; vend&eacute;gl&aacute;t&oacute; gyakorlatban le&iacute;rtaknak megfelelően betartjuk. A hűtőterek hőm&eacute;rs&eacute;klet&eacute;t műszakonk&eacute;nt 2-szer ellenőrizz&uuml;k a hűtőterek hőm&eacute;rs&eacute;klet ellenőrző lapj&aacute;n.</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.65pt;margin-right:5.5pt;margin-bottom:.0001pt;margin-left:32.15pt;text-indent:-23.8pt;line-height:11.5pt;'><strong><span style="font-size:13px;">HŰTŐTEREK HŐM&Eacute;RS&Eacute;KLET ELLENŐRZŐ LAPJA</span></strong></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:1.7pt;text-align:  center;'><strong><span style="font-size:13px;">I</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:15.2pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:6.85pt;margin-bottom:.0001pt;margin-left:9.6pt;text-align:center;'><strong><span style="font-size:13px;">CCP1</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong><span style="font-size:16px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:14.6pt;'><strong><span style="font-size:13px;">5.3</span></strong></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;'><strong><span style="font-size:13px;">Fagyasztva t&aacute;rol&aacute;s</span></strong></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B: mikrob&aacute;k szaporod&aacute;sa, toxintermel&eacute;s</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-5.95px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">helytelen rakt&aacute;roz&aacute;si k&ouml;r&uuml;lm&eacute;nyek, hőm&eacute;rs&eacute;klet</span></li>
                    </ul>
                    <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:0.05000000000000071px;">
                            <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">t&uacute;l hossz&uacute; t&aacute;rol&aacute;si&nbsp;idő</span></li>
                        </ul>
                    </div>
                </div>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.75pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">A&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;hűtőterek&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;hőm&eacute;rs&eacute;klet&eacute;t&nbsp;műszakonk&eacute;nt 2-szer ellenőrizz&uuml;k a hűtőterek hőm&eacute;rs&eacute;klet ellenőrző lapj&aacute;n. A saj&aacute;t fagyaszt&aacute;s&uacute; term&eacute;keket 1 h&oacute;napon kereszt&uuml;l lehet t&aacute;rolni, ezt a fagyasztott term&eacute;k nyilv&aacute;ntart&aacute;si lapon kell&nbsp;vezetni.</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.2pt;margin-right:5.5pt;margin-bottom:.0001pt;margin-left:32.15pt;text-indent:-23.8pt;line-height:11.3pt;'><strong><span style="font-size:13px;">HŰTŐTEREK HŐM&Eacute;RS&Eacute;KLET ELLENŐRZŐ LAPJA</span></strong></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong><span style="font-size:16px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong><span style="font-size:16px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:1.7pt;text-align:  center;'><strong><span style="font-size:13px;">I</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong><span style="font-size:16px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:15.2pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 109.4pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong><span style="font-size:16px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:6.85pt;margin-bottom:.0001pt;margin-left:9.6pt;text-align:center;'><strong><span style="font-size:13px;">CCP1</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.4pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:14.6pt;'><span style="font-size:13px;">5.4</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.4pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Sz&aacute;raz&aacute;ru</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.4pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">K, F: fizikai, vegyi anyagokkal</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;line-height:11.05pt;'><span style="font-size:13px;">A&nbsp; &nbsp; &nbsp;felbontott&nbsp; &nbsp;&nbsp;term&eacute;keket&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;minden</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;line-height:11.2pt;'><span style="font-size:13px;">esetben olyan m&oacute;don kell&nbsp;visszaz&aacute;rni,</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.65pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.65pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:1.7pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.65pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
    </tbody>
</table>
</div>



<div class="page">
<div style="height: 8rem;"></div>
<table style="margin-left: 16.15pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td rowspan="2" style="width: 41.4pt;border: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.55pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 183.6pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:72.6pt;margin-bottom:.0001pt;margin-left:73.95pt;text-align:center;'><span style="font-size:13px;">Művelet</span></p>
            </td>
            <td rowspan="2" style="width: 41.5pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.65pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 185.75pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:23.6pt;'><span style="font-size:13px;">Vesz&eacute;lycsoport: vesz&eacute;ly &eacute;s eredete</span></p>
            </td>
            <td colspan="5" style="width: 312.9pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  133.0pt;margin-bottom:.0001pt;margin-left:134.95pt;text-align:center;'><span style="font-size:13px;">D&ouml;nt&eacute;si fa</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  26.0pt;margin-bottom:.0001pt;margin-left:0cm;text-align:  right;'><span style="font-size:13px;">Q1/Szab&aacute;lyoz&oacute; int&eacute;zked&eacute;s</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  6.6pt;margin-bottom:.0001pt;margin-left:8.9pt;text-align:  center;'><span style="font-size:13px;">Q2</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:13.35pt;'><span style="font-size:13px;">Q3</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:12.2pt;'><span style="font-size:13px;">Q4</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  10.2pt;margin-bottom:.0001pt;margin-left:12.45pt;text-align:center;'><span style="font-size:13px;">CCP</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 40.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 40.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 40.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 40.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;line-height:11.0pt;'><span style="font-size:13px;">szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.0pt;margin-right:26.1pt;margin-bottom:.0001pt;margin-left:4.05pt;line-height:11.5pt;'><span style="font-size:13px;">- csomagol&aacute;s s&eacute;r&uuml;l&eacute;se, nyitottan t&aacute;rolt, felbontott&nbsp;&aacute;ru</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 40.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-right:26.1pt;text-align:  right;line-height:11.0pt;'><span style="font-size:13px;">hogy megv&eacute;dje a term&eacute;k &aacute;llag&aacute;t.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 40.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 40.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 40.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 40.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:14.6pt;'><span style="font-size:13px;">5.5</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.45pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:13.9pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Minős&eacute;g megőrz&eacute;si idők dokument&aacute;l&aacute;sa, nyomonk&ouml;vet&eacute;s</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B: mikrob&aacute;k szaporod&aacute;sa, toxintermel&eacute;s</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:0.05000000000000071px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">t&uacute;l hossz&uacute; t&aacute;rol&aacute;si&nbsp;idő</span></li>
                    </ul>
                    <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                        <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-0.1999999999999993px;">
                            <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">hi&aacute;nyz&oacute; adatok az&nbsp;azonos&iacute;t&aacute;shoz</span></li>
                        </ul>
                    </div>
                </div>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">A minős&eacute;gmegőrz&eacute;si időnek minden esetben szerepelni kell a term&eacute;ken. Bontott term&eacute;k &aacute;tcsomagol&aacute;sa eset&eacute;n saj&aacute;t c&iacute;mk&eacute;t kell haszn&aacute;lni, melyen szerepel a minős&eacute;g megőrz&eacute;si idő &eacute;s a sz&aacute;ll&iacute;t&oacute;lev&eacute;l sz&aacute;ma is a</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;text-align:justify;line-height:10.85pt;'><span style="font-size:13px;">nyomonk&ouml;vet&eacute;s miatt. FIFO-elv.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:14.6pt;'><span style="font-size:13px;">5.6</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;'><span style="font-size:13px;">Csomagol&oacute; anyag</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">F: fizikai anyagokkal szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;line-height:10.95pt;'><span style="font-size:13px;">- nem elz&aacute;rt helyen t&ouml;rt&eacute;nik a t&aacute;rol&aacute;s</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.85pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">A csomagol&oacute; anyagokat elz&aacute;rt helyen&nbsp;t&aacute;roljuk,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;nem&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&eacute;rintkezhetnek,</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;line-height:11.2pt;'><span style="font-size:13px;">szennyeződhetnek m&aacute;s term&eacute;kkel.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.25pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.25pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.25pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:14.6pt;'><span style="font-size:13px;">5.7</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;'><span style="font-size:13px;">Tiszt&iacute;t&oacute;szerek, takar&iacute;t&oacute;eszk&ouml;z&ouml;k</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">K: szennyezetts&eacute;g, szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">- tiszt&iacute;t&oacute;szerek t&uacute;lt&aacute;rol&aacute;sa</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.75pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">A tiszt&iacute;t&oacute;szerek t&aacute;rol&aacute;sa z&aacute;rt szekr&eacute;nyekben t&ouml;rt&eacute;nik. FIFO-elv alkalmaz&aacute;sa. Lej&aacute;rt tiszt&iacute;t&oacute;szert vesz&eacute;lyes hullad&eacute;kk&eacute;nt kezelj&uuml;k &eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;text-align:justify;line-height:10.95pt;'><span style="font-size:13px;">elsz&aacute;ll&iacute;tjuk.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td rowspan="3" style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 31.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td rowspan="3" style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 31.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 31.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 31.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B: mikrobiol&oacute;gia szennyezetts&eacute;g, szennyeződ&eacute;s</span></p>
            </td>
            <td rowspan="3" style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 31.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">A takar&iacute;t&oacute;eszk&ouml;z&ouml;ket szakos&iacute;tottan, abban a helyis&eacute;gben kell t&aacute;rolni, melynek takar&iacute;t&aacute;s&aacute;ra haszn&aacute;ljuk. Az eszk&ouml;z&ouml;ket meg kell jel&ouml;lni. Az eszk&ouml;z&ouml;ket takar&iacute;t&aacute;s v&eacute;g&eacute;n fertőtlen&iacute;teni kell, szennyezett, rossz &aacute;llapot&uacute; takar&iacute;t&oacute;eszk&ouml;z haszn&aacute;lata</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;text-align:justify;line-height:10.85pt;'><span style="font-size:13px;">tilos.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 31.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 31.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td rowspan="3" style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 31.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1.5pt solid black;padding: 0cm;height: 31.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.5pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 28.15pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.25pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">2.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 28.15pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.45pt;margin-right:7.75pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">- takar&iacute;t&oacute;eszk&ouml;z&ouml;k szakos&iacute;tott t&aacute;rol&aacute;sa nem val&oacute;sul meg</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 28.15pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.5pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1pt solid black;padding: 0cm;height: 28.15pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.5pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-bottom: none;border-left: none;border-image: initial;border-right: 1.5pt solid black;padding: 0cm;height: 28.15pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.5pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 30.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 30.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.3pt;margin-right:3.6pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">- takar&iacute;t&oacute;eszk&ouml;z&ouml;k szennyezett elt&eacute;tele, nem megfelelő &aacute;llapota</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 30.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 30.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 30.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td colspan="9" style="width: 765.15pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.95pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;'><strong><span style="font-size:13px;">6. Elők&eacute;sz&iacute;t&eacute;s</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 91.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:14.6pt;'><span style="font-size:13px;">6.1</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 91.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;'><span style="font-size:13px;">Csomagol&oacute; anyagok bont&aacute;sa</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 91.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 91.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:23.0pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B, K, F: mikrobiol&oacute;giai, k&eacute;miai, fizikai anyagokkal szennyeződ&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:13.85pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">- a csomagol&oacute;anyag k&uuml;lső szennyeződ&eacute;se eset&eacute;n, ha a bont&aacute;s előtt elmarad a csomagol&oacute;anyag megfelelő tiszt&iacute;t&aacute;sa</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 91.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:8.3pt;margin-bottom:.0001pt;margin-left:10.05pt;'><span style="font-size:13px;">Csomagol&oacute; anyagok bont&aacute;sa csak a rakt&aacute;rban t&ouml;rt&eacute;nhet, figyel&uuml;nk a szennyeződ&eacute;s visszamarad&aacute;sra. A teljesen fel nem haszn&aacute;lt, bontott csomagol&aacute;sokat, a term&eacute;k v&eacute;delme &eacute;rdek&eacute;ben gondosan visszaz&aacute;rjuk</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:8.05pt;margin-bottom:.0001pt;margin-left:10.05pt;line-height:11.3pt;'><span style="font-size:13px;">(visszateker&eacute;s, begumiz&aacute;s, csipesz alkalmaz&aacute;sa).</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 91.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 91.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 91.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 91.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.4pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:14.6pt;'><span style="font-size:13px;">6.2</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.25pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Kim&eacute;r&eacute;s</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.4pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.75pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B: mikrob&aacute;k szaporod&aacute;sa, toxintermel&eacute;s</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:1.35pt;margin-bottom:.0001pt;margin-left:17.25pt;text-indent:-13.0pt;line-height:11.3pt;'><span style="font-size:13px;">A hűt&eacute;st ig&eacute;nylő term&eacute;kek kim&eacute;r&eacute;s&eacute;t a lehető leggyorsabban v&eacute;gezz&uuml;k.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.65pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.65pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 23.2pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:8.65pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
    </tbody>
</table>
</div>



<div class="page">
<div style="height: 10rem;"></div>
<table style="float: left;border-collapse:collapse;border:none;margin-left:4.8pt;margin-right:4.8pt;">
    <tbody>
        <tr>
            <td rowspan="2" style="width: 41.4pt;border: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.55pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 183.6pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:72.6pt;margin-bottom:.0001pt;margin-left:73.95pt;text-align:center;'><span style="font-size:13px;">Művelet</span></p>
            </td>
            <td rowspan="2" style="width: 41.5pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.65pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 185.75pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:23.6pt;'><span style="font-size:13px;">Vesz&eacute;lycsoport: vesz&eacute;ly &eacute;s eredete</span></p>
            </td>
            <td colspan="5" style="width: 312.9pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  133.0pt;margin-bottom:.0001pt;margin-left:134.95pt;text-align:center;'><span style="font-size:13px;">D&ouml;nt&eacute;si fa</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:27.95pt;'><span style="font-size:13px;">Q1/Szab&aacute;lyoz&oacute; int&eacute;zked&eacute;s</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  6.6pt;margin-bottom:.0001pt;margin-left:8.9pt;text-align:  center;'><span style="font-size:13px;">Q2</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:13.35pt;'><span style="font-size:13px;">Q3</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:12.2pt;'><span style="font-size:13px;">Q4</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  10.2pt;margin-bottom:.0001pt;margin-left:12.45pt;text-align:center;'><span style="font-size:13px;">CCP</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:31.9pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">- a hűt&eacute;st ig&eacute;nylő term&eacute;kek elh&uacute;z&oacute;d&oacute; kim&eacute;r&eacute;se eset&eacute;n</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:7.9pt;margin-bottom:.0001pt;margin-left:10.05pt;text-align:center;'><span style="font-size:13px;">&Uuml;gyel&uuml;nk r&aacute;, hogy az elők&eacute;sz&iacute;t&eacute;s sor&aacute;n a hűt&eacute;st ig&eacute;nylő term&eacute;kek</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:2.8pt;margin-bottom:.0001pt;margin-left:5.05pt;text-align:center;text-indent:-.15pt;line-height:11.5pt;'><span style="font-size:13px;">maximum 1 &oacute;r&aacute;t tart&oacute;zkodjanak szobahőm&eacute;rs&eacute;kleten a hőkezel&eacute;s előtt.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 45.75pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">2.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.55pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">K: hib&aacute;s &ouml;sszet&eacute;tel (di&eacute;ta)</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:0.05000000000000071px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">m&eacute;rleghiba</span></li>
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">dolgoz&oacute;&nbsp;hib&aacute;ja</span></li>
                    </ul>
                </div>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:16px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:9.5pt;margin-bottom:.0001pt;margin-left:65.5pt;text-indent:-53.3pt;'><span style="font-size:13px;">Anyagkiszabat, kalkul&aacute;ci&oacute; szerinti kim&eacute;r&eacute;s</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 52.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 52.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">3.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:14.7pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">K: vegyi anyagok bejut&aacute;sa a hat&aacute;r&eacute;rt&eacute;ken fel&uuml;li m&eacute;rt&eacute;kben</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:4.45pt;margin-bottom:.0001pt;margin-left:4.05pt;line-height:11.5pt;'><span style="font-size:13px;">- eg&eacute;szs&eacute;gre nem k&ouml;z&ouml;mb&ouml;s, azaz adagol&aacute;si hat&aacute;r&eacute;rt&eacute;kekkel rendelkező anyagok helytelen kim&eacute;r&eacute;se k&ouml;vetkezt&eacute;ben</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:11px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:9.5pt;margin-bottom:.0001pt;margin-left:65.5pt;text-indent:-53.3pt;'><span style="font-size:13px;">Anyagkiszabat, kalkul&aacute;ci&oacute; szerinti kim&eacute;r&eacute;s</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.6pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.6pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 69.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.6pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:14.6pt;'><span style="font-size:13px;">6.3</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong><span style="font-size:18px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;'><span style="font-size:13px;">Fagyasztott term&eacute;k felenged&eacute;se</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B:&nbsp;</span><span style="font-size:13px;">mikrob&aacute;k szaporod&aacute;sa,&nbsp;toxintermel&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:18.3pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">- nem megfelelő m&oacute;don, hőm&eacute;rs&eacute;kleten, vagy t&uacute;l hossz&uacute; ideig t&ouml;rt&eacute;nő&nbsp;felenged&eacute;s</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">A term&eacute;kek felengedtet&eacute;se hűtőt&eacute;rben 0-5 Celsius fok&nbsp;k&ouml;z&ouml;tt t&ouml;rt&eacute;nhet. Teljes fel&uuml;let&eacute;n becsomagolt term&eacute;ket, mely nem haladja meg a 2 kg-ot foly&oacute;v&iacute;zzel, vagy 20 Celsius fok&nbsp;alatti</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:2.3pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;line-height:  11.5pt;'><span style="font-size:13px;">&aacute;ll&oacute; v&iacute;zben lehet olvasztani. Az ut&oacute;bbi esetben f&eacute;l &oacute;r&aacute;nk&eacute;nt cser&eacute;lj&uuml;k a vizet.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 69.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 69.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.4pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:16px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:14.6pt;'><span style="font-size:13px;">6.4</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;'><span style="font-size:13px;">Toj&aacute;s fertőtlen&iacute;t&eacute;se, t&ouml;r&eacute;se</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:16px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B: mikrob&aacute;k szaporod&aacute;sa</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;line-height:10.95pt;'><span style="font-size:13px;">- az elők&eacute;sz&iacute;t&eacute;si folyamat elh&uacute;z&oacute;d&aacute;sa</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">A&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;felt&ouml;rt&nbsp; &nbsp; &nbsp; &nbsp;toj&aacute;sokat&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;azonnal felhaszn&aacute;ljuk, vagy hűtőben&nbsp;t&aacute;roljuk</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;line-height:11.2pt;'><span style="font-size:13px;">maximum 3 &oacute;r&aacute;n kereszt&uuml;l.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 91.9pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 91.9pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width:41.5pt;border-top:none;border-left:none;border-bottom:  solid black 1.0pt;border-right:solid black 1.0pt;padding:0cm 0cm 0cm 0cm;height:91.9pt;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.2pt;text-align:center;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">2.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 91.9pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:16.4pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">F: fizikai anyagokkal szennyeződ&eacute;s (toj&aacute;sh&eacute;j)</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-0.1999999999999993px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">nem megfelelő t&ouml;r&eacute;si elj&aacute;r&aacute;s</span></li>
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">nem megfelelő tiszt&iacute;t&aacute;si&nbsp;elj&aacute;r&aacute;s</span></li>
                    </ul>
                </div>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 91.9pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.65pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">A&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;toj&aacute;s&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;elők&eacute;sz&iacute;t&eacute;se&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;a z&ouml;lds&eacute;g-elők&eacute;sz&iacute;tőben t&ouml;rt&eacute;nik elk&uuml;l&ouml;n&iacute;tett asztalon &eacute;s megjel&ouml;lt eszk&ouml;z&ouml;kkel. A c&eacute;g&uuml;nk &oacute;zonnal kezelt fertőtlen&iacute;tett toj&aacute;st haszn&aacute;l. A fertőtlen&iacute;t&eacute;s ez&eacute;rt csak abban az esetben sz&uuml;ks&eacute;ges, amennyiben t&ouml;r&ouml;tt toj&aacute;st tartalmaz a t&aacute;lca, ebben&nbsp;az esetben az elők&eacute;sz&iacute;tőben kihelyezett toj&aacute;sfertőtlen&iacute;t&eacute;si utas&iacute;t&aacute;s alapj&aacute;n kl&oacute;rtablett&aacute;s oldattal t&ouml;rt&eacute;nik&nbsp;a</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;text-align:justify;line-height:10.95pt;'><span style="font-size:13px;">fertőtlen&iacute;t&eacute;s.</span></p>
            </td>
            <td style="width:31.4pt;border-top:none;border-left:none;border-bottom:  solid black 1.0pt;border-right:solid black 1.0pt;padding:0cm 0cm 0cm 0cm;height:91.9pt;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.45pt;text-align:center;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width:38.6pt;border-top:none;border-left:none;border-bottom:  solid black 1.0pt;border-right:solid black 1.0pt;padding:0cm 0cm 0cm 0cm;height:91.9pt;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.45pt;text-align:center;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width:36.2pt;border-top:none;border-left:none;border-bottom:  solid black 1.0pt;border-right:solid black 1.0pt;padding:0cm 0cm 0cm 0cm;height:91.9pt;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;text-align:center;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width:45.2pt;border-top:none;border-left:none;border-bottom:  solid black 1.0pt;border-right:solid black 1.5pt;padding:0cm 0cm 0cm 0cm;height:91.9pt;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.45pt;text-align:center;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
    </tbody>
</table>
</div>

<div class="page">
<div style="height: 10rem;"></div>
<table style="float: left;border-collapse:collapse;border:none;margin-left:4.8pt;margin-right:4.8pt;">
    <tbody>
        <tr>
            <td style="width: 41.4pt;border-width: 1pt 1pt 1.5pt 1.5pt;border-color: black;border-style: solid;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:14.6pt;'><span style="font-size:13px;">6.5</span></p>
            </td>
            <td style="width: 183.6pt;border-top: 1pt solid black;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.4pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Friss &eacute;s mirelit z&ouml;lds&eacute;gek, gy&uuml;m&ouml;lcs&ouml;k elők&eacute;sz&iacute;t&eacute;se</span></p>
            </td>
            <td style="width: 41.5pt;border-top: 1pt solid black;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: 1pt solid black;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:7.8pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B, K, F: mikrobiol&oacute;giai, k&eacute;miai, fizikai szennyeződ&eacute;sek visszamarad&aacute;sa (pen&eacute;szes, roncsolt darabok, k&uuml;lső szennyeződ&eacute;sek, stb.)</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:6.95pt;margin-bottom:.0001pt;margin-left:4.05pt;line-height:11.5pt;'><span style="font-size:13px;">- nem megfelelő v&aacute;logat&aacute;s, mechanikai tiszt&iacute;t&aacute;s, mos&aacute;s</span></p>
            </td>
            <td style="width: 161.5pt;border-top: 1pt solid black;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.65pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">A z&ouml;lds&eacute;gelők&eacute;sz&iacute;t&eacute;s kiz&aacute;r&oacute;lag a z&ouml;lds&eacute;gelők&eacute;sz&iacute;tőben t&ouml;rt&eacute;nhet.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F&ouml;ldes &aacute;ru &eacute;s tiszt&iacute;tott &aacute;ru egy időben nem tart&oacute;zkodhat az elők&eacute;sz&iacute;tőben. Csak a megfelelően jel&ouml;lt eszk&ouml;z&ouml;k haszn&aacute;lhat&oacute;ak a tiszt&iacute;t&aacute;sra, mos&aacute;sra. A konyhak&eacute;szen az &uuml;zembe ker&uuml;lő z&ouml;lds&eacute;geket is alapos &aacute;tmos&aacute;st</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.4pt;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">k&ouml;vetően haszn&aacute;ljuk fel.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: 1pt solid black;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: 1pt solid black;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: 1pt solid black;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: 1pt solid black;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 28.95pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 112.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-right:8.85pt;text-align:  right;'><span style="font-size:13px;">6.6.</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 112.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:21px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:9.8pt;'><span style="font-size:13px;">&nbsp;</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:9.8pt;'><span style="font-size:13px;">H&uacute;selők&eacute;sz&iacute;t&eacute;s</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 112.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.15pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 112.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:16.35pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B: mikrob&aacute;k szaporod&aacute;sa, toxintermel&eacute;s, keresztszennyez&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:3.85pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">- egy időben t&ouml;rt&eacute;nik a baromfi &eacute;s a tőkeh&uacute;s elők&eacute;sz&iacute;t&eacute;se</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 112.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.65pt;margin-right:5.1pt;margin-bottom:.0001pt;margin-left:6.95pt;text-align:justify;'><span style="font-size:13px;">Baromfi &eacute;s tőkeh&uacute;s egyidejű elők&eacute;sz&iacute;t&eacute;se tilos!</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:3.25pt;margin-right:4.6pt;margin-bottom:.0001pt;margin-left:6.95pt;text-align:justify;line-height:98%;'><span style="font-size:13px;line-height:  98%;">A k&uuml;l&ouml;nb&ouml;ző t&iacute;pus&uacute; h&uacute;sok elők&eacute;sz&iacute;t&eacute;se k&ouml;z&ouml;tt fertőtlen&iacute;tő takar&iacute;t&aacute;st v&eacute;gz&uuml;nk.</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:3.3pt;margin-right:4.7pt;margin-bottom:.0001pt;margin-left:6.95pt;text-align:justify;line-height:98%;'><span style="font-size:13px;line-height:  98%;">A szakos&iacute;t&aacute;s szab&aacute;lyai a munkaruha &eacute;s eszk&ouml;zhaszn&aacute;latra is k&ouml;telezők. Csak sz&iacute;nk&oacute;ddal jel&ouml;lt k&eacute;st &eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:6.95pt;text-align:justify;line-height:  10.95pt;'><span style="font-size:13px;">v&aacute;g&oacute;deszk&aacute;t haszn&aacute;lunk.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 112.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 112.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 112.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 112.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:9.25pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">2.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:23.0pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B, K, F: mikrobiol&oacute;giai, k&eacute;miai, fizikai szennyeződ&eacute;sek visszamarad&aacute;sa</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:23.3pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">- nem megfelelő a mechanikai tiszt&iacute;t&aacute;s, mos&aacute;s</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.65pt;margin-right:4.85pt;margin-bottom:.0001pt;margin-left:6.95pt;text-align:justify;'><span style="font-size:13px;">A h&uacute;sok mos&aacute;s&aacute;t, tiszt&iacute;t&aacute;s&aacute;t a jel&ouml;lt eszk&ouml;z&ouml;kkel v&eacute;gezz&uuml;k. Tilos meleg v&iacute;zben h&uacute;st tiszt&iacute;tani.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:9.5pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:9.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 75.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:9.5pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:9.25pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">3.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:34.7pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B: mikrobiol&oacute;giai szennyeződ&eacute;sek a t&uacute;lt&aacute;rol&aacute;s miatt</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:34.15pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">- az elők&eacute;sz&iacute;tett term&eacute;k nincs ell&aacute;tva jel&ouml;l&eacute;ssel</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.65pt;margin-right:4.7pt;margin-bottom:.0001pt;margin-left:6.95pt;text-align:justify;'><span style="font-size:13px;">Az elők&eacute;sz&iacute;tett &aacute;rura &aacute;tvissz&uuml;k az eredeti jel&ouml;l&eacute;st, illetve az azonos&iacute;t&aacute;st biztos&iacute;t&oacute; felirattal (k&oacute;ddal) l&aacute;tjuk el (megnevez&eacute;s,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;mennyis&eacute;g,&nbsp;elők&eacute;sz&iacute;t&eacute;si idő, sz&aacute;mlasz&aacute;m, ill. az eredeti&nbsp;jel&ouml;l&eacute;s).</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:9.5pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:9.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 75.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 75.3pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:9.5pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 34.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 34.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 34.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:16px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">4.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 34.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;line-height:11.15pt;'><span style="font-size:13px;">B: mikrob&aacute;k szaporod&aacute;sa, toxintermel&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;line-height:11.4pt;'><span style="font-size:13px;">- nem megfelelő dar&aacute;l&aacute;s</span></p>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 34.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;line-height:97%;'><span style="font-size:13px;line-height:97%;">Dar&aacute;lt h&uacute;s a felhaszn&aacute;l&aacute;s napj&aacute;n lehet dar&aacute;lni, kiemelt kock&aacute;zat&uacute; term&eacute;kk&eacute;nt</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;line-height:10.95pt;'><span style="font-size:13px;">kezelj&uuml;k.</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 34.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 34.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 34.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 34.5pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.25pt;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  9.95pt;margin-bottom:.0001pt;margin-left:0cm;text-align:  right;'><span style="font-size:13px;">6.7</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong><span style="font-size:11px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">Fagyaszt&aacute;s</span></p>
            </td>
            <td style="width: 41.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.75pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:23.0pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B, K, F: mikrobiol&oacute;giai, k&eacute;miai, fizikai szennyeződ&eacute;sek visszamarad&aacute;sa</span></p>
                <div style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'>
                    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:-0.1999999999999993px;">
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">nem megfelelően&nbsp;elők&eacute;sz&iacute;tett&nbsp;term&eacute;k</span></li>
                        <li style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">hi&aacute;nyz&oacute; jel&ouml;l&eacute;sből eredő&nbsp;t&uacute;lt&aacute;rol&aacute;s</span></li>
                    </ul>
                </div>
            </td>
            <td style="width: 161.5pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.8pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">A term&eacute;keket nem lehet eredeti csomagol&aacute;sban fagyasztani. Az eredeti c&iacute;mk&eacute;t el kell t&aacute;vol&iacute;tani &eacute;s &uacute;j c&iacute;mk&eacute;vel kell ell&aacute;tni a term&eacute;ket. &nbsp;Ezen</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;text-align:justify;line-height:10.95pt;'><span style="font-size:13px;">felt&uuml;ntetj&uuml;k a term&eacute;k nev&eacute;t,&nbsp;fagyaszt&aacute;s</span></p>
            </td>
            <td style="width: 31.4pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:16.15pt;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 57.55pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;'><strong><span style="font-size:15px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
    </tbody>
</table>
</div>

<div class="page">
<div style="height: 10rem;"></div>
<table style="margin-left: 16.15pt;border-collapse:collapse;border:none;">
    <tbody>
        <tr>
            <td rowspan="2" style="width: 41.4pt;border: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.55pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 183.6pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:72.6pt;margin-bottom:.0001pt;margin-left:73.95pt;text-align:center;'><span style="font-size:13px;">Művelet</span></p>
            </td>
            <td rowspan="2" style="width: 41.55pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:3.65pt;'><span style="font-size:13px;">Sorsz&aacute;m</span></p>
            </td>
            <td rowspan="2" style="width: 185.8pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:20px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:23.6pt;'><span style="font-size:13px;">Vesz&eacute;lycsoport: vesz&eacute;ly &eacute;s eredete</span></p>
            </td>
            <td colspan="5" style="width: 313.1pt;border-top: 1.5pt solid black;border-right: 1.5pt solid black;border-bottom: 1.5pt solid black;border-image: initial;border-left: none;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  133.0pt;margin-bottom:.0001pt;margin-left:134.95pt;text-align:center;'><span style="font-size:13px;">D&ouml;nt&eacute;si fa</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 161.55pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:27.95pt;'><span style="font-size:13px;">Q1/Szab&aacute;lyoz&oacute; int&eacute;zked&eacute;s</span></p>
            </td>
            <td style="width: 31.45pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  6.6pt;margin-bottom:.0001pt;margin-left:8.9pt;text-align:  center;'><span style="font-size:13px;">Q2</span></p>
            </td>
            <td style="width: 38.65pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  11.35pt;margin-bottom:.0001pt;margin-left:0cm;text-align:  right;'><span style="font-size:13px;">Q3</span></p>
            </td>
            <td style="width: 36.25pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  9.25pt;margin-bottom:.0001pt;margin-left:11.2pt;text-align:  center;'><span style="font-size:13px;">Q4</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.7pt;margin-right:  10.2pt;margin-bottom:.0001pt;margin-left:12.45pt;text-align:center;'><span style="font-size:13px;">CCP</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 41.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 185.8pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 161.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.85pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">d&aacute;tum&aacute;t, sz&aacute;ll&iacute;t&oacute;lev&eacute;l sz&aacute;m&aacute;t, minős&eacute;g-megőrz&eacute;si időt. Fagyasztott term&eacute;k ny&iacute;lv&aacute;ntart&aacute;si lapon dokument&aacute;ljuk a fagyasztott term&eacute;keket. max 1,5kg-os csomagban konyhak&eacute;sz term&eacute;keket fagyasztunk.</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;text-align:justify;line-height:10.85pt;'><span style="font-size:13px;">Dar&aacute;lt h&uacute;st fagyasztani tilos!</span></p>
            </td>
            <td style="width: 31.45pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 38.65pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 36.25pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 80.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.25pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:14.6pt;'><span style="font-size:13px;">6.8</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong><span style="font-size:19px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;'><span style="font-size:13px;">Tiszt&iacute;t&aacute;s, mosogat&aacute;s</span></p>
            </td>
            <td style="width: 41.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.25pt;margin-right:  13.25pt;margin-bottom:.0001pt;margin-left:15.05pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.8pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B: mikrob&aacute;k szaporod&aacute;sa, toxintermel&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">- nem megfelelő tiszt&iacute;t&aacute;s, mosogat&aacute;s</span></p>
            </td>
            <td style="width: 161.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:1.75pt;margin-bottom:.0001pt;margin-left:4.05pt;text-align:justify;'><span style="font-size:13px;">Az &aacute;ltal&aacute;nos vesz&eacute;lyekn&eacute;l le&iacute;rtak betart&aacute;sa. Az elők&eacute;sz&iacute;tő helyis&eacute;gekből tilos&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;eszk&ouml;z&ouml;ket&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;kivinni,</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:4.05pt;text-align:justify;line-height:10.95pt;'><span style="font-size:13px;">mosogat&aacute;sukat helyben kell v&eacute;gezni.</span></p>
            </td>
            <td style="width: 31.45pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.5pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.65pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.5pt;margin-right:  14.3pt;margin-bottom:.0001pt;margin-left:0cm;text-align:  right;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.25pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 46.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 46.05pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:7.5pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="9" style="width: 27cm;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.95pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;'><strong><span style="font-size:13px;">7. &Eacute;telk&eacute;sz&iacute;t&eacute;s</span></strong></p>
            </td>
        </tr>
        <tr>
            <td colspan="9" style="width: 27cm;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 19.85pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:3.6pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:3.55pt;'><span style="font-size:13px;">7.1. Meleg &eacute;telk&eacute;sz&iacute;t&eacute;s</span></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 60.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:13.65pt;'><span style="font-size:13px;">7.1.1</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 60.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:9.8pt;'><span style="font-size:13px;">alapanyagok</span></p>
            </td>
            <td style="width: 41.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 60.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.3pt;'><strong><span style="font-size:13px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.05pt;margin-right:  11.75pt;margin-bottom:.0001pt;margin-left:16.45pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.8pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 60.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B: mikrob&aacute;k szaporod&aacute;sa, toxintermel&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:3.15pt;margin-right:10.35pt;margin-bottom:.0001pt;margin-left:9.8pt;'><span style="font-size:13px;">- rossz &eacute;rz&eacute;kszervi megjelen&eacute;sű, romlott, lej&aacute;rt fogyaszthat&oacute;s&aacute;gi idejű alapanyag ker&uuml;l felhaszn&aacute;l&aacute;sra &ndash;</span></p>
            </td>
            <td style="width: 161.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 60.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.75pt;margin-right:4.7pt;margin-bottom:.0001pt;margin-left:6.95pt;text-align:justify;line-height:98%;'><span style="font-size:13px;line-height:98%;">Csak megfelelő &eacute;rz&eacute;kszervi tulajdons&aacute;g&uacute;, lej&aacute;rati időn bel&uuml;li alapanyagokat haszn&aacute;lunk fel. Jel&ouml;letlen term&eacute;k nem ker&uuml;l</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.2pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:6.95pt;text-align:justify;line-height:  10.95pt;'><span style="font-size:13px;">felhaszn&aacute;l&aacute;sra.</span></p>
            </td>
            <td style="width: 31.45pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 60.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.65pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 60.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-right:14.3pt;text-align:  right;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.25pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 60.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 60.45pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong><span style="font-size:17px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 74.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:13.65pt;'><span style="font-size:13px;">7.1.2</span></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 74.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:0cm;margin-bottom:.0001pt;margin-left:9.8pt;'><span style="font-size:13px;">&ouml;ssze&aacute;ll&iacute;t&aacute;s</span></p>
            </td>
            <td style="width: 41.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 74.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.4pt;margin-right:  11.75pt;margin-bottom:.0001pt;margin-left:16.45pt;text-align:center;'><span style="font-size:13px;">2.</span></p>
            </td>
            <td style="width: 185.8pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 74.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:23.0pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B, K, F: mikrobiol&oacute;giai, k&eacute;miai, fizikai szennyeződ&eacute;sek visszamarad&aacute;sa</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:6.05pt;margin-right:9.45pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">- az &ouml;ssze&aacute;ll&iacute;t&aacute;s sor&aacute;n az &eacute;lelmiszer szem&eacute;lytől, illetve eszk&ouml;ztől szennyeződik</span></p>
            </td>
            <td style="width: 161.55pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 74.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.65pt;margin-right:4.6pt;margin-bottom:.0001pt;margin-left:6.95pt;text-align:justify;'><span style="font-size:13px;">Az &ouml;ssze&aacute;ll&iacute;t&aacute;si tev&eacute;kenys&eacute;get tiszta k&ouml;rnyezetben,&nbsp;&nbsp;fertőz&eacute;s-mentes&nbsp;eszk&ouml;z&ouml;kkel &eacute;s megfelelő szem&eacute;lyi higi&eacute;nia mellett, a lehető leggyorsabban&nbsp;v&eacute;gezz&uuml;k.</span></p>
            </td>
            <td style="width: 31.45pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 74.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:9.0pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 38.65pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 74.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:9.0pt;margin-right:  14.3pt;margin-bottom:.0001pt;margin-left:0cm;text-align:  right;'><strong><span style="font-size:13px;">N</span></strong></p>
            </td>
            <td style="width: 36.25pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1pt solid black;padding: 0cm;height: 74.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><span style="font-size:13px;">&nbsp;</span></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 74.35pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:9.0pt;margin-right:  0cm;margin-bottom:.0001pt;margin-left:2.75pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
        </tr>
        <tr>
            <td style="width: 41.4pt;border-top: none;border-left: 1.5pt solid black;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 132.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:13.65pt;'><strong><span style="font-size:13px;">7.1.3</span></strong></p>
            </td>
            <td style="width: 183.6pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 132.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong><span style="font-size:12px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:9.8pt;'><strong><span style="font-size:13px;">hőkezel&eacute;s (p&aacute;rol&aacute;s, főz&eacute;s, s&uuml;t&eacute;s, stb.)</span></strong></p>
            </td>
            <td style="width: 41.55pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 132.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.35pt;'><strong><span style="font-size:11px;">&nbsp;</span></strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:11.75pt;margin-bottom:.0001pt;margin-left:16.45pt;text-align:center;'><span style="font-size:13px;">1.</span></p>
            </td>
            <td style="width: 185.8pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 132.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:5.5pt;margin-right:40.25pt;margin-bottom:.0001pt;margin-left:4.05pt;'><span style="font-size:13px;">B: mikrob&aacute;k szaporod&aacute;sa, t&uacute;l&eacute;l&eacute;se, toxintermel&eacute;s</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:3.2pt;margin-right:2.25pt;margin-bottom:.0001pt;margin-left:9.8pt;line-height:100%;'><span style="font-size:13px;line-height:  100%;">- a hőkezel&eacute;s nem megfelelő hőm&eacute;rs&eacute;kleten &eacute;s ideig t&ouml;rt&eacute;nik, nem terjed ki a term&eacute;k teljes&nbsp;mennyis&eacute;g&eacute;re</span></p>
            </td>
            <td style="width: 161.55pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 132.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:2.65pt;margin-right:4.55pt;margin-bottom:.0001pt;margin-left:6.95pt;text-align:justify;'><span style="font-size:13px;">Az &eacute;lelmiszer-biztons&aacute;gi &eacute;s &eacute;lvezeti krit&eacute;riumok teljes&iacute;t&eacute;s&eacute;hez sz&uuml;ks&eacute;ges hőmennyis&eacute;get (hőm&eacute;rs&eacute;klet, idő) minden &eacute;telk&eacute;sz&iacute;t&eacute;sn&eacute;l biztos&iacute;tjuk. A tapasztalati &uacute;ton meg&aacute;llap&iacute;tott hőm&eacute;rs&eacute;kleteket &eacute;s időket alkalmazzuk, &uuml;gyelve arra, hogy a hőkezel&eacute;s a term&eacute;k teljes eg&eacute;sz&eacute;re kiterjedjen.</span></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:3.05pt;margin-right:4.85pt;margin-bottom:.0001pt;margin-left:6.95pt;text-align:justify;line-height:11.5pt;'><span style="font-size:13px;">Sz&uacute;r&oacute;pr&oacute;baszerűen, maghőm&eacute;rővel ellenőrizz&uuml;k a term&eacute;k belsej&eacute;nek</span></p>
            </td>
            <td style="width: 31.45pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 132.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.1pt;text-align:  center;'><strong><span style="font-size:13px;">I</span></strong></p>
            </td>
            <td style="width: 38.65pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 132.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:1.65pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
            <td style="width: 36.25pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1pt solid black;padding: 0cm;height: 132.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-left:2.2pt;text-align:  center;'><strong><span style="font-size:13px;">-</span></strong></p>
            </td>
            <td style="width: 45.2pt;border-top: none;border-left: none;border-bottom: 1.5pt solid black;border-right: 1.5pt solid black;padding: 0cm;height: 132.65pt;vertical-align: top;">
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:.1pt;'><strong>&nbsp;</strong></p>
                <p style='margin:0cm;font-size:15px;font-family:"Times New Roman",serif;margin-top:0cm;margin-right:6.85pt;margin-bottom:.0001pt;margin-left:9.6pt;text-align:center;'><strong><span style="font-size:13px;">CCP2</span></strong></p>
            </td>
        </tr>
    </tbody>
</table>
</div>

<div class="page">
<div style="height: 10rem;"></div>

</div>

<div class="page">
<div style="height: 10rem;"></div>
</div>
    </body>
  </html>
`;

  return html;
};
