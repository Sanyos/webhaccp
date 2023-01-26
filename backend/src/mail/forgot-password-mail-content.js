exports.forgotPasswordEmail = (id) => {
  return {
    subject: "Elfelejtett jelszó",
    content: `<h2>Az alábbi linkre kattintva beállíthatja új jelszavát: </h2></br><b>https://webhaccp.hu/new-password/${id}<b>`,
  };
};
