# Redux Theory

## What is Redux ?
 React-redux is a state management tool makes it easier to pass these states from one component to another irrespective of their position in the component tree.
 React-redux provides a store, it's like a container that holds the information (states)  which makes the state inside components easier to maintain.
 Along with stores, react-redux introduces actions and reducers which work simultaneously with stores to make the state more predictable.
 
 Store: It contains the state of the components which need to be passed to other components.
 
 Actions: These are like tasks you want to perform on the information in the store. They have a type (kind of like a category) and can also carry additional data (payload) if needed.
 
 Reducers: These are special functions that do the actual work when an action is performed. They take the current state and the action, perform some operations, and give back the updated state. This updated state is then used to update the webpage.


### Folder Structure

In the project directory, you can organize your code with these files:

1. **action.js:** In this file, you define the actions that need to be performed. Actions are like tasks that describe what should happen. For example, you might have actions like "increment counter" or "decrement counter."

2. **reducer.js:** This is where you write the logic for handling actions. You define how the state should change based on different actions. For instance, you implement the logic for incrementing or decrementing the counter in response to specific actions.

3. **store.js:** In the store, you keep your root reducer. The store is responsible for holding the current state of your application. The root reducer combines all your reducers into one and is used when creating the store.

### Calling Process

### Dispatch >> Action >> Reducer
When you want to make changes to the state, you follow this process:

1. **Dispatch:** You initiate a state change by dispatching an action. Dispatching is like saying, "Hey, I want to perform this action!"

2. **Action:** The dispatched action travels to the reducers. Actions contain information about what needs to change in the state. For example, an action might specify that the counter should be incremented.

3. **Reducer:** The reducer receives the action and contains the logic to update the state based on that action. If the action is to increment the counter, the reducer will perform the necessary logic and return the updated state.

So, in summary, you dispatch an action, which then goes through the reducer to update the state in the store.


