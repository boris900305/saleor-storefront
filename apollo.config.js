module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "saleor",
      url: "http://93.115.18.125:8000/graphql/",
    },
  },
};
