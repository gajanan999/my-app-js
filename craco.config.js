const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');

// module.exports = {
//     // ...
//     webpack: {
//       alias: { /* ... */ },
//       plugins: {
//         add: [ new CspHtmlWebpackPlugin({
//             'object-src': "'self'",
//             'script-src': ["'self'"],
//             'style-src': ["'self' *.typicode.com"],
//             'connect-src': ["'self' *.typicode.com"]
//           }, {
//             enabled: true,
//             hashingMethod: 'sha256',
//             hashEnabled: {
//               'script-src': true,
//               'style-src': true
//             },
//             nonceEnabled: {
//               'script-src': true,
//               'style-src': true
//             },
            
//           }) ],
//       },
//       configure: { /* ... */},
//       configure: (webpackConfig, { env, paths }) => {
//         /* ... */
//         return webpackConfig;
//       },
//     },
//   };