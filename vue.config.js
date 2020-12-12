module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === "production" ? "." : "/",
    devServer: {
      proxy: "https://dig.chouti.com/"
      // proxy: "http://106.14.200.71:5500"
    }
  };
  