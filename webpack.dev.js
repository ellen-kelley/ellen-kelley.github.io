const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 9000, // client running on port 9000
    open: true,
    proxy: {
      /**
       * Server running on port 3000
       * use as proxy for route /api
       */
      "/api": "http://localhost:3000",
    },
  },
});
