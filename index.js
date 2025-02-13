const app = require("./app");

const port = 3002;
const host = "127.0.0.1";

// server
const server = app.listen(port, host, () => {
  console.log("Server is runing", port);
});
