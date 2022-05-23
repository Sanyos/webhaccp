const companyService = require("./company.service");
const createError = require("http-errors");
const companiesData = require("../../mock_data/companies-data");

exports.createNewCompany = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return next(new createError.BadRequest("Invalid req body"));
  }
  const newCompany = req.body;
  return companyService
    .create(newCompany)
    .then((company) => {
      console.log("new compny created: ", company);
      res.status(201).json(company);
    })
    .catch((err) => {
      return next(
        new createError[500](`Could not saved company Error: ${err}`)
      );
    });
};

exports.getAllCompanies = (req, res, next) => {
  const companyUserId = req.params.userId;
  return companyService
    .getAll(companyUserId)
    .then((companies) => {
      console.log(companies.rows);
      if (companies.rows) {
        res.status(200).json(companies.rows);
      }
    })
    .catch((err) => {
      return next(
        new createError[500](`Could not find companies Error: ${err}`)
      );
    });
};

exports.getCompanyById = (req, res, next) => {
  const id = req.params.companyId;
  const company = companiesData.filter((company) => company._id === id)[0];
  res.status(200).send(company);
  /* return companyService
    .getById(id)
    .then((company) => {
      res.status(200).json(company);
    })
    .catch((err) => {
      return next(
        new createError[500](
          `Could not find company whith this id: ${id} Error: ${err}`
        )
      );
    }); */
};

exports.updateCompanyById = (req, res, next) => {
  const id = req.params.companyId;
  res.status(200).send(req.body);

  /* return companyService
    .updateById(id, req.body)
    .then((updatedCompany) => {
      res.status(200).json(updatedCompany);
    })
    .catch((err) => {
      return next(
        new createError.BadRequest(
          `Could not update company with id: ${id} Error:${err}`
        )
      );
    }); */
};

/* exports.test = (req, res, next) => {

  const values = ["Mary Ann", ""];
  let sqlString = `
    INSERT INTO users
    (name,email,akdfmkéas)
    VALUES
    ($1, $2, $3)`;

  pool.query(sqlString, values, (err, res) => {
    if (err) {
      console.log("pool.query():", err);
    }
  });

   pool.query("INSERT INTO users(name, email, )VALUES('Mary Ann')", (err, r) => {
    console.log("err", err);
    console.log("res", r);
    res.status(200).send(r);
  });

  const values = [1, "Update"];
  const selectQuery = `SELECT * FROM users  JOIN  companies ON users.user_id = companies.company_user_id`;
  sqlQuery2 = `UPDATE users SET name = $2 WHERE id=$1;`;
  pool.query(selectQuery, [], (err, res) => {
    if (err) {
      console.log("SELECT pool.query():", err);
    }
    if (res) {
      console.log("SELECT pool.query():", res.rows);
    }
  });

}; */
