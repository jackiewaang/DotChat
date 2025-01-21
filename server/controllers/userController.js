const db = require('../db');
const bcrypt = require('bcrypt');

exports.signUser = async (req, res) => {
    try{
        const sql = "SELECT * FROM users WHERE email=$1 OR username=$2;"
        const values = [req.body.email, req.body.username]
        const result = await db.query(sql, values);

        if(result.rows.length > 0){
            return res.status(400).json({message: 'Username and/or password already exist. Login or change username/email'});
        }

        const hashedPass = await bcrypt.hash(req.body.password, 10);

        const insert = "INSERT INTO users (email, username, password) VALUES ($1, $2, $3);"
        const insertValues = [req.body.email, req.body.username, hashedPass];

        await db.query(insert, insertValues);
        console.log(`User ${insertValues.at(1)} has been created`);
        res.status(201).json({message: 'User created successfully'});
    } catch(err){
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
}