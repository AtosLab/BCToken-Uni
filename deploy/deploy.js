const { ethers, upgrades } = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  //console.log("Account balance:", (await deployer.getBalance()).toString());

  var name = "CustomBarcelonaCoin"
  var symbol = "CBLNC"
  var totalSupply = "100000000000000000000000"

  const BarCelonaCoin = await ethers.getContractFactory("CustomBarcelonaCoin");
  const BCLNC = await BarCelonaCoin.deploy(name, symbol, totalSupply);

  console.log("BCLNC Contract Address:", BCLNC.address);
}

main()
  .then(() =>  process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

