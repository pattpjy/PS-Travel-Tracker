import { expect } from "chai";
import trips from '../src/data/data-trip'
import destinations from '../src/data/data-destination'
import DestiRepo from "../src/DestiRepo";
import TripRepo from "../src/TripRepo"


describe.only("Trip Repository", () => {
    let tripRepo;
    let destRepo;

  describe('#constructor', function () {
    beforeEach(() => {
      tripRepo = new TripRepo(trips,destRepo);
    });

    it("should be a function", function () {
      expect(TripRepo).to.be.a("function");
    });
    it("Should be instance of TripRepo", function () {
      expect(tripRepo).to.be.an.instanceOf(TripRepo);
    });
     it("Should have properties that holds the tripRepo info", function () {
      expect(tripRepo.tripData).to.deep.equal(trips);
    });
  })

  describe('#method', function () {
    destRepo = new DestiRepo(destinations)
    it("Should return past trips data given userId", function () {
      expect(tripRepo.getPastTripsByUserID(44)[0].id).to.equal(1);
      expect(tripRepo.getPastTripsByUserID(43).length).to.equal(0);
    });
    it("Should return future trips data given userId", function () {
      expect(tripRepo.getUpcomingTripsByUserID(44)[0].id).to.equal(5);
      expect(tripRepo.getUpcomingTripsByUserID(35).length).to.equal(0);
    });

    it("Should return pending trips data given userId", function () {
      expect(tripRepo.getPendingTripByUserID(9)[0].id).to.equal(10);
      expect(tripRepo.getUpcomingTripsByUserID(35).length).to.equal(0);
    });
   
    it("Should return a YTD cost given userId", function () {
      expect(tripRepo.calcTripCostCurrYear(35)).to.equal(8888);

    });

    //unit test  createNewID
    it('Should return new ID for trips', function() {
      expect(tripRepo.createNewID()).to.equal(11)
    })
    //unit test createNewTrip
    it('Should add new trip to tripRepo', function() {
      const input = {
        id: 13,
        userID: 14,
        destinationID: 12,
        travelers: 1,
        date: "2022/02/12",
        duration: 11,
        status: "approved",
        suggestedActivities: [ ]
        }
        tripRepo.createNewTrip(input)
        
      expect(tripRepo.tripData.length).to.equal(11)
    })
    //unit test calcEstCost
    it("Should return a estimate cost given input parameter", function () {
      expect(tripRepo.calcEstCost(3,3,3)).to.equal(3564);
    });

  })
    


    
    

    // DO NOT FORGET SAD PATH//
  });