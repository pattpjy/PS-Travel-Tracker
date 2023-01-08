import { expect } from "chai";
import destinations from "../src/data/data-destination"
import Destination from "../src/Destinations"

describe("Destination Repository", () => {
    let destination;
 
    beforeEach(() => {
        destination = new Destination(destinations[0]);
      });

    it("should be a function", function () {
      expect(Destination).to.be.a("function");
    });

    it("Should be instance of userRepository", function () {
      expect(destination).to.be.an.instanceOf(Destination);
    });

    it("should have properties that holds the traveler info", function () {
        expect(destination.destination).to.equal("Lima, Peru");
      });
})