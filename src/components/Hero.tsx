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
}));

const Contact = (props: { link: string; image: string; mode: string }) => {
  return (
    <a href={`https://${props.link}/`} target="_blank">
      <img
        style={{ width: "30px" }}
        src={getImagePath(`${props.image}_${props.mode}`, "svg")}
        draggable={false}
      />
    </a>
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
          {"Serhii"}
          <br />
          {"Pyloian"}
        </h1>
        <h2>{"Software Engineer"}</h2>

        <Box className={classes.links} component={"span"}>
          {contacts.map((contact, i) => (
            <Contact
              image={contact.image}
              link={contact.link}
              mode={mode}
              key={`${i}_${contact.image}`}
            />
          ))}
        </Box>
        <Box className={classes.description} component={"p"}>
          {
            "With a passion for developing modern React web apps for commercial businesses."
          }
        </Box>
        <Box
          component={"div"}
          style={{ width: "fit-content", alignSelf: "center" }}
        >
          <Button
            download
            variant="contained"
            href="cv.pdf"
            sx={{
              borderRadius: "20px",
              width: "126px",
              height: "50px",
              fontSize: "20px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            {"Resume"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
