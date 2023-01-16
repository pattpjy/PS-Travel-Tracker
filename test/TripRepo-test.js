import { expect } from "chai";
import trips from '../src/data/data-trip'
import destinations from '../src/data/data-destination'
import DestiRepo from "../src/DestiRepo";
import TripRepo from "../src/TripRepo"


describe.only("Trip Repository", () => {
    let tripRepo;
    let destRepo;

    beforeEach(() => {
      destRepo = new DestiRepo(destinations)
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
    it("Should return past trips data given userId", function () {
      expect(tripRepo.getPastTripsByUserID(44)[0].id).to.equal(1);
    });
    it("Should return future trips data given userId", function () {
      expect(tripRepo.getUpcomingTripsByUserID(44)[0].id).to.equal(5);
    });

    it("Should return pending trips data given userId", function () {
      expect(tripRepo.getPendingTripByUserID(9)[0].id).to.equal(10);
    });
    //create test data in here //
    it("Should return a YTD cost given userId", function () {
      expect(tripRepo.calcTripCostCurrYear(35)).to.equal(8888);
    });

    //unit test  createNewID
    //unit test createNewTrip
    //unit test calcEstCost
    it("Should return a estimate cost given input parameter", function () {
      const testData =  {
        id: 3,
        destination: "Sydney, Austrailia",
        estimatedLodgingCostPerDay: 130,
        estimatedFlightCostPerPerson: 950,
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        alt: "opera house and city buildings on the water with boats"
        }


      expect(tripRepo.calcEstCost(3,3,3)).to.equal(3564);
    });

    // DO NOT FORGET SAD PATH//
  });