const WebpackMonitor = require('webpack-monitor');

exports.name  = 'monitor';
exports.apply = (api, options = {}) => {

  api.hook('createCLI', () => {
    api.cli.option('--monitor', 'Launch webpack-monitor after build')
  });

  api.hook('createWebpackChain', config => {
    if (!api.cli.options.monitor) {
      return;
    }

    config.plugin('monitor')
      .use(WebpackMonitor, [{
        capture: false,
        launch: true,
      }])
  });

}
