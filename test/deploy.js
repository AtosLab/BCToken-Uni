const { expect } = require("chai");

describe("BCLNC", function() {
  it("Should return the new greeting once it's changed", async function() {
    const BCLNC = await ethers.getContractFactory("CustomBarcelonaCoin");
    const bclnc = await BCLNC.deploy("Hello, world!");

    await bclnc.deployed();
    // expect(await bclnc.greet()).to.equal("Hello, world!");

    // await bclnc.setGreeting("Hola, mundo!");
    // expect(await bclnc.greet()).to.equal("Hola, mundo!");
  });
});
