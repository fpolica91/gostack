const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        // for files that end in .js use this loaders
        test: /\.js$/,
        // exclude node_modules
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // for files that end in .css use this loaders
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        // for all images, listed extensions case insensitive
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};
