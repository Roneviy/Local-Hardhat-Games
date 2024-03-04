// add the game address here and update the contract name if necessary
const gameAddr = "0x09635F643e140090A9A8Dcd712eD6285858ceBef";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const tx1 = await game.giveMeAllowance(10000);
    tx1.wait();

    const tx2 = await game.mint(10000);
    tx2.wait();
    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const txWin = await game.win();
    const receipt = await txWin.wait();
    console.log(receipt);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
