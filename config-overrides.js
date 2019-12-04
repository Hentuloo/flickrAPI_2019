const fs = require('fs');

module.exports = function override(config) {
  // Add sass-resources for all /scss/ files
  config.module.rules[2].oneOf[5].use.push({
    loader: 'sass-resources-loader',
    options: {
      // get all files from global
      resources: fs
        .readdirSync('./src/stylesheets/global')
        .map(file => `./src/stylesheets/global/${file}`),
    },
  });
  return config;
};
