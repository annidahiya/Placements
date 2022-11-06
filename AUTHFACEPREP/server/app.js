const express = require("express");
const app = express();
const port = 8001;
const router = require("./routes/router");
const cors = require("cors")

require("./db/conn")
// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });

app.use(express.json());
app.use(router);
app.use(cors());


app.listen(port,()=>{
    console.log(`server start at port no. ${port}`);
})