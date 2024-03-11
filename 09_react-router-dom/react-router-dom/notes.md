How to install react-router-dom?
-> We can install react-router-dom like the other packages we install in a react project by using the following command:
`npm install react-router-dom`

There are some functions that we get along react-router-dom:
1. Link: Link is used in place of (<a>) tag. It renders an anchor tag (<a>) with a specified destination URL. When clicked, the Link component navigates to the specified URL without causing a full page reload.
Why (<a>) tag is not used and Link is used?
Because (<a>) tag causes the whole page to re-render/reload and in react there is no concept of reload. 

2. Navlink: The <NavLink> component is similar to <Link>, but with additional features for styling and managing active links. It allows you to apply custom styles or classes to active links and handle exact or strict matches. <NavLink> is commonly used for navigation menus or navigation bars where you want to highlight the active link.
Attributes of NavLink:
Here are the attributes of the NavLink component along with their explanations:
to: Specifies the URL path or location that the link should navigate to. It can be a string representing the path or a location object.

activeClassName: Specifies the class name that should be applied to the link when it matches the current URL. This allows you to apply custom styles to active links.

activeStyle: Specifies the inline styles that should be applied to the link when it matches the current URL. This allows you to apply custom inline styles to active links.

exact: A boolean value that, when true, ensures that the activeClassName or activeStyle is applied only when the current URL exactly matches the link's to prop. This is useful for handling exact matches.

isActive: A function that determines if the link should be considered active. It takes two arguments: match (the current match object) and location (the current location object). You can use this to define custom logic for determining if a link is active.

location: An optional location object that can be provided to override the current location used for matching. This is useful for testing and other edge cases where you want to manually control the location.

strict: A boolean value that, when true, requires an exact match for the pathname to consider the link active. This is useful for handling strict matches.

className: Specifies additional class names to be applied to the link. This allows you to add custom classes for styling purposes.

Example 
```jsx
import { NavLink } from 'react-router-dom';

<NavLink
  to="/about"
  activeClassName="active"
  activeStyle={{ fontWeight: 'bold' }}
  exact
  strict
  className="custom-link"
>
  About Us
</NavLink>
```
