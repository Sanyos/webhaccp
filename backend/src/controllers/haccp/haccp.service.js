const createError = require("http-errors");
const pool = require("../../db");

exports.create = (haccp) => {
  console.log("to create: ", haccp.haccp_ingredients);
  if (!haccp) {
    return new createError.BadRequest("Something went wrong");
  }

  const values = [
    haccp.haccp_unit_name,
    haccp.haccp_company_headquarters,
    haccp.haccp_supply,
    haccp.haccp_products_require_cold_storage
      ? haccp.haccp_products_require_cold_storage.join("###")
      : null,
    haccp.haccp_require_keeping_warm,
    haccp.haccp_preparatory ? haccp.haccp_preparatory.join("###") : null,
    haccp.haccp_storages ? haccp.haccp_storages.join("###") : null,
    haccp.haccp_refrigerator ? haccp.haccp_refrigerator.join("###") : null,
    haccp.haccp_delivery,
    haccp.haccp_delivery_method
      ? haccp.haccp_delivery_method.join("###")
      : null,
    haccp.haccp_dressing_room,
    haccp.haccp_cold_products,
    haccp.haccp_egg ? haccp.haccp_egg.join("###") : null,
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
    haccp.haccp_require_keeping_cold,
    haccp.haccp_ingredients ? haccp.haccp_ingredients.join("###") : null,
    haccp.haccp_company_category,
    haccp.haccp_transaction_id,
    haccp.payment_success,
    haccp.haccp_user_email,
    haccp.haccp_kitchen_location,
    haccp.haccp_authority_signal,
    haccp.haccp_billing_name,
    haccp.haccp_billing_address,
    haccp.haccp_company_vat_number,
    haccp.haccp_company_name,
  ];
  let sqlString = `
  INSERT INTO haccp(haccp_unit_name, haccp_company_headquarters, haccp_supply, haccp_products_require_cold_storage, haccp_require_keeping_warm, haccp_preparatory, haccp_storages, haccp_refrigerator, haccp_delivery, haccp_delivery_method, haccp_dressing_room, haccp_cold_products, haccp_egg, haccp_glass_cleaner, haccp_surface_disinfectant, haccp_other_chemical, haccp_hand_disinfectant, haccp_2phase_dishwashing_detergent, haccp_general_disinfectant, haccp_scale_remover, haccp_degreaser, haccp_factory_dishwasher, haccp_consumer_dishwasher, haccp_disposable_consumer_container, haccp_dish_washing_up, haccp_have_haccp, haccp_existing_haccp_date, haccp_pest_control, haccp_food_waste_transport, haccp_municipal_waste_dispose, haccp_entrances, haccp_route_intersects, haccp_place_of_receipt, haccp_water_supply, haccp_sewage_drain, haccp_date, haccp_user_id, haccp_company_id, haccp_require_keeping_cold, haccp_ingredients, haccp_company_category, haccp_transaction_id, payment_success, haccp_user_email, haccp_kitchen_location, haccp_authority_signal, haccp_billing_name, haccp_billing_address, haccp_company_vat_number, haccp_company_name) 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50)
  RETURNING *`;
  return pool.query(sqlString, values);
};

exports.getAllByCompanyId = (haccpCompanyId) => {
  const selectQuery = `
  SELECT * 
  FROM haccp 
  WHERE haccp_company_id = $1`;
  return pool.query(selectQuery, [haccpCompanyId]);
};

exports.getAll = () => {
  const selectQuery = `
  SELECT * 
  FROM users 
  JOIN haccp 
  ON users.user_id = haccp.haccp_user_id `;
  return pool.query(selectQuery, []);
};

exports.getById = (id) => {
  const selectQuery = `
  SELECT * 
  FROM haccp
  WHERE haccp_id = $1`;
  return pool.query(selectQuery, [id]);
};

exports.updateById = (id, haccp) => {
  console.log("to update: ", haccp.haccp_ingredients);
  if (!haccp || !id) {
    return new createError.BadRequest("Something went wrong");
  }
  const values = [
    id,
    haccp.haccp_unit_name,
    haccp.haccp_company_headquarters,
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
    haccp.haccp_require_keeping_cold,
    haccp.haccp_ingredients,
    haccp.haccp_company_category,
    haccp.haccp_transaction_id,
    haccp.payment_success,
    haccp.haccp_user_email,
    haccp.haccp_kitchen_location,
    haccp.haccp_authority_signal,
    haccp.haccp_billing_name,
    haccp.haccp_billing_address,
    haccp.haccp_company_vat_number,
    haccp.haccp_company_name,
  ];
  const sqlQuery = `
  UPDATE haccp
  SET haccp_unit_name = $2, haccp_company_headquarters = $3, haccp_supply = $4, haccp_products_require_cold_storage = $5, haccp_require_keeping_warm  = $6, haccp_preparatory = $7, haccp_storages = $8, haccp_refrigerator = $9, haccp_delivery = $10, haccp_delivery_method = $11, haccp_dressing_room = $12, haccp_cold_products = $13, haccp_egg = $14, haccp_glass_cleaner = $15, haccp_surface_disinfectant = $16, haccp_other_chemical = $17, haccp_hand_disinfectant = $18, haccp_2phase_dishwashing_detergent = $19, haccp_general_disinfectant = $20, haccp_scale_remover = $21, haccp_degreaser = $22, haccp_factory_dishwasher = $23, haccp_consumer_dishwasher = $24, haccp_disposable_consumer_container = $25, haccp_dish_washing_up = $26, haccp_have_haccp = $27, haccp_existing_haccp_date = $28, haccp_pest_control = $29, haccp_food_waste_transport = $30, haccp_municipal_waste_dispose = $31, haccp_entrances = $32, haccp_route_intersects = $33, haccp_place_of_receipt = $34, haccp_water_supply = $35, haccp_sewage_drain = $36, haccp_date = $37, haccp_user_id = $38, haccp_company_id = $39, haccp_require_keeping_cold = $40, haccp_ingredients = $41, haccp_company_category = $42, haccp_transaction_id = $43, payment_success = $44, haccp_user_email = $45, haccp_kitchen_location = $46, haccp_authority_signal = $47, haccp_billing_name = $48, haccp_billing_address = $49, haccp_company_vat_number = $50, haccp_company_name = $51
  WHERE haccp_id = $1
  RETURNING *;`;
  return pool.query(sqlQuery, values);
};
