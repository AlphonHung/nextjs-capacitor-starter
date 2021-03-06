const path = require("path")

module.exports = {
  distDir: 'dist',
  publicRuntimeConfig: {
    env: process.env.NODE_ENV,
    // instanceId: process.env.INSTANCE_ID,
    // apiEnv: process.env.API_ENV
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
