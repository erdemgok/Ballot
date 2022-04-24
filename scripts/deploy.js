const { ethers } = require("hardhat");

async function main() {
  const ballotContract = await ethers.getContractFactory("Ballot");

  const deployedBallotContract = await ballotContract.deploy([
    "0x657264656d000000000000000000000000000000000000000000000000000000",
  ]);

  await deployedBallotContract.deployed();

  console.log("Ballot Contract Address", deployedBallotContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
