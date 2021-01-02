const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jasonm/Documents/GitHub/GreenVibeFrontend/greenvibe-frontend/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jasonm/Documents/GitHub/GreenVibeFrontend/greenvibe-frontend/src/pages/404.js"))),
  "component---src-pages-dashboard-js": hot(preferDefault(require("/Users/jasonm/Documents/GitHub/GreenVibeFrontend/greenvibe-frontend/src/pages/dashboard.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jasonm/Documents/GitHub/GreenVibeFrontend/greenvibe-frontend/src/pages/index.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("/Users/jasonm/Documents/GitHub/GreenVibeFrontend/greenvibe-frontend/src/pages/login.js")))
}

