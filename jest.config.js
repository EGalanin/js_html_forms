// /** @type {import('jest').Config} */
// const config = {
//     verbose: true,
//   };

//   module.exports = config;

// const {defaults} = require('jest-config');

// /** @type {import('jest').Config} */
// const config = {
//   moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
// };

// module.exports = config;

module.exports = {
  // среда тестирования - браузер
  testEnvironment: 'jest-environment-jsdom',
};
