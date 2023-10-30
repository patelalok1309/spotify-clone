const express = require('express')
const app = express();
require('dotenv/config')

const cors  = require('cors')
const { default : mongoose} = require('mongoose');

app.use(cors({origin : true}));
app.use(express.json())

app.get("/" , (req , res)=>{
    return res.json("Hai there....");
})

// user authentication route 
const userRoute = require('./routes/auth');
app.use("/api/users/" , userRoute);

// Artist Routes 
const artistRoutes = require("./routes/artist");
app.use('/api/artists/' , artistRoutes);

// Albums Routes
const albumRoutes = require("./routes/album");
app.use('/api/albums/', albumRoutes);

// Songs Routes
const songRoutes = require('./routes/songs');
app.use('/api/songs/' , songRoutes);

//usenewurlparser because without it , it shows depriciations waarnings
mongoose.connect(process.env.DB_STRING , {useNewUrlParser: true}); 
mongoose.connection
.once("open" , ()=> console.log("Connected"))
.on('error' , (error)=> console.log(`ERROR: ${error}`))

app.listen(4002 , ()=>{ console.log("http://localhost:4002")})


