const mysql = require("mysql");
const express = require("express");

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const pool = mysql.createPool({
    host: "database-1.abcdefg.us-west-4.rds.amazonaws.com",
    user: "root",
    password: "",
    database: "",
});

app.get("/api/devices/:location", (req, res) => {
    const location = req.params.location;
    pool.query(
        "SELECT * FROM objects_view WHERE station_name = ? AND object_type = 'device'",
        [location],
        (error, results) => {
            if (error) {
                res.status(500).send("Error retrieving data from database");
            } else {
                res.json(results);
            }
        }
    );
});

app.get("/api/points/:location/:parent", (req, res) => {
    const location = req.params.location;
    const parent = req.params.parent;
    pool.query(
        "SELECT * FROM objects_view WHERE station_name = ? AND parent_device = ?",
        [location, parent],
        (error, results) => {
            if (error) {
                res.status(500).send("Error retrieving data from the database");
            } else {
                res.json(results);
            }
        }
    );
});
