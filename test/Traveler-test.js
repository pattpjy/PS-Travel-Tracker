import { expect } from "chai";
import travelers from "../src/data/data-traveler"
import Traveler from "../src/Traveler"

describe("Traveler Repository", () => {
    let traveler;
 
    beforeEach(() => {
        traveler = new Traveler(travelers[0]);
      });

    it("should be a function", function () {
      expect(Traveler).to.be.a("function");
    });

    it("Should be instance of userRepository", function () {
      expect(traveler).to.be.an.instanceOf(Traveler);
    });

    it("should have properties that holds the traveler info", function () {
        expect(traveler.id).to.equal(1);
      });

})