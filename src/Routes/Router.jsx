import { createBrowserRouter} from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layouts/Main/Main";



 export const router = createBrowserRouter([
  {
    path: "/",
     element: <Home />,
     children: [
      {path:'/',element:<Main></Main>}
    ]
  },
]);