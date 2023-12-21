import express from "express";
import cors from "cors";
import recordRoutes from "./routes/record.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(recordRoutes);
// get driver connection
import connectToServer from "./db/conn.js";
app.listen(port, () => {
  // perform a database connection when server starts
  connectToServer(function (err) {
    if (err) console.error(err);
   });
  console.log(`Server is running on port: ${port}`);
});
