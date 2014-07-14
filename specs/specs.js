describe("coins", function() {
it ("Returns two quarters if change is 50 ", function () {
  coins(50).should.eql(["quarter", "quarter"]);
  });
it("Returns four quarters if change is 1 ", function () {
  coins(100).should.eql(["quarter", "quarter", "quarter", "quarter"]);
  });
it("Returns one dime if change is 10 ", function() {
  coins(10).should.eql(["dime"]);
  });
it("Returns a quarter and two pennies if change is 27", function() {
  coins(27).should.eql(["quarter", "penny", "penny"]);
  });
});
