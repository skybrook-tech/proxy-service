const config = {
  domain: {
    // development: "mockend.lvh.me",
    // production: "mockend.skybrook.tech"
  },
  routes: [
    {
      subDomain: "app",
      address: "http://localhost:1001"
    },
    {
      subDomain: "*",
      address: "http://localhost:1002"
    }
  ]
};

module.exports = config;
