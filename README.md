//2 TYPES OF IMPORT/EXPORT


 1.DEFAULT EXPORTS/IMNPORTS
 export default componentsname;
 import componentname from "path";

 2.NAMED EXPORT/IMNPORT
export const componentname;
import {componentname} from "path";  

Hooks:-react hooks are normal JS utility functions that are used in react developed by facebook.

useState :-is used to  give superpowerful variable in  that means this hook is used to create a state variable.whenever state variable updates,
react will re-render the components and updates in UI(all these happened due to react fibre)

Reconciliation algorithm(react 16) is also known as react fiber(react-18).

it will find out the difference two vitual DOMs and updates the UI.virtual is like a object.it will finding out the differnece between these two objects and updates the actual DOM.(It won't compare the two html code/elements but it only compares two objects)

GO through react fiber documenation(acdlite.github.com)