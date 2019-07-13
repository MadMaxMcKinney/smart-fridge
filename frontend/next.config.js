// This config setup allows Next JS to use external css imports (like from node_modules)
// I am using this because react-toastify needs to import the css

const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
})