const express = require("express");
const Sequelize = require("sequelize");
var bodyParser = require("body-parser");

const sequelize = require("./database/connect_database");

const app = express();
const port = 3000;

const customerRoutes = require("./api/routes/customer_routes");
const customer_document_routes = require("./api/routes/customer_document_routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use(customerRoutes);
app.use("/document", customer_document_routes);

sequelize
  .sync()
  .then((res) => {
    // console.log(res[0]);
    app.listen(port, () => {
      console.log(`BankApp listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
