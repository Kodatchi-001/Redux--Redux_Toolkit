#  Redux and Redux Toolkit

## What is Redux?

Redux is a JavaScript library for predictable state management in applications. It centralizes the application's state in a single store and ensures that the state is modified in a predictable and consistent way. Redux is primarily used in React applications, but it can also be used with other libraries or frameworks.

### Why use Redux?

Using Redux becomes essential in applications with complex or shared states across multiple components. Here are a few reasons why Redux is useful:
- **Centralization of state:** The application's state is stored in a single location, making it easier to manage and synchronize data.
- **Predictability:** The state can only be modified by specific actions, ensuring a clear and controlled data flow.
- **Easier debugging:** Thanks to its architecture, Redux allows tracking actions and states using tools like Redux DevTools.

## What is Redux Toolkit?

Redux Toolkit is an official set of tools to simplify the usage of Redux. It provides convenient methods and default configurations that reduce the verbosity of Redux code while maintaining its power.

### Why use Redux Toolkit?

Redux Toolkit is recommended for most projects because it:
- Simplifies Redux initialization and store configuration.
- Reduces the need to write a lot of boilerplate code (such as actions and reducers).
- Offers advanced features like `createAsyncThunk` to handle asynchronous requests in a simplified way.
- Improves code readability and maintainability.

## Conclusion

Redux and Redux Toolkit offer a powerful solution for managing your application state in a predictable way. 
Redux Toolkit greatly simplifies the use of Redux, making state management easier and faster. If your application
requires complex or shared state management, using Redux and the Redux Toolkit can significantly improve 
the structure and maintainability of your code.

## Installation

### 1. Installation Redux

``` npm install redux ```

### 2. Installation Redux Toolkit

``` npm install @reduxjs/toolkit ```
