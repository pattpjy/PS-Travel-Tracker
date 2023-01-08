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
    // it("Should return user data given an id", function () {
    //   expect(userRepo.getUserData(1)).to.deep.equal(sampleData[0]);
    // });
    // it("Should return avarage step goal amoungst all users", function () {
    //   expect(userRepo.calculateAverageStepGoal()).to.equal(6666.67);
    // });
    // it("Should return friends firsts names", function () {
    //   expect(userRepo.getFriendData([1, 2])).to.deep.equal("Luisa, Jarvis");
    // });
  });