# Big O

**Big O guide**

> -> Calculation not dependent on input size -> O(1) \
> -> 1 loop -> O(n) \
> -> Nested loop -> O(n^2) \
> -> Input size reduced by half -> O(log n)

## Object - Big - O

- An object is a collection of key/value pairs.

### Time complexity

- Insert -> O(1)
- Remove -> O(1)
- Access -> O(1)
- Search -> O(n)
- Object.keys() -> O(n)
- Object.values() -> O(n)
- Object.entries() -> O(n)

## Array - Big - O

- An array is an ordered collection of values

### Time complexity

- Insert / Remove at the end -> O(1)
- Insert / Remove at the beginning -> O(n) => Because will be reset of rest value of array
- Access -> O(1)
- Search -> O(n)
- Push / Pop -> O(1)
- Shift / unshift / concat / slice / splice -> O(n)
- forEach / map / filter / reduce -> O(n)
