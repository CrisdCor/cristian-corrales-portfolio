import React from "react";
import { createContext, useContext, useState } from "react";
import ImageFocalStudio from "../assets/Images/TodoListImage.jpeg";
import PlayerMockupImage from "../assets/Images/PlayerMockupImage.jpeg";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const getProjectsData = () => [
    {
      name: "Academia Alexander",
      description:
        "Proyecto académico que se realizó utilizando React. En este se buscó aplicar los conocimientos adquiridos a lo largo del curso.",
      type: "Aplicación web",
      year: 2023,
      repository: "https://github.com/CrisdCor/curso-react-intro.git",
      url: "https://crisdcor.github.io/curso-react-intro/",
      image: ImageFocalStudio,
    },
    {
      name: "Mockup Player",
      description:
        "Diseño en Figma de un reproductor de música con insipiración en una tendencia Neomorfista.",
      type: "Prototipo",
      year: 2022,
      repository: "",
      url: "https://www.figma.com/file/tPPvuN0T558dbYoJ7f3dXR/ReproductorProject?type=design&node-id=0%3A1&mode=design&t=hexgdbqjMgOe5hlb-1",
      image: PlayerMockupImage,
    },
    {
      name: "Todo List",
      description:
        "Proyecto académico que se realizó utilizando React. En este se buscó aplicar los conocimientos adquiridos a lo largo del curso.",
      type: "Aplicación web",
      year: 2023,
      repository: "https://github.com/CrisdCor/curso-react-intro.git",
      url: "https://crisdcor.github.io/curso-react-intro/",
      image: ImageFocalStudio,
    },
    {
      name: "Mockup Player",
      description:
        "Diseño en Figma de un reproductor de música con insipiración en una tendencia Neomorfista.",
      type: "Prototipo",
      year: 2022,
      repository: "",
      url: "https://www.figma.com/file/tPPvuN0T558dbYoJ7f3dXR/ReproductorProject?type=design&node-id=0%3A1&mode=design&t=hexgdbqjMgOe5hlb-1",
      image: PlayerMockupImage,
    },
    {
      name: "Todo List",
      description:
        "Proyecto académico que se realizó utilizando React. En este se buscó aplicar los conocimientos adquiridos a lo largo del curso.",
      type: "Aplicación web",
      year: 2023,
      repository: "https://github.com/CrisdCor/curso-react-intro.git",
      url: "https://crisdcor.github.io/curso-react-intro/",
      image: ImageFocalStudio,
    },
    {
      name: "Mockup Player",
      description:
        "Diseño en Figma de un reproductor de música con insipiración en una tendencia Neomorfista.",
      type: "Prototipo",
      year: 2022,
      repository: "",
      url: "https://www.figma.com/file/tPPvuN0T558dbYoJ7f3dXR/ReproductorProject?type=design&node-id=0%3A1&mode=design&t=hexgdbqjMgOe5hlb-1",
      image: PlayerMockupImage,
    },
    {
      name: "Todo List",
      description:
        "Proyecto académico que se realizó utilizando React. En este se buscó aplicar los conocimientos adquiridos a lo largo del curso.",
      type: "Aplicación web",
      year: 2023,
      repository: "https://github.com/CrisdCor/curso-react-intro.git",
      url: "https://crisdcor.github.io/curso-react-intro/",
      image: ImageFocalStudio,
    },
    {
      name: "Mockup Player",
      description:
        "Diseño en Figma de un reproductor de música con insipiración en una tendencia Neomorfista.",
      type: "Prototipo",
      year: 2022,
      repository: "",
      url: "https://www.figma.com/file/tPPvuN0T558dbYoJ7f3dXR/ReproductorProject?type=design&node-id=0%3A1&mode=design&t=hexgdbqjMgOe5hlb-1",
      image: PlayerMockupImage,
    },
    {
      name: "Todo List",
      description:
        "Proyecto académico que se realizó utilizando React. En este se buscó aplicar los conocimientos adquiridos a lo largo del curso.",
      type: "Aplicación web",
      year: 2023,
      repository: "https://github.com/CrisdCor/curso-react-intro.git",
      url: "https://crisdcor.github.io/curso-react-intro/",
      image: ImageFocalStudio,
    },
    {
      name: "Mockup Player",
      description:
        "Diseño en Figma de un reproductor de música con insipiración en una tendencia Neomorfista.",
      type: "Prototipo",
      year: 2022,
      repository: "",
      url: "https://www.figma.com/file/tPPvuN0T558dbYoJ7f3dXR/ReproductorProject?type=design&node-id=0%3A1&mode=design&t=hexgdbqjMgOe5hlb-1",
      image: PlayerMockupImage,
    },
    {
      name: "Todo List",
      description:
        "Proyecto académico que se realizó utilizando React. En este se buscó aplicar los conocimientos adquiridos a lo largo del curso.",
      type: "Aplicación web",
      year: 2023,
      repository: "https://github.com/CrisdCor/curso-react-intro.git",
      url: "https://crisdcor.github.io/curso-react-intro/",
      image: ImageFocalStudio,
    },
    {
      name: "Mockup Player",
      description:
        "Diseño en Figma de un reproductor de música con insipiración en una tendencia Neomorfista.",
      type: "Prototipo",
      year: 2022,
      repository: "",
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
