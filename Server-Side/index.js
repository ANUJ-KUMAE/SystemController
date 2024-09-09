require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const ConnectDB = require("./Connection/config");
const ErrorMiddleware = require("./Middlewares/ErrorMiddleware");
const ElectricianRouter = require("./Router/ElectricianRouter");
const CustomerRouter = require("./Router/CustomerRouter");
const AutomaticComplaintRouter = require("./Router/AutomaticComplaintRouter");
const ResolveComplaintRouter = require("./Router/ResolveComplaintRouter");
const AuthRouter = require("./Router/LoginAuthenticationRouter");

var corsOption = {
  origin: "https://system-controllerclientside.vercel.app",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());

app.use("/Api/Auth", AuthRouter);
app.use("/Api/Electrician", ElectricianRouter);
app.use("/Api/Customer", CustomerRouter);
app.use("/Api/AutoComplaint", AutomaticComplaintRouter);
app.use("/Api/resolve", ResolveComplaintRouter);

app.use(ErrorMiddleware);

const PORT = 8965;

ConnectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`APP is Renning on the PORT ${PORT}`);
  });
});
