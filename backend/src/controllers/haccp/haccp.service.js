const createError = require("http-errors");
const pool = require("../../db");

exports.create = (haccp) => {
  if (!haccp) {
    return new createError.BadRequest("Something went wrong");
  }

  const values = [
    haccp.haccp_unit_name,
    haccp.haccp_company_location,
    haccp.haccp_supply,
    haccp.haccp_products_require_cold_storage,
    haccp.haccp_require_keeping_warm,
    haccp.haccp_preparatory,
    haccp.haccp_storages,
    haccp.haccp_refrigerator,
    haccp.haccp_delivery,
    haccp.haccp_delivery_method,
    haccp.haccp_dressing_room,
    haccp.haccp_cold_products,
    haccp.haccp_egg,
    haccp.haccp_glass_cleaner,
    haccp.haccp_surface_disinfectant,
    haccp.haccp_other_chemical,
    haccp.haccp_hand_disinfectant,
    haccp.haccp_2phase_dishwashing_detergent,
    haccp.haccp_general_disinfectant,
    haccp.haccp_scale_remover,
    haccp.haccp_degreaser,
    haccp.haccp_factory_dishwasher,
    haccp.haccp_consumer_dishwasher,
    haccp.haccp_disposable_consumer_container,
    haccp.haccp_dish_washing_up,
    haccp.haccp_have_haccp,
    haccp.haccp_existing_haccp_date,
    haccp.haccp_pest_control,
    haccp.haccp_food_waste_transport,
    haccp.haccp_municipal_waste_dispose,
    haccp.haccp_entrances,
    haccp.haccp_route_intersects,
    haccp.haccp_place_of_receipt,
    haccp.haccp_water_supply,
    haccp.haccp_sewage_drain,
    haccp.haccp_date,
    haccp.haccp_user_id,
    haccp.haccp_company_id,
  ];
  let sqlString = `
  INSERT INTO haccp(haccp_unit_name, haccp_company_location, haccp_supply, haccp_products_require_cold_storage, haccp_require_keeping_warm, haccp_preparatory, haccp_storages, haccp_refrigerator, haccp_delivery, haccp_delivery_method, haccp_dressing_room, haccp_cold_products, haccp_egg, haccp_glass_cleaner, haccp_surface_disinfectant, haccp_other_chemical, haccp_hand_disinfectant, haccp_2phase_dishwashing_detergent, haccp_general_disinfectant, haccp_scale_remover, haccp_degreaser, haccp_factory_dishwasher, haccp_consumer_dishwasher, haccp_disposable_consumer_container, haccp_dish_washing_up, haccp_have_haccp, haccp_existing_haccp_date, haccp_pest_control, haccp_food_waste_transport, haccp_municipal_waste_dispose, haccp_entrances, haccp_route_intersects, haccp_place_of_receipt, haccp_water_supply, haccp_sewage_drain, haccp_date, haccp_user_id, haccp_company_id) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38)
  RETURNING *`;
  return pool.query(sqlString, values);
};

exports.getAllByUserId = (companyUserId) => {
  const selectQuery = `
  SELECT * 
  FROM companies 
  JOIN users 
  ON users.user_id = companies.company_user_id
  WHERE company_user_id = $1`;
  return pool.query(selectQuery, [companyUserId]);
};

exports.getAll = () => {
  const selectQuery = `
  SELECT * 
  FROM users 
  JOIN companies 
  ON users.user_id = companies.company_user_id `;
  return pool.query(selectQuery, []);
};

exports.getById = (id) => {
  const selectQuery = `
  SELECT * 
  FROM users 
  JOIN companies 
  ON users.user_id = companies.company_user_id 
  WHERE company_id = $1`;
  return pool.query(selectQuery, [id]);
};

exports.updateById = (id, company) => {
  if (!company || !id) {
    return new createError.BadRequest("Something went wrong");
  }
  const values = [
    id,
    company.company_category,
    company.company_name,
    company.company_address,
    company.company_location,
    company.company_phone,
    company.company_headquarters,
    company.company_billing_address,
    company.company_registration_number,
    company.company_vat_number,
    company.company_archived,
  ];
  const sqlQuery = `
  UPDATE companies 
  SET company_category = $2, company_name = $3, company_address = $4, company_location = $5, company_phone = $6, company_headquarters = $7, company_billing_address = $8, company_registration_number = $9, company_vat_number = $10, company_archived = $11
  WHERE company_id = $1
  RETURNING *;`;
  return pool.query(sqlQuery, values);
};
