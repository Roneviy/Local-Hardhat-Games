// add the game address here and update the contract name if necessary
const gameAddr = "0x0165878A594ca255338adfa4d48449f69242Eb8F";
const contractName = "Game3";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const txWin = await game.win(45);
    const receipt = await txWin.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
