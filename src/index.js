import app from "./server"
import { MongoClient } from "mongodb"


const port = process.env.PORT || 8000

MongoClient.connect(
    process.env.COGOMBRE_DB_URI,
    {
        useNewUrlParser: true,
        poolSize: 50,
        connectTimeoutMS: 2500
    }
)
    .catch( err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(client => {
        console.log("Connected to DB!")
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })