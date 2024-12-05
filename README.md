# JavaScript Function: Unexpected Null Handling

This repository demonstrates a subtle bug in a JavaScript function that handles null values. The function `foo` is designed to add two numbers, but its handling of null values is not completely robust.  The bug arises when both input parameters are null simultaneously, resulting in unexpected behavior.

## Bug Description

The `foo` function successfully handles cases where either `a` or `b` is null. However, it does not explicitly address the scenario where both parameters are null. This oversight can lead to unexpected behavior or errors in certain situations. The current code simply returns 0 when either parameter is null. However, a more comprehensive approach is necessary. 

## Solution

The solution addresses this issue by explicitly checking for the case where both `a` and `b` are null.  It provides a clear and robust handling mechanism for this specific scenario.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a code editor.
3. Execute the JavaScript files using Node.js or a similar environment.