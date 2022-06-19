## Problem
You are given the address of delegation contract, it uses delegatecall in it's fallback function. Change the owner of delegation contract

## Solution
delegatecall uses the same context to call the Delegate contract, thus pwn() will use SSTORE (assembly) to store msg.sender into delegation contract storage slot 1.
Since owner is at storage slot 1 of Delegate contract, it will change the storage slot 1 of Delegation contract which is owner. 