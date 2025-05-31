import express from "express";
const app = express();
export default app;

// TODO: this file!
import employees from "./api/employees.js"

app.use(express.json());

app.route("/").get((req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});

app.use("/employees", employees)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send("code no work")
})