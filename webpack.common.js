const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { Pages } = require("./webpack.config");

const dist = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/assets/js/main.js",
    index: "./src/assets/js/index.js",
    services: "./src/assets/js/services.js",
    portfolio: "./src/assets/js/portfolio.js",
    contact: "./src/assets/js/contact.js",
    faqs: "./src/assets/js/faqs.js",
    about: "./src/assets/js/about.js",
    calculator: "./src/assets/js/calculator.js",
    error: "./src/assets/js/error.js",
  },
  output: {
    publicPath: "", // prefix path should be '/', for github page please use empty path
    path: dist,
    filename: "js/[name].bundle.js", // in directory ./dist/js/
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, // split css to files, not use style-loader
            options: {
              publicPath: "/", // prefix path should be '/', for github page please use empty path
            },
          },
          "css-loader",
          /**
           * postcss-loader
           * Use it after css-loader and style-loader,
           * but before other preprocessor loaders
           * like e.g sass|less|stylus-loader.
           *
           * Config file: postcss.config.js
           */
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "../assets/img/",
              outputPath: "assets/img/",
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "../assets/fonts/",
              outputPath: "assets/fonts/",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.css", // in directory ./dist/css/
      chunkFilename: "css/[name].bundle.css", // in directory ./dist/css/
    }),

    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets/img", to: "assets/img" }],
    }),

    ...Pages.map(
      ({ template, filename, js }) =>
        new HtmlWebpackPlugin({
          template,
          filename,
          chunks: ["runtime", "vendors", ...js],
        })
    ),
  ],

  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
