import { RouterProvider } from "react-router-dom";
import { routes } from "../Routes/Routes";
import "../styles/App.css";


function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
