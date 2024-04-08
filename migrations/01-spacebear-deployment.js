const Spacebear = artifacts.require("Spacebear");

module.exports = function(deployer) {
    const address = '0x2BecB354736d2830D904bbe4356b8C203209703B'
    deployer.deploy(Spacebear, address);
}