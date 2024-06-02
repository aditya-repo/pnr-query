const { fetchPnr, trainScheduleService, liveTrainService } = require("../service/confirmtkt")

const pnrQuery = async (req,res)=>{

    const {pnr} = req.body

    const data = await fetchPnr(pnr)

    const response = {
        "pnr": data.Pnr,
        "trainno": data.TrainNo,
        "trainname": data.TrainName,
        "doj": data.Doj,
        "bookingdate": data.BookingDate,
        "sourcedoj": data.SourceDoj,
        "from": data.From,
        "to": data.To,
        "class": data.Class,
        "reservationupto": data.ReservationUpto,
        "boardingpoint": data.BoardingPoint,
        "class": data.Class,
        "passengercount": data.PassengerCount,
        "passengerstatus": data.PassengerStatus.map(passenger => ({
            "currentberthno": passenger.CurrentBerthNo,
            "currentcoachid": passenger.CurrentStatusNew === 'CNF' ? passenger.CurrentCoachId : passenger.CurrentStatusNew + ' ' + passenger.CurrentCoachId
        }))
    };

    res.status(200).json(response)

}


const pnrQuery2 = async (req,res)=>{

    const {pnr} = req.body

    const data = await fetchPnr(pnr)

    console.log(data.TrainNo);
    if (data.TrainNo == null) {
        return res.status(404).json({"message": "invalid pnr"})
    }

    const response = {
        "pnr": data.Pnr,
        "trainno": data.TrainNo,
        "trainname": data.TrainName,
        "doj": data.Doj,
        "bookingdate": data.BookingDate,
        "sourcedoj": data.SourceDoj,
        "from": data.From,
        "to": data.To,
        "class": data.Class,
        "reservationupto": data.ReservationUpto,
        "boardingpoint": data.BoardingPoint,
        "class": data.Class,
        "passengercount": data.PassengerCount,
        "passengerstatus": data.PassengerStatus.map(passenger => ({
            "currentberthno": passenger.CurrentBerthNo,
            "currentcoachid": passenger.CurrentStatusNew === 'CNF' ? passenger.CurrentCoachId : passenger.CurrentStatusNew + ' ' + passenger.CurrentCoachId
        }))
    };

    res.status(200).json(response)

}


const trainSchedule = async (req,res)=>{

    const {trainno} = req.body
    const data = await trainScheduleService(trainno)
    res.json(data)
}

const liveTrainStatus = async (req,res)=>{

    const {trainno} = req.body

    const data = await liveTrainService(trainno)
    res.send(data)
}

module.exports = {pnrQuery, trainSchedule, liveTrainStatus, pnrQuery2}