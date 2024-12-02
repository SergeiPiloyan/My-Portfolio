import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getImagePath } from "../utils";
import { useThemeContext } from "../common/ThemeContext";
import { backSkills, frontSkills, generalSkills } from "../consts";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  skill: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  skillsList: {
    display: "flex",
    justifyContent: "space-evenly",
    alignSelf: "center",
    flexWrap: "wrap",
    rowGap: "40px",
    maxWidth: "26ch",
    gap: "16px",
  },
  title: {
    marginBottom: "30px",
  },
  hr: {
    width: "100px",
    height: "1px",
    margin: "30px auto",
  },
}));

const Skill = (props: { mode: "dark" | "light"; skills: string[] }) => {
  const classes = useStyles();

  return (
    <Box component={"div"} className={classes.skillsList}>
      {props.skills.map((skill, i) => (
        <Box component={"span"} className={classes.skill} key={`${skill}_${i}`}>
          <img
            src={getImagePath(`check_mark_${props.mode}`, "svg")}
            alt="Check mark"
            style={{ width: "20px" }}
          />
          <p>{skill}</p>
        </Box>
      ))}
    </Box>
  );
};

export const Skills = () => {
  const { theme } = useThemeContext();
  const classes = useStyles();

  const mode = theme.palette.mode;

  const Hr = () => <Box component={"hr"} className={classes.hr} />;

  return (
    <Box component={"section"} id="skills" className={classes.container}>
      <h1 className={classes.title}>{"Skills"}</h1>
      <Skill skills={frontSkills} mode={mode} />
      <Hr />
      <Skill skills={backSkills} mode={mode} />
      <Hr />
      <Skill skills={generalSkills} mode={mode} />
    </Box>
  );
};
