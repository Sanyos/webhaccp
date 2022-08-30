const enums = {
  CompanyCategoryTypes: {
    RESTAURANT: "Étterem",
    BUFFET: "Büfé",
    PUB: "Kávézó-Pub-Presszó",
    CASUALRESTAURANT: "Mozgóbolt",
  },
  Roles: {
    ADMIN: "Admin",
    USER: "User",
  },
  SewageDrainEnum: {
    channel: "Csatorna bekötéses",
    tank: "Ballonos - Tartályos",
  },
  WaterSupplyEnum: {
    mains: "Hálózati vizet használok",
    tank: "Ballonos-Tartályos",
  },
  EntranceEnum: {
    single: "Egy bejárat van",
    service: "Gazdasági bejárattal is rendelkezem",
  },
  FoodWasteTransportEnum: {
    expert: "Szakértő céget bízok meg",
    selfSolve: "Heti 40kg alatt van, ezért nem szerződöm",
  },
  PestControlEnum: {
    expert: "Külső szakértő céget bízok meg",
    selfSolve: "Magamnak végzem",
  },
  DishToWashEnum: {
    facotry: "Üzemi edény mosogatóba",
    consumer: "Fogyasztói edény mosogatóba",
    disposable: " Eldobható edényzetet használok",
    suplier: "Szállító edény mosogatóba",
  },
  DishwasherEnum: {
    yes: "Igen",
    no: "Nem",
    dishwasher: "Mosogatógép is van",
  },
  EggEnum: {
    freshEgg: "Friss tojás /előkészítőm van",
    disinfectedEgg: "Ózonfertőtlenített tojást",
    liquidEgg: "Létojás",
    powderedEgg: "Portojás",
    noEgg: "Nem használok tojást",
  },
  DeliveryMethodEnum: {
    car: "Autó",
    motor: "Motor",
    wage: "Bérszállítás",
  },
  RefigratorEnum: {
    vegetable: "Zöldség",
    meat: "Hús",
    semiFinished: "Félkész",
    finishedGood: "Késztermék",
    mirelit: "Mirelit fagy.",
    fish: "Halas",
    egg: "Tojásos",
    iceCream: "Jégkrémes",
    drink: "Üdítős",
    noRefrigator: "Nincs hűtőm",
  },
  ColdStorageProductEnum: {
    finishedGood: "Késztermék",
    dairyProduct: "Tejtermék",
    meat: "Hús",
    fruitAndVegetable: "Földes Zöldség-gyümölcs",
    cleanedFruitAndVegetable: "Tisztított Zöldség-gyümölcs",
    meatProduct: "Húskészítmény",
    mirelit: "Mirelit",
    noColdStorage: "Nincs hűtést igénylő termék",
  },
  ProductPreparatoryEnum: {
    meat: "Hús ek.",
    vegetable: "Zöldség ek.",
    egg: "Tojás ek.",
    noPreparatory: "Nincs előkészítő",
  },
  StorageEnum: {
    dryProduct: "Szárazárú",
    vegetable: "Földes zöldség",
    detergent: "Tisztítószer",
    package: "Göngyöleg",
    manual: "Kézi",
  },
};

module.exports = Object.freeze(enums);
