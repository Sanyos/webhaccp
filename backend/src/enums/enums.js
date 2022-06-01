const enums = {
  CompanyCategoryTypes: {
    RESTAURANT: "Étterem",
    BUFFET: "Büfé",
    PUB: "Kávézó-Pub-Presszó",
    CASUALRESTAURANT: "Alkalmi vendéglátóhely",
  },
  Roles: {
    ADMIN: "Admin",
    USER: "User",
  },
  SewageDrainEnum: {
    channel: "Csatorna",
    tank: "Tartályos",
  },
  WaterSupplyEnum: {
    mains: "Hálózati",
    tank: "Tartályos",
  },
  EntranceEnum: {
    single: "Egybejáratos",
    service: "Gazd. Bejárattal rendelkezik",
  },
  FoodWasteTransportEnum: {
    expert: "Szakértő céget bízok meg",
    selfSolve: "Heti 40kg alatt van, ezért nem szerződöm",
  },
  PestControlEnum: {
    expert: "Szakértő céget bízok meg",
    selfSolve: "Házilag",
  },
  DishToWashEnum: {
    facotry: "Üzemi",
    consumer: "Fogyasztói",
    disposable: "Eldobható",
  },
  DishwasherEnum: {
    yes: "Van",
    no: "Nincs",
    dishwasher: "Mosogatógép",
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
