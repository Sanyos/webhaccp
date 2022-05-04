const users = [
  {
    name: "Admin",
    phone: "06304446656",
    email: "admin@test.com",
    _id: "1",
    role: "ADMIN",
    password: "Test1234",
    archived: false,
  },
  {
    name: "TestUser",
    phone: "06304443326",
    email: "user@test.com",
    _id: "2",
    role: "USER",
    password: "Test1234",
    archived: false,
  },
  {
    name: "TestUser2",
    phone: "06204764483",
    email: "user2@test.com",
    _id: "3",
    role: "USER",
    password: "Test1234",
    archived: true,
  },
];

module.exports = Object.freeze(users);
