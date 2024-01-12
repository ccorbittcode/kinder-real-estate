import express from "express";
import cors from "cors";
import propertyRoutes from "./routes/property.js";
import dotenv from "dotenv";
import session from 'express-session';
import passport from "passport";
dotenv.config({ path: "../.env"});

const app = express();

// Express.js setup
app.use(cors({
    origin: `http://localhost:${process.env.VITE_ORIGIN_PORT}`,
    credentials: true
}));
app.use(express.json());
app.use(session({
    secret: process.env.VITE_PASSPORT_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new session.MemoryStore()
}));

// Initialize Passport.js and its session handling
app.use(passport.initialize());
app.use(passport.session());

app.use(propertyRoutes);

// get driver connection
import connectToServer from "./db/conn.js";

const port = process.env.VITE_PORT || 5000;
app.listen(port, async () => {
  // perform a database connection when server starts
  await connectToServer(function (err) {
    if (err) console.error(err);
   });
  console.log(`Server is running on port: ${port}`);
});
