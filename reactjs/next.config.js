const nextRuntimeDotenv = require("next-runtime-dotenv");
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");

// Makes certain variables accessible only at runtime visible for the application.
const withConfig = nextRuntimeDotenv({
  public: ["BACKEND_URL", "TESTS_BACKEND_URL"],
  server: ["HTTP_AUTH_USER", "HTTP_AUTH_PASS"]
});

const nextConfig = {
  webpack(config) {
    // eslint-disable-line no-param-reassign
    config.useFileSystemPublicRoutes = false;
    return config;
  }
};
module.exports = withConfig(
  withSass({
    useFileSystemPublicRoutes: false
  })
);
