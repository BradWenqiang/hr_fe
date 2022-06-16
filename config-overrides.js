const { override, fixBabelImports, addLessLoader,adjustStyleLoaders } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addLessLoader({
      lessOptions:{
        javascriptEnabled: true,
        strictMath: true,
        noIeCompat: true
      }
  }),

  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  })
  
);