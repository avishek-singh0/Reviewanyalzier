const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const DB = process.env.DATABASE

mongoose.connect(DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to Mongodb ')
})


const app = require("./app");
const PORT = process.env.PORT || 9001
app.listen(PORT,()=>console.log(`Server is running on ${PORT}`));