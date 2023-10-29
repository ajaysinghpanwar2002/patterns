// Provider Pattern - Make data available to multiple child components

/**
 * @provider
 * A Provider is a higher order component provided to us by the Context object. We can create a Context object, using the createContext method that React provides for us.
 * 
 * Each component can get access to the data, by using the useContext hook. This hook receives the context that data has a reference with, DataContext in this case. The useContext hook lets us read and write data to the context object.
 * 
 */

// Tradeoffs

/**
 * @pros
1. The Provider pattern/Context API makes it possible to pass data to many components, without having to manually pass it through each component layer.

2. It reduces the risk of accidentally introducing bugs when refactoring code. Previously, if we later on wanted to rename a prop, we had to rename this prop throughout the entire application where this value was used.

3. We no longer have to deal with prop-drilling, which could be seen as an anti-pattern. Previously, it could be difficult to understand the dataflow of the application, as it wasn't always clear where certain prop values originated. With the Provider pattern, we no longer have to unnecessarily pass props to component that don't care about this data.

4. Keeping some sort of global state is made easy with the Provider pattern, as we can give components access to this global state.

 * @cons
1. In some cases, overusing the Provider pattern can result in performance issues. All components that consume the context re-render on each state change.

2. Let's look at an example. We have a simple counter which value increases every time we click on the Increment button in the Button component. We also have a Reset button in the Reset component, which resets the count back to 0.

3. When you click on Increment, however, you can see that it's not just the count that re-renders. The date in the Reset component re-renders as well!
 */