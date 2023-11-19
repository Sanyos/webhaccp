const enums = {
  CompanyCategoryTypes: {
    RESTAURANT: "Étterem",
    BUFFET: "Büfé",
    PUB: "Kávézó-Pub-Presszó",
    CASUALRESTAURANT: "Mozgóbolt",
  },
  PricesWithoutVat : {
    RESTAURANT: 9990,
    BUFFET: 9990,
    PUB: 9990,
    CASUALRESTAURANT: 9990,
  },
  ReviewPricesWithoutVat : {
    RESTAURANT: 9990,
    BUFFET: 9990,
    PUB: 9990,
    CASUALRESTAURANT: 9990,
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
    selfSolve: "Heti 20kg alatt van, ezért nem szerződöm",
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
    boiledEgg: "Főtt tojás sós lében",
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
    mirelit: "Mirelit fagyasztó",
    fish: "Halas",
    egg: "Tojásos",
    iceCream: "Jégkrémes",
    drink: "Üdítős",
    noRefrigator: "Nincs hűtőm",
    milk: "Tejtermékes hűtő",
    beer: "Sörös hűtő",
    wine: "Bor hűtő",
    freezer: "Fagyasztó kamra",
    meatProduct: "Húskészítményes",
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
    meat: "Hús előkészítő",
    vegetable: "Zöldség előkészítő",
    egg: "Tojás előkészítő",
    noPreparatory: "Nincs előkészítő",
  },
  StorageEnum: {
    dryProduct: "Szárazárú",
    vegetable: "Földes zöldség",
    detergent: "Tisztítószer",
    package: "Göngyöleg",
    manual: "Kézi",
  },
  IngredientsEnum: {
    meat: "Hús- és húskészítmények",
    milk: "Tejtermékek",
    can: "Konzervek",
    dryGoods: "Szárazáruk",
    fruitOrVegetable: "Zöldség-gyümölcs",
    egg: "Tojás (fertőtlenített)",
    mirelit: "Mirelit termékek (zöldségek, félkész- és késztermékek)",
    drink: "Italáru",
    mirelitBakedGoods: "Fagyasztott pékáru",
    bakedGoods: "Pékáru",
    sauce: "Öntetek-szószok",
  },
  ReviewReasonEnum :{
    yearly :'Tervezett éves felülvizsgálat',
    unexpected :'Rendkívüli felülvizsgálat meglévő HACCP rendszer mellé '
  },
  ReviewerJobEnum:{
    owner: "tulajdonos",
    ceo: "ügyvezető",
    shopLeader: "üzletvezető",
    leader: "intézményvezető",
    officerInCharge: "megbízott ügyintéző" 
  },
  LastAuthorityEnum:{
    nnk : "Nemzeti Népegészségügyi Központ",
    nebih : "Nemzeti Élelmiszerlánc-biztonsági Hivatal ",
    ph : "Polgármesteri hivatal",
    katved : "Katasztrófavédelem",
    nav : "	Nemzeti Adó és Vámhivatal",
    kf : "Közterület felügyelet",
    nfh : "Nemzeti Fogyasztóvédelmi Hatóság",
    artisjus : "artisjus",
    jhebao :"Járási Hivatal Élelmiszerlánc-biztonsági és Állategészségügyi Osztálya "  
  }
};

module.exports = Object.freeze(enums);
