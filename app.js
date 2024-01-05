const express = require("express");
const app = express();
const loginRoute = require('./routes/login.route');
const menuRoute = require('./routes/menu.route');
const port = 5000;

app.use(express.json());

//Routes
app.use("/api",loginRoute);
app.use("/api",menuRoute)

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
