---
tags: 
    - Algorithm
---
# Problem
If you have a large number of classes that need to be able to add a large number of operations to you have to modifiy all of the classes everytime you add a new operation.

# Solution
1. Add a hook to each original/type class for double dispatch
2. Create a visitor class each time you add an operation
