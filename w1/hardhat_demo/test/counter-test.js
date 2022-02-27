const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Should return the new counter once it's changed", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    // const greeter = await Greeter.deploy("Hello, world!");
    const counter = await Counter.deploy();
    await counter.deployed();

    expect(await counter.getcount()).to.equal(0);

    const newcounter = await counter.callcount();

    // wait until the transaction is mined
    await newcounter.wait();

    expect(await counter.getcount()).to.equal(1);
  });
});
