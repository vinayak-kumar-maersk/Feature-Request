// next.config.js
const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = withFederatedSidecar({
  name: "host",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./pages-map": "./pages-map.js"
  },
  shared: {
    react: {
      // Notice shared are NOT eager here.
      requiredVersion: false,
      singleton: true,
    },
  },
})({
  // your original next.config.js export
  webpack(config, options) {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        remoteType: "var",
        remotes: {
          mfe: "mfe",
        },
        shared: {
          react: {
            // Notice shared ARE eager here.
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
          // we have to share something to ensure share scope is initialized
          "@module-federation/nextjs-mf/lib/noop": {
            eager: false,
          },
        },
      })
    );

    // we attach next internals to share scope at runtime
    config.module.rules.push({
      test: /pages\/_app.[jt]sx?/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });

    if(!options.isServer) {
      config.output.publicPath = 'http://localhost:3000/_next/';
    }

    return config;
  },
});
