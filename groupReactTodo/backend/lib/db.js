const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/groupReactTodo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on("error", console.error.bind(console, "Mongo Error"))

module.exports= db