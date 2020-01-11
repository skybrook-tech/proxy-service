const config = {
  domain: {
    // development: "mockend.lvh.me",
    // production: "mockend.skybrook.tech"
  },
  routes: [
    {
      subDomain: "app",
      address: "http://localhost:4040"
    },
    {
      subDomain: "*",
      address: "http://localhost:1001"
    }
  ]
};

module.exports = config;
