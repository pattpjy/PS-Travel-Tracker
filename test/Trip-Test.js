import { expect } from "chai";
import trips from "../src/data/data-trip"
import Trip from "../src/Trip"

describe("Trip", () => {
    let trip;
 
    beforeEach(() => {
        trip = new Trip(trips[0]);
      });

    it("should be a function", function () {
      expect(Trip).to.be.a("function");
    });

    it("Should be instance of Trip", function () {
      expect(trip).to.be.an.instanceOf(Trip);
    });

    it("Should have properties that holds the trip info", function () {
        expect(trip.date).to.equal("2022/09/16");
      });
})