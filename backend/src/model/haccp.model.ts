export interface HaccpModel {
  haccp_id: number;
  haccp_unit_name: string;
  haccp_company_headquarters: string;
  haccp_supply: string;
  haccp_products_require_cold_storage: ColdStorageProductEnum;
  haccp_require_keeping_warm: boolean;
  haccp_preparatory: ProductPreparatoryEnum | string;
  haccp_storages: StorageEnum;
  haccp_refrigerator: RefigratorEnum;
  haccp_delivery: boolean;
  haccp_delivery_method?: DeliveryMethodEnum;
  haccp_dressing_room: boolean;
  haccp_cold_products: boolean;
  haccp_egg: EggEnum;
  haccp_glass_cleaner: string;
  haccp_surface_disinfectant: string;
  haccp_other_chemical: string;
  haccp_hand_disinfectant: string;
  haccp_2phase_dishwashing_detergent: string;
  haccp_general_disinfectant: string;
  haccp_scale_remover: string;
  haccp_degreaser: string;
  haccp_factory_dishwasher: boolean;
  haccp_consumer_dishwasher: DishwasherEnum;
  haccp_disposable_consumer_container: boolean;
  haccp_dish_washing_up?: DishToWashEnum;
  haccp_have_haccp: boolean;
  haccp_existing_haccp_date?: string;
  haccp_pest_control: PestControlEnum;
  haccp_food_waste_transport: FoodWasteTransportEnum;
  haccp_municipal_waste_dispose: string;
  haccp_entrances: EntranceEnum;
  haccp_route_intersects: boolean;
  haccp_place_of_receipt: boolean;
  haccp_water_supply: WaterSupplyEnum;
  haccp_sewage_drain: SewageDrainEnum;
  haccp_date: string;
  haccp_user_id: number;
  haccp_company_id: number;
  haccp_require_keepig_cold: boolean;
  haccp_company_category: CompanyCategoryTypes;
  haccp_authority_signal: string;
  haccp_kitchen_location: string;
  haccp_transaction_id: string;
  payment_success: boolean;
  haccp_user_email: string;
  haccp_billing_name: string;
  haccp_billing_address: string;
  haccp_company_vat_number: string;
  haccp_company_name: string;
  haccp_aszf_checked: boolean;
  haccp_privacy_policy_checked: boolean;
  haccp_otp_checked: boolean;
}

export enum CompanyCategoryTypes {
  RESTAURANT = "Étterem",
  BUFFET = "Büfé",
  PUB = "Kávézó-Pub-Presszó",
  CASUALRESTAURANT = "Mozgóbolt",
}

export const enum IngredientEnum {
  meat = "Hús- és húskészítmények",
  milk = "Tejtermékek",
  can = "Konzervek",
  dryGoods = "Szárazáruk",
  fruitOrVegetable = "Zöldség-gyümölcs",
  egg = "Tojás (fertőtlenített)",
  mirelit = "Mirelit termékek (zöldségek, félkész- és késztermékek)",
  drink = "Italáru",
  mirelitBakedGoods = "Fagyasztott pékáru",
  bakedGoods = "Pékáru",
  sauce = "Öntetek-szószok",
}

const enum SewageDrainEnum {
  channel = "Csatorna",
  tank = "Tartályos",
}

const enum WaterSupplyEnum {
  mains = "Hálózati",
  tank = "Tartályos",
}

const enum EntranceEnum {
  single = "Egybejáratos",
  service = "Gazd. Bejárattal rendelkezik",
}

const enum FoodWasteTransportEnum {
  expert = "Szakértő céget bízok meg",
  selfSolve = "Heti 20kg alatt van, ezért nem szerződöm",
}

const enum PestControlEnum {
  expert = "Szakértő céget bízok meg",
  selfSolve = "Házilag",
}

const enum DishToWashEnum {
  facotry = "Üzemi",
  consumer = "Fogyasztói",
  disposable = "Eldobható",
}

const enum DishwasherEnum {
  yes = "Igen",
  no = "Nem",
  dishwasher = "Mosogatógép is van",
}
const enum EggEnum {
  freshEgg = "Friss tojás /előkészítőm van",
  disinfectedEgg = "Ózonfertőtlenített tojást",
  liquidEgg = "Létojás",
  powderedEgg = "Portojás",
  noEgg = "Nem használok tojást",
  boiledEgg = "Főtt tojás sós lében",
}

const enum DeliveryMethodEnum {
  car = "Autó",
  motor = "Motor",
  wage = "Bérszállítás",
}

const enum RefigratorEnum {
  vegetable = "Zöldség",
  meat = "Hús",
  semiFinished = "Félkész",
  finishedGood = "Késztermék",
  mirelit = "Mirelit fagy.",
  fish = "Halas",
  egg = "Tojásos",
  iceCream = "Jégkrémes",
  drink = "Üdítős",
  noRefrigator = "Nincs hűtőm",
  milk = "Tejtermékes hűtő",
  beer = "Sörös hűtő",
  wine = "Bor hűtő",
  freezer = "Fagyasztó kamra",
  meatProduct = "Húskészítményes",
}

const enum ColdStorageProductEnum {
  finishedGood = "Késztermék",
  dairyProduct = "Tejtermék",
  meat = "Hús",
  fruitAndVegetable = "Földes Zöldség-gyümölcs",
  cleanedFruitAndVegetable = "Tisztított Zöldség-gyümölcs",
  meatProduct = "Húskészítmény",
  mirelit = "Mirelit",
}

const enum ProductPreparatoryEnum {
  meat = "Hús előkészítő",
  vegetable = "Zöldség előkészítő",
  egg = "Tojás előkészítő",
  noPreparatory = "Nincs előkészítő",
}

const enum StorageEnum {
  dryProduct = "Szárazárú",
  vegetable = "Földes zöldség",
  detergent = "Tisztítószer",
  package = "Göngyöleg",
  manual = "Kézi",
}
