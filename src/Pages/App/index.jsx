import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import AboutMe from "../about-me";
import Projects from "../projects";
import Contact from "../contact";
import NotFound from "../not-found";
import MyHeader from  "../../Containers/Header"
import "./App.css";
import "./global.css";


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about-me", element: <AboutMe /> },
    { path: "/projects", element: <Projects /> },
    { path: "/contact", element: <Contact /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <MyHeader />
    </BrowserRouter>
  );
};

export default App;
