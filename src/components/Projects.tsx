import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { projects } from "../consts";
import { getImagePath } from "../utils";

type ProjectCardProps = {
  logo: string;
  name: string;
  description: string;
  link: string;
};

const useStyles = makeStyles(() => ({
  mainContainer: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
  },
  title: {
    marginBottom: "30px",
  },
  projectsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
    [`@media (min-width:800px)`]: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      padding: "0px 30px",
    },
  },
  project: {
    width: "fit-content",
    transition: "transform 200ms ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      cursor: "pointer",
    },
  },
  projectLogo: {
    width: "200px",
    height: "200px",
    alignSelf: "center",
    background: "#fff",
    borderRadius: "20px",
    marginBottom: "20px",
  },
}));

const ProjectCard = (props: ProjectCardProps) => {
  const classes = useStyles();

  return (
    <Box
      component={"div"}
      className={classes.project}
      onClick={() => window.open(props.link, "_blank")}
    >
      <img
        className={classes.projectLogo}
        src={getImagePath(props.logo, "png")}
        alt="Logo"
      />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </Box>
  );
};

export const Projects = () => {
  const classes = useStyles();

  return (
    <Box
      component={"section"}
      className={classes.mainContainer}
      id={"projects"}
    >
      <h1 className={classes.title}>{"Projects"}</h1>
      <Box component={"div"} className={classes.projectsContainer}>
        {projects.map((project, i) => (
          <ProjectCard
            name={project.name}
            logo={project.logo}
            description={project.description}
            link={project.link}
            key={`${i}_${project.name}`}
          />
        ))}
      </Box>
    </Box>
  );
};
