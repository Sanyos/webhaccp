exports.forgotPasswordEmail = (id, name) => {
  return {
    subject: "Elfelejtett jelszó cseréje! - webhaccp.hu",
    content: `
    <h2>Tisztelt ${name}!</h2>
    <p>Ön a webhaccp.hu weboldalon keresztül kezdeményezte elfelejtett jelszavának megújítását.</p>
    <p>Jelszavát erre a linkre kattintva tudja megváltoztatni: <b>https://webhaccp.hu/new-password/${id}<b></p>
    <br>
    <p>Ha a fenti link valamiért nem működne, azt a böngészőbe bemásolva is megnyithatja.</p>

    <p>Belépés után új HACCP dokumentációt a “HACCP Készítés” fülön tud készíteni, már elkészített dokumentumait pedig megtekintheti az ÜZLETEIM menüpont alatt.</p>
    <br>
    <p>Amennyiben nem Ön kezdeményezte a jelszómódosítást, levelünket hagyja figyelmen kívül!</p>

    <p>Ha a belépési probléma továbbra is fennáll, kérjük, vegye fel velünk a kapcsolatot a helpdesk@webhaccp.hu e-mailcímen!</p>
    <br>
    <p>Üdvözlettel,
    a webhaccp.hu csapata
    </p>`,
  };
};
