module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  extends: ["react-app", "react-app/jest"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testEnvironment: 'jsdom',
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
