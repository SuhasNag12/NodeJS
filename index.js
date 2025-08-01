import express from "express";
import routes from "./src/routes/crmRoute.js";
import bodyParser from "body-parser";
import pool from "./src/models/crmModel.js";

// dotenv.config();

const app = express();
const PORT = 3000;

pool
  .connect()
  .then(() => console.log(`Connected to PostgreSQL`))
  .catch((error) => {
    console.error(`Connection Error: `, err.stack);
  });

// bodyparser setup:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
  res.send(`Node and express server is running on Port: ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your Server is running on port: ${PORT}`);
});
