import Hero from "./Component/Layout/Hero"
import Navber from "./Component/Layout/Navber"
import Loader from "./Component/Loader"
import Project from "./Component/Layout/Project"
import ContactPart from "./Component/Layout/ContactPart"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RoutLayouts from "./Component/RoutLayouts"
import { Home } from "./Component/Layout/Home"
import ContactPart2 from "./Component/Layout/ContactPart2"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RoutLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPart2 />} />
        </Route>
      </Route>
    )
  );


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
