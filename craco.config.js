const CracoLessPlugin = require('craco-less');
// override primary color
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'rgb(55, 112, 255)' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
