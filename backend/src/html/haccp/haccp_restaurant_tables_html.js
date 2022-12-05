const { CompanyCategoryTypes } = require("../../enums/enums");
const enums = require("../../enums/enums");
exports.html = (data) => {
  let hasEgg = data.haccp_egg.split("###").filter((egg) => {
    return egg === "freshEgg" || egg === "disinfectedEgg";
  });
  let category = CompanyCategoryTypes[data.haccp_company_category];
  let html = `
    <div class="page">
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
        
      </table>
    </div>
  
    <div style="height: 4rem;"></div>
    <div class="page">
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
  
    <div style="height: 5rem;"></div>
    <div class="page">
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
          <td>1.</td>
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


    <div style="height: 5rem;"></div>
    <div class="page">
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
            6. Előkészítés</b>
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

<div style="height: 10rem;"></div>
  <div class="page">
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
  <div style="height: 5rem; background: red;"></div>
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
`;

  if (
    data.haccp_consumer_dishwasher === "dishwasher" ||
    data.haccp_consumer_dishwasher === "yes"
  ) {
    html += `<td>
  A	zsíroldó-fertőtlenítőszerrel elmosogatott,	lecsöpögtetett edényeket használatba vételükig védjük a szennyeződésektől.
  </td>`;
  } else {
    html += `
  <td>Fogyasztói edény mosogató hiányában kizárólag eldobható, egyszer használatos eszközöket használunk.</td>`;
  }

  html += `


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
  <div style="height: 10rem;"></div>
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
    
    
    `;
  return html;
};
