const path = require('path');

module.exports = function override(config, env) {
  config.watchOptions = {
    poll: true,
    ignored: /node_modules/
  };

  return config;
};

