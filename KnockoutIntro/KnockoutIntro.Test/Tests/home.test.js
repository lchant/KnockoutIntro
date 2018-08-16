/// <reference path="../scripts/jasmine/jasmine.js" />
describe('Check first name', function() {
    var testModel;

    beforeEach(function() {
        testModel = new InitialViewModel();
    });
    it("should return the first name"), function() {
        expect(testModel.firstName()).toBe("");
    }
})