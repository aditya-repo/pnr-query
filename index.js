const express = require('express');
const {pnrQuery, trainSchedule, liveTrainStatus, pnrQuery2} = require('./controller/confirmtkt');
const authenticate = require('./middleware');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    return res.json({message: "Hello Guys!"})
})
app.post('/pnr-query', pnrQuery)
app.post('/pnr-query2', authenticate, pnrQuery2)
// app.post('/pnr-query', authenticate, pnrQuery)
app.post('/train-schedule', trainSchedule)
app.post('/running-status', liveTrainStatus)

app.listen(4500, ()=>{
    console.log(`The server is running on port 4500`);
})