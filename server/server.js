import express from "express";
import cors from "cors";
import propertyRoutes from "./routes/property.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env"});

const app = express();

const port = process.env.VITE_PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(propertyRoutes);
// get driver connection
import connectToServer from "./db/conn.js";
app.listen(port, async () => {
  // perform a database connection when server starts
  await connectToServer(function (err) {
    if (err) console.error(err);
   });
  console.log(`Server is running on port: ${port}`);
});
