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

    // DO NOT FORGET SAD PATH//
  });