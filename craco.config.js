const CracoLessPlugin = require('craco-less');
// override primary color
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#f56a6a' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
