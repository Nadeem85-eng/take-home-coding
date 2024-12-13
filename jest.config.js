module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts$': ['ts-jest', { isolatedModules: true }],
    },
    testMatch: ['**/test/**/*.test.ts'],
  };
  
  