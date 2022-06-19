## Problem
Change owner of Telephone contract to your address

## Solution
You have to use deploy contract to call Telephone. If you use Attack contract as a proxy, msg.sender will be Attack contract's address while tx.origin will be your address. 

### Tip
You can call another contract using constructor, this is commonly used to attack contract that uses extcodesize (assembly) to check if msg.sender is a contract or EOA. Since function was called during initialization phase, the runtime portion of the bytesize code is not deployed on the EVM yet thus extcodesize == 0.