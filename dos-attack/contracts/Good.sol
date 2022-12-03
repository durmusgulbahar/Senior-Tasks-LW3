//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Good {
     address public currentWinner;
     uint public currentPrice;

     constructor() {
        currentWinner = msg.sender;
     }

     function offer() public payable {
        require(msg.value>currentPrice,"Your offer must be higher than current price");
        (bool sent,) = currentWinner.call{value:currentPrice}("");
        if(sent){
            currentWinner = msg.sender;
            currentPrice = msg.value;
        }
     }
}