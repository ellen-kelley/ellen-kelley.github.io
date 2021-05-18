const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    // writeToDisk: true,
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/.*$/,
          to: function (context) {
            return context.parsedUrl.pathname + ".html";
          },
        },
      ],
    },

    watchContentBase: true,
    liveReload: true,
    open: true,
    // port: 9000,
    proxy: {
      /**
       * Server running on port 3000
       * use as proxy for route /api
       */
      "/api": "http://localhost:3000",
    },
  },
});
