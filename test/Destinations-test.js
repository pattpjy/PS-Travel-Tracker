import { expect } from "chai";
import destinations from "../src/data/data-destination"
import Destination from "../src/Destinations"

describe("Destination class", () => {
    let destination;
    beforeEach(() => {
      destination = new Destination(destinations[0]);
    });
 describe("#constructor", () => {
 
    // Create the destination
    // Confirm it has the right data
    it("should be a function", function () {
      expect(Destination).to.be.a("function");
    });

    it("Should be instance of userRepository", function () {
      expect(destination).to.be.an.instanceOf(Destination);
    });

    it("should have properties that holds the traveler info", function () {
        expect(destination.destination).to.equal("Lima, Peru");
      });

    it("instantiates correctly when alt text is not provided", function () {
      const testData = [
        {
          id: 8,
          destination: "Tokyo, Japan",
          estimatedLodgingCostPerDay: 125,
          estimatedFlightCostPerPerson: 1000,
          image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80",
          }
      ]
       destination = new Destination(testData[0]);
       expect(destination.alt).to.equal('Image of Tokyo, Japan');
    })
  
  })
 })
    

    