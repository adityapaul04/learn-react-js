### Props in React.js

**1. What are Props?**
Props (short for properties) are read-only data that are passed from parent components down to their child components in a React application. They allow you to customize and configure child components based on the needs of the parent component.

**2. Passing Props**
Props are passed to components as attributes. When you define a component in JSX, you can pass props by adding attributes to the component tag. For example:
```jsx
// ParentComponent.js
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return (
    <div>
      <ChildComponent name="John" age={30} />
    </div>
  );
}
```

**3. Receiving Props**
In the child component, you can access props via the props object. For functional components:

```jsx
// ChildComponent.js
function ChildComponent(props) {
  return <div>{props.name} is {props.age} years old.</div>;
}
```
For class components, props are accessed via this.props.


**4. Default Props**
You can specify default values for props in case they are not provided by the parent component. This is done using the defaultProps property:

```jsx
function ChildComponent(props) {
  return <div>{props.name} is {props.age || 'unknown'} years old.</div>;
}

ChildComponent.defaultProps = {
  age: 'unknown'
};
```