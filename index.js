const express = require('express')
const cors = require('cors');
const app = express()
const {dataSource, columns} = require("./data")

app.use(cors({
    origin: "http://localhost:3000"
}))


app.get('/', (req, res) => {
    res.json({columns, dataSource})
})


app.listen(5000, () => console.log("listening on port 5000"))
