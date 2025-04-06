module.exports = {
  testEnvironment: "jsdom", // Simulates a browser environment for React components
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Runs setup after the environment is ready
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
  },
  testPathIgnorePatterns: ["/node_modules/", "/.next/"], // Ignore these folders
};
