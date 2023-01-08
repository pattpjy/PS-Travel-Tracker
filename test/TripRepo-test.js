import { expect } from "chai";
import trips from '../src/data/data-trip'

describe("Trip Repository", () => {
    let tripRepo;
    let sampleData;
  
    beforeEach(() => {
      sampleData = trips.map((trip) => {
        return new Trip(trip);
      });
      tripRepo = new TripRepo(sampleData);
    });

    it("should be a function", function () {
      expect(TripRepo).to.be.a("function");
    });
    it("Should be instance of userRepository", function () {
      expect(tripRepo).to.be.an.instanceOf(TripRepo);
    });
    // it("Should have a user data property", function () {
    //   expect(userRepo.userData[0]).to.be.an.instanceOf(User);
    // });
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