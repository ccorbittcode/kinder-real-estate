import { MongoClient } from "mongodb";

let _db;

export default async function connectToServer() {
    const Db = process.env.VITE_ATLAS_URI;
    const client = new MongoClient(Db);

    try {
        const db = await client.connect();
        // Verify we got a good "db" object
        if (db) {
            _db = db.db("employees");
            console.log("Successfully connected to MongoDB.");
        }
        return _db;
    } catch (err) {
        throw err;
    }
}
