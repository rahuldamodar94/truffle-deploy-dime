const HDWalletProvider = require("@truffle/hdwallet-provider");
let config = require("./config.json");

const mnemonic = config.secret;

module.exports = {
  networks: {
    matic: {
      provider: () =>
        new HDWalletProvider(mnemonic, `https://rpc-mumbai.matic.today`),
      network_id: 80001,
      gas: 7000000,
      gasPrice: 10000000000, // 10 gwei
      skipDryRun: true,
      // confirmations: 5
    },
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.6", // Fetch exact version from solc-bin (default: truffle's version)
      parser: "solcjs",
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
