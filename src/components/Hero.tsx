import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useThemeContext } from "../common/ThemeContext";
import { contacts } from "../consts";
import { getImagePath } from "../utils";

const useStyles = makeStyles(() => ({
  mainSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    gap: "20px",
    height: "100dvh",
    minHeight: "500px",
    [`@media (min-width:800px)`]: {
      flexDirection: "row-reverse",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
  },
  hero: {
    maxWidth: "200px",
    [`@media (min-width:800px)`]: {
      maxWidth: "400px",
      width: "400px",
    },
  },
  section: {
    position: "relative",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px",
    lineHeight: "1.2",
  },
  links: {
    display: "flex",
    gap: "25px",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    maxWidth: "24ch",
    alignSelf: "center",
  },
  modeImg: {
    position: "absolute",
    right: 0,
    width: "25px",
  },
  location: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
}));

const ResumeButton = () => {
  return (
    <Button
      download
      variant="contained"
      href="Sergey_Pyloian_Resume.pdf"
      sx={{
        borderRadius: "20px",
        alignSelf: "center",
        width: "126px",
        height: "50px",
        fontSize: "20px",
        fontWeight: "bold",
        textTransform: "none",
      }}
    >
      {"Resume"}
    </Button>
  );
};

const Contacts = (props: { mode: string }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.location} component={"div"}>
        <img
          draggable={false}
          style={{ width: "30px", height: "30px" }}
          src={getImagePath(`location_${props.mode}`, "png")}
        />
        <p>{"San-Francisco, CA"}</p>
      </Box>
      <Box className={classes.links} component={"span"}>
        {contacts.map((contact, i) => (
          <a href={contact.link} target="_blank" key={`${contact.image}_${i}`}>
            <img
              style={{ width: "30px", height: "30px" }}
              src={getImagePath(
                `${contact.image}_${props.mode}`,
                contact.imageType
              )}
              draggable={false}
            />
          </a>
        ))}
      </Box>
    </>
  );
};

export const Hero = () => {
  const { theme, toggleTheme } = useThemeContext();
  const classes = useStyles();

  const mode = theme.palette.mode;

  return (
    <Box component={"section"} className={classes.mainSection} id="hero">
      <Box component={"div"} className={classes.section}>
        <img
          src={getImagePath("hero", "png")}
          draggable={false}
          className={classes.hero}
        />
        <img
          className={classes.modeImg}
          src={getImagePath(`${mode}_mode`, "svg")}
          onClick={toggleTheme}
          draggable={false}
        />
      </Box>
      <Box component={"div"} className={classes.info}>
        <h1>
          {"Sergey"}
          <br />
          {"Pyloian"}
        </h1>
        <h2>{"Software Engineer"}</h2>
        <Contacts mode={mode} />
        <Box className={classes.description} component={"p"}>
          {
            "With a passion for developing modern web apps for commercial businesses."
          }
        </Box>
        <ResumeButton />
      </Box>
    </Box>
  );
};
