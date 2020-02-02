const routes = require("next-routes");

// @see https://github.com/fridays/next-routes
// Additional dynamic routes.
module.exports = routes()
  .add("/", "home")
  .add("/lola", "recipes")
  .add("/recipes/:recipe", "recipe");
