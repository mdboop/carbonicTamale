var path = require('path');
var GITHUB_CLIENT_ID = null;
var GITHUB_CLIENT_SECRET = null;
var GITHUB_CALLBACK = null;
var port = null;
if (process.env.NODE_ENV === 'PRODUCTION') {
  console.log("Running in production mode");
  port = 80;
  GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
  GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
  GITHUB_CALLBACK = process.env.GITHUB_CALLBACK;
}
else {
  console.log("Running in development mode");
  port = 3000;
  GITHUB_CLIENT_ID = "c9f79f6f0da28cfe0d5e";
  GITHUB_CLIENT_SECRET = "f9c1f12d3029fc8f23f5e851a83ec660b5318066";
  GITHUB_CALLBACK = "http://127.0.0.1:3000/auth/github/callback";
}

module.exports = {
  public: path.join(__dirname, '../public'),
  port: port,
  GITHUB_CLIENT_ID: GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: GITHUB_CLIENT_SECRET,
  GITHUB_CALLBACK: GITHUB_CALLBACK
};
