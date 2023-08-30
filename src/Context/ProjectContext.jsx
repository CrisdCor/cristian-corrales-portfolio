import React from "react";
import { createContext, useContext, useState } from "react";
import ImageFocalStudio from "../assets/Images/TodoListImage.jpeg";
import PlayerMockupImage from "../assets/Images/PlayerMockupImage.jpeg";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const getProjectsData = () => [
    {
      name: "Todo List",
      description:
        "Proyecto académico hecho con React, es un MBP que tenía como objetivo aplicar los conocimientos adquiridos a través de los distintos cursos realizados. Se espera pronto realizar un upgrade de la UI del producto.",
      type: "Aplicación web",
      year: 2023,
      repository: "https://github.com/CrisdCor/curso-react-intro.git",
      url: "https://crisdcor.github.io/curso-react-intro/",
      image: ImageFocalStudio,
    },
    {
      name: "Diseño de Reproductor",
      description:
        "Diseño de un reproductor de música para móvil, en este proyecto se trató de aplicar algo de la tendencia del Neomorfismo.",
      type: "Prototipo",
      year: 2022,
      repository: "https://www.behance.net/gallery/168513077/Reproductor",
      url: "https://www.figma.com/file/tPPvuN0T558dbYoJ7f3dXR/ReproductorProject?type=design&node-id=0%3A1&mode=design&t=hexgdbqjMgOe5hlb-1",
      image: PlayerMockupImage,
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
