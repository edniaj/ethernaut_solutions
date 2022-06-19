## Problem
You need to trick the smart contract into thinking the first function call returns false and the second function call returns true

## Solution
Create a boolean state variable and reverse it's value when it is being called, thus first function call willr eturn false and second will return true.