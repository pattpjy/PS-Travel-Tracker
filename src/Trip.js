// create trip class to store a trip info

class Trip {
    constructor (data) {
        this.id = data.id,
        this.userID = data.userID,
        this.destinationID = data.destinationID,
        this.travelers = data.travelers,
        this.date = data.date,
        this.duration = data.duration,
        this.status = data.status,
        this.suggestedActivities = data.suggestedActivities
    }
}

