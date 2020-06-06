const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://root:toor@cluster0-kkzmc.mongodb.net/konverge`,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=>{
    //connected
    console.log("connected")
}).catch(()=>{
    console.log("DB not connected")
})

mongoose.Promise = global.Promise

module.exports = {
    mongoose
}