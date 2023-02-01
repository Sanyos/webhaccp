exports.confirmRegEmail = (id, name) => {
  return {
    subject: "Köszönjük regisztrációját! - webhaccp.hu",
    content: `

    <h2>Tisztelt ${name}!</h2>
    <br>
    <p>Köszönjük, hogy regisztrált a webhaccp.hu oldalon! Ezzel megteremtette a lehetőségét annak, 
    hogy HACCP dokumentációját a későbbiekben is könnyedén elérhesse, kezelhesse, illetve egy felhasználói 
    profil alatt további üzleteket és dokumentációkat hozhasson létre egyszerűsített módon.</p>
    <br>
    <p>Regisztrációját az alábbi linkre kattintva tudja megerősíteni: <b>https://webhaccp.hu/confirm-reg/${id}<b></p>
    <p>Ha a fenti link valamiért nem működne, azt a böngészőbe bemásolva is megnyithatja.</p>
    <br>
    <p>Ha máris elkezdené HACCP dokumentációja készítését, azt belépés után a “HACCP Készítés” fülre kattintva tudja megtenni, 
    már elkészített dokumentumait pedig megtekintheti az ÜZLETEIM menüpont alatt.</p>
    <br>
    <p>Amennyiben nem Ön kezdeményezte a regisztrációt, levelünket hagyja figyelmen kívül!</p>
    <br>
    <p>Ha a folyamat elkezdése előtt további információra lenne szüksége, olvassa végig GYIK felületünket, ahol összegyűjtöttük a 
    leggyakrabban felmerülő kérdéseket!</p>
    <p>Reméljük, a webhaccp.hu felülete Önnek is segítségére lesz nemcsak az élelmiszerbiztonsági dokumentumok elkészítésében, hanem vendégei elégedettségének növelésében is!</p>
    <br>
    <p>További szakmai sikereket kívánva,</p>
    <br>
    <p>
    Üdvözlettel,
    a webhaccp.hu csapata
    </p>
    `,
  };
};
