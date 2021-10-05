module.exports = {
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "js", "tsx", "jsx"],
  transform: {
    "^.+\\.(ts|tsx|jsx|js)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  testMatch: ["**/tests/**/*.(spec|test).+(ts|tsx|js)"],
  moduleNameMapper: {
    "^components/(.+)": "<rootDir>/src/components/$1",
    "\\.(css|scss)$": "<rootDir>/node_modules/jest-css-modules",
  },
  testEnvironment: "jsdom",
};
