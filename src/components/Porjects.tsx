import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

type ProjectCardProps = {
  logo: string;
  name: string;
  description: string;
};

const projects: ProjectCardProps[] = [
  {
    name: "CRM System",
    description: "Customer Management Software",
    logo: "viberr.png",
  },
  {
    name: "Affiliation Platform",
    description: "Partner Management Solution",
    logo: "burger.png",
  },
  {
    name: "Monitoring",
    description: "Server Performance Tracker",
    logo: "fitlift.png",
  },
];

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
  },
  project: {
    width: "fit-content",
    transition: "transform 200ms ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  projectLogo: {
    maxWidth: "250px",
    alignSelf: "center",
    background: "#fff",
    borderRadius: "20px",
  },
}));

const ProjectCard = (props: ProjectCardProps) => {
  const classes = useStyles();

  return (
    <Box component={"div"} className={classes.project}>
      <img
        className={classes.projectLogo}
        src={`/images/png/${props.logo}`}
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
        {projects.map((project) => (
          <ProjectCard
            name={project.name}
            logo={project.logo}
            description={project.description}
          />
        ))}
      </Box>
    </Box>
  );
};
