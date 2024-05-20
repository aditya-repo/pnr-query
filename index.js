const express = require('express');
const {pnrQuery, trainSchedule, liveTrainStatus} = require('./controller/confirmtkt');
const authenticate = require('./middleware');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/pnr-query', authenticate, pnrQuery)
app.post('/train-schedule', trainSchedule)
app.post('/running-status', liveTrainStatus)

app.listen(4500, ()=>{
    console.log(`The server is running on port 4500`);
})