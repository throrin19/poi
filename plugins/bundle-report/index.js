exports.name  = 'monitor';
exports.apply = (api, options = {}) => {
  api.hook('createCLI', () => {
    api.cli.option('--bundle-report', 'Launch webpack-monitor after build')
  });

  api.hook('createWebpackChain', config => {
    if (api.cli.options.bundleReport) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

      config
        .plugin('bundle-report')
        .use(BundleAnalyzerPlugin, [options])
    }
  });

}
