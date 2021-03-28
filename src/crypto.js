const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, timestamp, data, previousHash) {
    this.index = index;
 this.timestamp = timestamp;
      // this.patientkey = patientkey
      this.data = data;
      this.previousHash = previousHash;
      this.hash = this.calculateHash();
      this.nonce = 0;
  }

  calculateHash() {
    return SHA256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data)+this.nonce
    ).toString();
  }
  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log(`Block mined:` + this.hash);
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 5;
  }

  createGenesisBlock() {
    return new Block(
      0,
      "28/03/2021",
      {
        bloodpressure: "120/80",
        heartrate: "80",
      },
      "0"
    );
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  ischainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

export default Blockchain
// let onscene = new Blockchain();
// console.log("Mining Block 1")
// onscene.addBlock(
//   new Block(1, "28/03/2021", { bloodpressure: "120/80", heartrate: "80" })
// );
// onscene.addBlock(
//   new Block(2, "30/03/2021", { bloodpressure: "120/80", heartrate: "80" })
// );

// console.log("is BlockChain Valid?" + onscene.ischainValid());
// console.log(JSON.stringify(onscene, null, 4));
