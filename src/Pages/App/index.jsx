import { useRoutes, BrowserRouter } from "react-router-dom";
import { MenuProvider } from "../../Context";
import Home from "../Home";
import AboutMe from "../about-me";
import Projects from "../projects";
import Contact from "../contact";
import NotFound from "../not-found";
import MyHeader from "../../Containers/Header";
import "./App.css";
import "./Global.css";
import "./Vars.css";

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
    <MenuProvider>
      <BrowserRouter>
        <AppRoutes />
        <MyHeader />
      </BrowserRouter>
    </MenuProvider>
  );
};

export default App;
