// create trip class to store a trip info
// create function to generate trip id
class Trip {
    constructor (data) {
        this.id = data.id,
        this.userID = data.userID,
        this.destinationID = data.destinationID,
        this.travelers = data.travelers,
        this.date = data.date,
        this.duration = data.duration,
        this.status = data.status || "Pending",
        this.suggestedActivities = data.suggestedActivities
    }
}

export default Trip