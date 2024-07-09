Array.prototype.filter

To create a customFilter function that mimics Array.prototype.filter

Be sure that the function takes an array and a predicate function as arguments.

The predicate function is applied to each element of the array, and the elements that pass the predicate test are included in a new array that the function returns.

Parameters:
The array to filter
The predicate function to apply to each element
A new array with elements that pass the predicate test

Do:
Initialize an empty array to hold the filtered results
Iterate over each element in the input array
Check if the current element passes the predicate test
If it passes, add the element to the result array
Return the filtered result array
