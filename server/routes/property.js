import express from "express";

// The router will be added as a middleware and will take control of requests starting with path /record.
const propertyRoutes = express.Router();

// This will help us connect to the database
import { getDb } from "../db/conn.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";


// This section will help you get a list of all the propertys.
propertyRoutes.route("/properties").get(async function (req, response) {
    let db_connect = await getDb("kinder-real-estate");
    try {
        let res = await db_connect
            .collection("properties")
            .find({})
            .toArray();
        response.json(res);
    } catch (err) {
        console.error(err);
        response.status(500).send(err);
    }
});

// This section will help you get a single property by id
propertyRoutes.route("/property/:id").get( async function (req, response) {
    let db_connect = await getDb();
    let myquery = { _id: new ObjectId(req.params.id) };
    try {
        let res = await db_connect
            .collection("properties")
            .findOne(myquery);
        response.json(res);
    }   catch (err) {
        console.error(err);
        response.status(500).send(err);
    }
});

// This section will help you create a new property.
propertyRoutes.route("/properties/add").post(async function (req, response) {
    let db_connect = await getDb("kinder-real-estate");
    let myobj = {
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        postalCode: req.body.postalCode,
        propertyType: req.body.propertyType,
        price: req.body.price,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        squareFeet: req.body.squareFeet,
        lotSize: req.body.lotSize,
        yearBuilt: req.body.yearBuilt,
        description: req.body.description,
        images: req.body.images,
    };
    try {
        let res = await db_connect.collection("properties").insertOne(myobj);
        response.json(res);
    } catch (err) {
        console.error(err);
        response.status(500).send(err);
    }
});

// This section will help you update a property by id.
propertyRoutes.route("/update/:id").post(async function (req, response) {
    let db_connect = await getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        $set: {
            name: req.body.name,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            postalCode: req.body.postalCode,
            propertyType: req.body.propertyType,
            price: req.body.price,
            bedrooms: req.body.bedrooms,
            bathrooms: req.body.bathrooms,
            squareFeet: req.body.squareFeet,
            lotSize: req.body.lotSize,
            yearBuilt: req.body.yearBuilt,
            description: req.body.description,
            images: req.body.images,
        },
    };
    db_connect
        .collection("properties")
        .updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 listing updated");
            response.json(res);
        });
});

// This section will help you delete a property
propertyRoutes.route("/:id").delete((req, response) => {
    let db_connect = getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("properties").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 listing deleted");
        response.json(obj);
    });
});

// This section will help you search properties based on multiple search parameters.
propertyRoutes.route("/search").get(async function (req, response) {
    let db_connect = await getDb("kinder-real-estate");
    let searchParams = req.query;
    // Convert numerical search parameters from string to number
    if (searchParams.price) searchParams.price = Number(searchParams.price);
    if (searchParams.bedrooms) searchParams.bedrooms = Number(searchParams.bedrooms);
    if (searchParams.bathrooms) searchParams.bathrooms = Number(searchParams.bathrooms);
    // Construct the query
    let query = {};
    if (searchParams.city) query.city = searchParams.city;
    if (searchParams.bedrooms) query.bedrooms = searchParams.bedrooms;
    if (searchParams.bathrooms) query.bathrooms = searchParams.bathrooms;
    if (searchParams.price) query.price = searchParams.price;
    // If a keyword is provided, search for it in the name and description fields
    if (searchParams.keyword) {
        query.$or = [
            { name: { $regex: searchParams.keyword, $options: 'i' } },
            { description: { $regex: searchParams.keyword, $options: 'i' } }
        ];
    }
    try {
        let res = await db_connect
            .collection("properties")
            .find(query)
            .toArray();
        response.json(res);
    } catch (err) {
        console.error(err);
        response.status(500).send(err);
    }
});

export default propertyRoutes;
