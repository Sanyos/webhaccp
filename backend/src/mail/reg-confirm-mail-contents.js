exports.confirmRegEmail = (id) => {
  return {
    subject: "Regisztráció megerősítése",
    content: `<h2>Az alábbi linkre kattintva megerősítheti a regisztrációját: </h2></br><b>https://webhaccp.hu/confirm-reg/${id}<b>`,
  };
};
