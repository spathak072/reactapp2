const {container} = require('webpack')
const {ModuleFederationPlugin} = container;
module.exports = {
    devServer:{
        port: 3001,
        historyApiFallback: true,
    },
  // ...
  webpack: {
   configure: (webpackConfig, {env, paths}) => {
    webpackConfig.output.publicPath = "auto";
     webpackConfig.plugins.push(
       new ModuleFederationPlugin({
         name: 'mfMarketing',
         filename: 'remoteEntry.js',
         exposes: {
           './MarketingApp': './src/bootstrap',
         },
         shared: {
           react: {
             singleton: true,
             eager: true,
             requiredVersion: '^17.0.2',
           },
           'react-dom': {
             singleton: true,
             eager: true,
             requiredVersion: '^17.0.2',
           },
         },
       })
     );
     return webpackConfig;
   }
  },
};