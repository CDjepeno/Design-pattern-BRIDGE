import { App } from "../src/App";
describe("Run main", () => {
  it("should be return 4", () => {
    expect(App.main1()).toEqual(4);
  });
  it("should be return 20", () => {
    expect(App.main2()).toEqual(20);
  });
});
