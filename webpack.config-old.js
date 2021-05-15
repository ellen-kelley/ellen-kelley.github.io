const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    // vendor1: "./src/assets/vendor/test.js",
    // vendor2: "./src/assets/vendor/aos/aos.js",
    // vendors: [
    //   "./src/assets/vendor/aos/aos.js",
    //   "./src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
    //   "./src/assets/vendor/glightbox/js/glightbox.min.js",
    //   "./src/assets/vendor/isotope-layout/isotope.pkgd.min.js",
    //   "./src/assets/vendor/php-email-form/validate.js",
    //   "./src/assets/vendor/purecounter/purecounter.js",
    //   "./src/assets/vendor/swiper/swiper-bundle.min.js",
    //   "./src/assets/vendor/test.js",
    // ],
    main: {
      // dependOn: "vendors",
      import: "./src/assets/js/main.js",
    },
    index: "./src/assets/js/index.js",
    portfolio: "./src/assets/js/portfolio.js",
    calculator: "./src/assets/js/calculator.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    sourceMapFilename: "[name].js.map",
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["main", "index"],
    }),
    new HTMLWebpackPlugin({
      filename: "calculator.html",
      template: "./src/calculator.html",
      chunks: ["main", "calculator"],
    }),
    new HTMLWebpackPlugin({
      filename: "portfolio.html",
      template: "./src/portfolio.html",
      chunks: ["main", "portfolio"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        // { from: "src/assets/vendor", to: "assets/vendor" },
        { from: "src/assets/img", to: "assets/img" },
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.html$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "[name].[ext]",
      //     },
      //   },
      //   // exclude: path.resolve(__dirname, './src/index.html')
      // },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "assets/css-img/",
              outputPath: "assets/css-img/",
              esModule: false,
            },
          },
        ],
      },
      // {
      //   test: /\.js$/,
      //   enforce: "pre",
      //   use: ["source-map-loader"],
      // },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/fonts",
            },
          },
        ],
      },
    ],
  },
};
