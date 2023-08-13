import React from "react";
import { createContext, useContext } from "react";
import ImageFocalStudio from "../assets/Images/FotoPrueba.png";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const getProjectsData = () => [
    {
      name: "Focal Studio",
      description: "Empresa de fotografía",
      type: "Aplicación web",
      year: 2023,
      repository: "https://github.com/CrisdCor/curso-shopi-project",
      url: "https://crisdcor.github.io/curso-react-intro/",
      image: ImageFocalStudio,
    },
    {
      name: "Todo List",
      description: "Empresa de fotografía",
      type: "Aplicación web",
      year: 2023,
      repository: "https://github.com/CrisdCor/curso-shopi-project",
      url: "https://crisdcor.github.io/curso-react-intro/",
      image: ImageFocalStudio,
    },
    {
      name: "Todo List",
      description: "Empresa de fotografía",
      type: "Aplicación web",
      year: 2023,
      repository: "https://github.com/CrisdCor/curso-shopi-project",
      url: "https://crisdcor.github.io/curso-react-intro/",
      image: ImageFocalStudio,
    },
  ];

  return (
    <ProjectContext.Provider value={{ getProjectsData }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
