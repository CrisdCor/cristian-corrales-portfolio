import React from "react";
import { createContext, useContext, useState } from "react";
import ImageFocalStudio from "../assets/Images/FotoPrueba.png";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const getProjectsData = () => [
    {
      name: "Focal Studio",
      description:
        "Este proyecto pertenece a una empresa de fotografía en el cual se muestran sus clientes y servicios que presta",
      type: "Aplicación web",
      year: 2023,
      repository: "https://github.com/CrisdCor/curso-shopi-project",
      url: "https://crisdcor.github.io/curso-react-intro/",
      image: ImageFocalStudio,
    },
    {
      name: "Todo List",
      description:
        "Este proyecto pertenece a una empresa de fotografía en el cual se muestran sus clientes y servicios que presta",
      type: "Aplicación web",
      year: 2023,
      repository: "https://github.com/CrisdCor/curso-shopi-project",
      url: "https://crisdcor.github.io/curso-react-intro/",
      image: ImageFocalStudio,
    },
    {
      name: "Academia Alexander",
      description:
        "Este proyecto pertenece a una empresa de fotografía en el cual se muestran sus clientes y servicios que presta",
      type: "Aplicación web",
      year: 2023,
      repository: "https://github.com/CrisdCor/curso-shopi-project",
      url: "https://crisdcor.github.io/curso-react-intro/",
      image: ImageFocalStudio,
    },
  ];

  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const openProjectDetail = () => setIsProjectOpen(true);
  const closeProjectDetail = () => setIsProjectOpen(false);

  const [projectToShow, setProjectToShow] = useState([{}]);

  return (
    <ProjectContext.Provider
      value={{
        getProjectsData,
        isProjectOpen,
        setIsProjectOpen,
        projectToShow,
        setProjectToShow,
        openProjectDetail,
        closeProjectDetail,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
