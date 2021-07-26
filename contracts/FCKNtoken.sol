// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FCKN is ERC20 {
    constructor(uint256 initialSupply) ERC20("FCKN Fried Chicken", "FCKN") {
        _mint(msg.sender, initialSupply * 10 * decimals());
    }
}