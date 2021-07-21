const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
// database
require('./server/config/mongoose.config'); 
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
// routes
require('./server/routes/product_manager.routes.js')(app);
app.listen(port, () => {
    console.log(`Listening at Port ${port}!`)
})