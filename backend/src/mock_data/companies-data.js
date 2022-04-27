const CompanyCategoryTypes = require("../enums/enums");

const companies = [
  {
    companyName: "Aranykorsó",
    location: "Budapest",
    registrationNumber: "38247839",
    vatNumber: "43534523",
    _id: "1",
    address: "",
    companyPhoneNumber: "",
    headquarters: "",
    billingAddress: "",
    category: CompanyCategoryTypes.PUB,
    archived: false,
  },
  {
    companyName: "Stacy's food",
    location: "Budapest",
    registrationNumber: "38247839",
    vatNumber: "43534523",
    _id: "2",
    address: "",
    companyPhoneNumber: "",
    headquarters: "",
    billingAddress: "",
    category: CompanyCategoryTypes.PUB,
    archived: false,
  },
  {
    companyName: "Aranykorsó",
    location: "Budapest",
    registrationNumber: "38247839",
    vatNumber: "43534523",
    _id: "",
    address: "",
    companyPhoneNumber: "",
    headquarters: "",
    billingAddress: "",
    category: CompanyCategoryTypes.PUB,
    archived: false,
  },
  {
    companyName: "Stacy's food",
    location: "Budapest",
    registrationNumber: "38247839",
    vatNumber: "43534523",
    _id: "",
    address: "",
    companyPhoneNumber: "",
    headquarters: "",
    billingAddress: "",
    category: CompanyCategoryTypes.RESTAURANT,
    archived: false,
  },
  {
    companyName: "Aranykorsó",
    location: "Budapest",
    registrationNumber: "38247839",
    vatNumber: "43534523",
    _id: "",
    address: "",
    companyPhoneNumber: "",
    headquarters: "",
    billingAddress: "",
    category: CompanyCategoryTypes.PUB,
    archived: false,
  },
  {
    companyName: "Stacy's food",
    location: "Budapest",
    registrationNumber: "38247839",
    vatNumber: "43534523",
    _id: "",
    address: "",
    companyPhoneNumber: "",
    headquarters: "",
    billingAddress: "",
    category: CompanyCategoryTypes.PUB,
    archived: false,
  },
];

module.exports = Object.freeze(companies);
