const fckntoken = artifacts.require("FCKN");

module.exports = function (deployer) {
  deployer.deploy(fckntoken,16);
};