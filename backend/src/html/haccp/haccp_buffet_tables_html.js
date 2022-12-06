exports.html = (data) => {
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
        1. IGÉNYFELMÉRÉS, RENDELÉSFELVÉTEL</b>
      
      </td>
    </tr>
      <tr>
        <td>1.1</td>
        <td>Adagszám</td>
        <td>1.</td>
        <td>
        B: kórokozó mikrobák szaporodása, toxinok jelenléte
      - az előállított adagszám nem áll arányban a büfé kapacitásával
        </td>
        <td>
        A büfé kapacitásunknak megfelelő adagszámra vonatkozó vendéget látunk el.
        </td>
        <td>N</td>
        <td>N</td>
        <td></td>
        <td></td>
      </tr>
        <tr>
          <td colspan="9">
            <b>2. BESZERZÉS</b>
          </td>
        </tr>
        <tr>
          <td>2.1</td>
          <td>Beszállítói szerződések</td>
          <td>1.</td>
          <td>
          B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való szennyeződés
          -a beszállítók kiválasztása nem kellő körültekintéssel történik, a szolgáltatás nem megbízható, nem egyenletes
          
          </td>
          <td>
          Az alapanyagok, illetve a vegyszerek beszállítóinak kiválasztása pályáztatás útján történik. Minősítésük rendszeres, probléma esetén új beszállító kerül kiválasztásra.
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
        <td>2.2</td>
        <td>Rendelés a beszállítóktól</td>
        <td>1.</td>
        <td>
        B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való szennyeződés
- a rendelés nem lett időben elküldve vagy nem lett összehangolva, emiatt nincs kellő hűtőraktár vagy egyéb raktár kapacitás. 
        </td>
        <td>
        A vezető folyamatosan figyeli a raktárkészletet és a rendeléseket ennek függvényében adják le.
        </td>
        <td>N</td>
        <td>N</td>
        <td></td>
        <td></td>
      </tr>
        <tr>
          <td colspan="9">
            <b>
              3. ÁRUÁTVÉTEL</b>
  
          </td>
        </tr>
        <tr>
          <td>3.1</td>
          <td>Minőségi követelmények rögzítése</td>
          <td>1.</td>
          <td>
          B, K, F: mikrobákkal, vegyi anyagokkal, fizikai anyagokkal való szennyeződés
          - a beszállítók kiválasztása nem kellő körültekintéssel történik, a szolgáltatás nem megbízható, nem egyenletes minőségűek az alapanyagok, nem megfelelő a szállítási
          körülmény
          </td>
          <td>
          A termékek, illetve a vegyszerek beszállítóinak minősítése rendszeres, probléma esetén új beszállító  kerül kiválasztásra.
  
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3.2</td>
          <td>Nyomonkövetés</td>
          <td>1.</td>
          <td>
          B, K: mikrobákkal, vegyi anyagokkal való szennyeződés
          - számla, szállítólevél nem érkezik meg a termékkel vagy pontatlan, illetve nem őrzik meg a helyszínen
          
          </td>
          <td>
          A számlát és szállítólevelet 1 éven keresztül megőrizzük az egységben. A szállítólevél hiányában nem vesszük
          át a termékeket.
          
          </td>
          <td>N</td>
          <td>N</td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td>3.3</td>
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
          <td>3.4</td>
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
          <td>3.5</td>
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
      <td>3.6</td>
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
          <td>3.7</td>
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
            <b>4. Tárolás</b>
          </td>
        </tr>
  
        <tr>
          <td>4.1</td>
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
          <td>4.2</td>
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


        <tr>
        <td>4.5</td>
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
        <td>4.6</td>
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
        <td>4.7</td>
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
    </tr>
    <tr>
        <td colspan="9">
          <b>
            5. Előkészítés</b>
        </td>
      </tr>
      <tr>
      <td>5.1</td>
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
    <tr>
    <td>5.2</td>
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

  html += `
    <tr>
<td>5.4</td>
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
  </tr>
  <tr>
  <td colspan="9">
    <b> 6. Ételkészítés </b>
  </td>
</tr>
<tr>
<td colspan="9">
   6.1 Meleg Ételkészítés 
</td>
</tr>

<tr>
<td>6.1.1</td>
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
<td>6.1.2</td>
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
</tr>
  <tr>
<td>6.1.3</td>
<td>hőkezelés (párolás, főzés, sütés, stb.)</td>
<td>1.</td>
<td>
B: mikrobák szaporodása, túlélése, toxintermelés
- a hőkezelés nem megfelelő hőmérsékleten és ideig történik, nem terjed ki a termék teljes mennyiségére

</td>
<td>
Az élelmiszer-biztonsági és élvezeti kritériumok teljesítéséhez szükséges hőmennyiséget (hőmérséklet, idő) minden ételkészítésnél biztosítjuk. A tapasztalati úton megállapított hőmérsékleteket és időket alkalmazzuk, ügyelve arra, hogy a hőkezelés a termék teljes egészére kiterjedjen.
Szúrópróbaszerűen, maghőmérővel ellenőrizzük a termék belsejének hőmérsékleti értékeit. A hőkezelést minden esetben ételkészítés ellenőrzőlapon dokumentáljuk.
<b>ÉTELEK HŐMÉRSÉKLET ELLENŐRZÉSI LAPJA</b>

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
  </table>
  </div>

  <div class="page">
  <div style="height: 8rem;"></div>
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
    <b> 7. Kiszolgálás </b>
  </td>
</tr>
<tr>
<td>7.1</td>
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
<td>7.2</td>
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
    `;

  return html;
};
