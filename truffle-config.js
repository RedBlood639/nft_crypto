require("babel-register");
require("babel-polyfill");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },
  bsc: {
    provider: () => new HDWalletProvider(mnemonic, 'https://bsc-dataseed.binance.org', addressIndex),
    networkId: 56,
    gas: 6000000,
    gasPrice: 20e9
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  // compilers: {
  //   solc: {
  //     version: "pragma",
  //     optimizer: {
  //       enabled: true,
  //       runs: 200,
  //     },
  //   },
  // },
};
