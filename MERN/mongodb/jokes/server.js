const express = require('express');
const app = express();
const port = 8000;

// Don't forget to add this because Nichole forgets to add it a lot
require("./server/config/mongoose.config");

// Code that allows us to get req.body information
app.use(express.json(), express.urlencoded({extended:true}))

const AllMyRoutes = require("./server/routes/jokes.routes");
AllMyRoutes(app);

app.listen(port, () => console.log(`Running on port ${port}!!`));