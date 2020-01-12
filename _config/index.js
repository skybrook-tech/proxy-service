require("dotenv").config();

const DOMAIN = process.env.DOMAIN;
let PORT = process.env.PORT;

const config = {
  DOMAIN,
  PORT,
  routes: [
    {
      subDomain: "app",
      address: "http://localhost:1001"
    },
    {
      subDomain: "auth",
      address: "http://localhost:1002"
    },
    {
      subDomain: "*",
      address: "http://localhost:1003"
    }
  ]
};

module.exports = config;
