import express from "express"
import bodyParser from "body-parser"

const app = express()

app.use(bodyParser.json())
app.use("/", express.static("static"))
app.use("*", (rec, res) => res.status(404).json( { error: "not found"}))

export default app