const express = require("express");
const app = express();
const loginRoute = require('./routes/login.route');
const menuRoute = require('./routes/menu.route');
const billsRoute = require('./routes/bills.route');
const transactionRoute = require('./routes/transaction.route');
const port = 5000;

app.use(express.json());

//Routes
app.use("/api",loginRoute);
app.use("/api",menuRoute);
app.use("/api",billsRoute);
app.use("/api",transactionRoute);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
