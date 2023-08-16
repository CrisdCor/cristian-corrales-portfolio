import React from "react";
import { createContext, useContext, useState } from "react";
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
  ];

  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const openProjectDetail = () => setIsProjectOpen(true);
  const closeProjectDetail = () => setIsProjectOpen(false);

  const [projectToShow, setProjecTotShow]=useState({})

  return (
    <ProjectContext.Provider
      value={{
        getProjectsData,
        isProjectOpen,
        setIsProjectOpen,
        projectToShow,
        setProjecTotShow,
        openProjectDetail,
        closeProjectDetail
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
