const mongoose = require("mongoose");

const DB = "mongodb+srv://AnniDahiya:Imurdad0k@cluster0.lvakw8c.mongodb.net/Authusers?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(()=> console.log("DataBase Connected")).catch((error)=> {
    console.log(error);
});