import { expect } from "chai";
import destinations from '../src/data/data-destination'
import Destination from "../src/Destinations";
import DestiRepo from "../src/DestiRepo"


describe("Destination Repository", () => {
    let destiRepo;
  
    beforeEach(() => {
        destiRepo = new DestiRepo(destinations);
    });
    it("should be a function", function () {
        expect(DestiRepo).to.be.a("function");
      });
    it("Should be instance of DestiRepo", function () {
        expect(destiRepo).to.be.an.instanceOf(DestiRepo);
      });
    it("Should have instance of Destination class", function () {
    
        expect(destiRepo.destiData[0].constructor.name).to.equal("Destination")
      }); // how to handle  missing property constructor.name
      it("Should return destinations data given destination id", function () {
        //create testData in it bolck make this test less likely to break
       const testData =  {
            id: 3,
            destination: "Sydney, Austrailia",
            estimatedLodgingCostPerDay: 130,
            estimatedFlightCostPerPerson: 950,
            image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            alt: "opera house and city buildings on the water with boats"
            }
       destiRepo = new DestiRepo([testData]) // DestiRepo expect an array, so I give it an array
        expect(destiRepo.getDestinationById(testData.id).destination).to.equal(testData.destination);
      });
       // DO NOT FORGET SAD PATH//
  });