const express = require('express');
const cors = require('cors');
const app = express();
const userCtrl = require('./controllers/userController');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/api/auth/signup", userCtrl.signUser)

const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})