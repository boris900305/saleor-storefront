module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "saleor",
      url: "http://backend.lowbytes.com/graphql/",
    },
  },
};
