const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://employee-staff-nexus.base44.app'
  },
  video:false,
  fixuresFolder:false,
});
