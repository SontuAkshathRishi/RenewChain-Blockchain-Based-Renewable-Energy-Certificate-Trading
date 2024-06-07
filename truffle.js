module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*' // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "0.4.24", // Example of reverting to a specific earlier version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};
