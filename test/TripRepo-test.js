import { expect } from "chai";
import trips from '../src/data/data-trip'
import TripRepo from "../src/TripRepo"


describe("Trip Repository", () => {
    let tripRepo;
  
    beforeEach(() => {
      tripRepo = new TripRepo(trips);
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
    // it("Should return friends firsts names", function () {
    //   expect(userRepo.getFriendData([1, 2])).to.deep.equal("Luisa, Jarvis");
    // });
  });