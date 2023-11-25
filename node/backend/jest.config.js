/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testMatch: ["**/specs/**/*.spec.ts"],
  moduleFileExtensions: ["ts", "js", "json"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};
