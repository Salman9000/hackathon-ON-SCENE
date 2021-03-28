const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(id, timestamp, vitalSigns,firstName,lastName, previousHash = '') {
 
    this.id = id
    this.firstName = firstName;
    this.lastName = lastName;
    this.timestamp = timestamp;
    
    // this.patientkey = patientkey
    this.vitalSigns = vitalSigns;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return SHA256(
      
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.vitalSigns) +
        this.nonce + this.id
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

export default Block;
