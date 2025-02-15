import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";

import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const AppLayout = () =>{
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element :<Body/>
      },
      {
      path:"/about",
      element :<About/>
    },
    {
      path :"/contact",
      element:<Contact/>
    } ,{
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    }],
    errorElement:<Error/>
  }
]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);





// Why Not to Use Index as Key
// Using the index as a key can cause issues in certain scenarios, such as:

// Reordering Items: If the list items are reordered, React might not handle the updates efficiently, leading to incorrect component states or unnecessary re-renders.
// Insertion/Deletion: If items are inserted or deleted, the index of remaining items changes, which can cause issues with component identity and state preservation.
// Performance: Using unique keys helps React identify which items have changed, been added, or removed, allowing it to optimize rendering performance.