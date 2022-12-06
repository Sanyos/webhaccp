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
        <td>Termékek/péksütemények felmérése</td>
        <td>1.</td>
        <td>
        B: kórokozó mikrobák szaporodása, toxinok jelenléte
        </td>
        <td>
        Az egység kapacitásnak megfelelő péksüteményt süt készre, megfelelő számú termékeket rendel, melyek raktározása és kínálata élelmiszer-biztonsági szempontból nem kifogásolható.
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
        </tr>
        <tr>
        <td>4.3</td>
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
        <td>4.5</td>
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
          <b>
            5. Termelés</b>
        </td>
      </tr>
      <tr>
      <td colspan="9">
          5.1 Fagyasztott pékáruk készresütése
      </td>
    </tr>
      <tr>
        <td>5.1.1</td>
        <td>Alapanyagok</td>
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
      <td>5.1.2</td>
      <td>Hőkezelés (főzés, sütés)</td>
      <td>1.</td>
      <td>
      B: mikrobák szaporodása, túlélése, toxintermelés
      - a hőkezelés nem megfelelő hőmérsékleten és ideig történik, nem terjed ki a termék teljes mennyiségére
      
      </td>
      <td>
      Az élelmiszer-biztonsági és élvezeti kritériumok teljesítéséhez szükséges hőmennyiséget (hőmérséklet, idő) minden ételkészítésnél biztosítjuk. A tapasztalati úton megállapított hőmérsékleteket és időket alkalmazzuk, ügyelve arra, hogy a hőkezelés a termék teljes egészére kiterjedjen.
      <b>NAPI GYÁRTÁSI NAPLÓ</b>
      
      </td>
      <td>I</td>
      <td></td>
      <td></td>
      <td>CCP2</td>
    </tr>


    <tr>
    <td colspan="9">
      <b>
        6. Értékesítés</b>
    </td>
  </tr>
   
    <tr>
      <td>6.1</td>
      <td>Hűtve értékesítés</td>
      <td>1.</td>
      <td>
      B: mikrobák szaporodása, toxintermelés
-	helytelen raktározási körülmények, hőmérséklet
-	túl hosszú tárolási idő

      
      </td>
      <td>
      Az egyes termékcsoportoknak megfelelő hőmérsékleteket a Jó gyártási gyakorlatban leírtaknak megfelelően betartjuk. A hűtőterek hőmérsékletét műszakonként 2-szer ellenőrizzük a hűtőterek hőmérséklet ellenőrző lapján.
      <b>HŰTŐTEREK HŐMÉRSÉKLET ELLENŐRZŐ LAPJA</b>
      
      </td>
      <td>N</td>
      <td>I</td>
      <td>N</td>
      <td>CCP1</td>
    </tr>
  </table>
  </div>
    
    
    `;
  return html;
};
