const createError = require("http-errors");
const pool = require("../../db");

exports.create = (haccp) => {
  if (!haccp) {
    return new createError.BadRequest("Something went wrong");
  }
  const values = [
    Array.isArray(haccp.haccp_additionals)
      ? haccp.haccp_additionals.join("###")
      : haccp.haccp_additionals,
    haccp.haccp_billing_address, 
    haccp.haccp_billing_city, 
    haccp.haccp_billing_name,
    haccp.haccp_billing_zip,
    Array.isArray(haccp.haccp_building)
      ? haccp.haccp_building.join("###")
      : haccp.haccp_building,
    haccp.haccp_company_category,
    haccp.haccp_company_headquarters,
    haccp.haccp_company_id,
    haccp.haccp_company_name,
    haccp.haccp_company_vat_number,
    Array.isArray(haccp.haccp_docs)
      ? haccp.haccp_docs.join("###")
      : haccp.haccp_docs,
    Array.isArray(haccp.haccp_layout)
      ? haccp.haccp_layout.join("###")
      : haccp.haccp_layout,
    Array.isArray(haccp.haccp_process)
      ? haccp.haccp_process.join("###")
      : haccp.haccp_process,
    Array.isArray(haccp.haccp_routes)
      ? haccp.haccp_routes.join("###")
      : haccp.haccp_routes,
    haccp.haccp_transaction_id,  
    haccp.haccp_unit_name,
    haccp.haccp_user_email,
    haccp.haccp_user_id,
    Array.isArray(haccp.haccp_workers)
    ? haccp.haccp_workers.join("###")
    : haccp.haccp_workers,
    Array.isArray(haccp.has_health_care)
    ? haccp.has_health_care.join("###")
    : haccp.has_health_care,
    Array.isArray(haccp.has_paper)
    ? haccp.has_paper.join("###")
    : haccp.has_paper,
    Array.isArray(haccp.last_authority)
    ? haccp.last_authority.join("###")
    : haccp.last_authority,
    Array.isArray(haccp.last_authority_check)
    ? haccp.last_authority_check.join("###")
    : haccp.last_authority_check,
    haccp.payment_success,
    Array.isArray(haccp.pest_control_company)
    ? haccp.pest_control_company.join("###")
    : haccp.pest_control_company,
    Array.isArray(haccp.pest_control_date)
    ? haccp.pest_control_date.join("###")
    : haccp.pest_control_date,
    Array.isArray(haccp.review_reason)
    ? haccp.review_reason.join("###")
    : haccp.review_reason,
    Array.isArray(haccp.reviewer_job)
    ? haccp.reviewer_job.join("###")
    : haccp.reviewer_job,
    Array.isArray(haccp.reviewer_name)
    ? haccp.reviewer_name.join("###")
    : haccp.reviewer_name,
    Array.isArray(haccp.self_control)
    ? haccp.self_control.join("###")
    : haccp.self_control,
    Array.isArray(haccp.tracebility)
    ? haccp.tracebility.join("###")
    : haccp.tracebility,
    Array.isArray(haccp.yearly_study_date)
    ? haccp.yearly_study_date.join("###")
    : haccp.yearly_study_date,
  ];
  const sqlQuery = `
  INSERT INTO reviews(haccp_additionals,haccp_billing_address,haccp_billing_city,haccp_billing_name,haccp_billing_zip,haccp_building,haccp_company_category,haccp_company_headquarters,haccp_company_id,haccp_company_name,haccp_company_vat_number,haccp_docs,haccp_layout,haccp_process,haccp_routes,haccp_transaction_id,haccp_unit_name,haccp_user_email,haccp_user_id,haccp_workers,has_health_care,has_paper,last_authority,last_authority_check,payment_success,pest_control_company,pest_control_date,review_reason,reviewer_job,reviewer_name,self_control,tracebility,yearly_study_date) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33)
  RETURNING *`;

  return pool.query(sqlQuery, values);
};

