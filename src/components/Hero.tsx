import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useThemeContext } from "../common/ThemeContext";

const contacts: { image: string; link: string }[] = [
  { image: "twitter", link: "x.com" },
  { image: "github", link: "github.com" },
  { image: "linkedin", link: "linkedin.com" },
];

const useStyles = makeStyles(() => ({
  mainSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    gap: "20px",
    height: "100dvh",
    minHeight: "500px",
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
}));

export const Hero = () => {
  const { theme, toggleTheme } = useThemeContext();
  const classes = useStyles();

  const mode = theme.palette.mode;

  return (
    <Box component={"section"} className={classes.mainSection} id="hero">
      <Box component={"div"} className={classes.section}>
        <img
          style={{ maxWidth: "200px" }}
          src="https://harris-johnsen.netlify.app/assets/hero-img-Cqh1d5RO.png"
        />
        <img
          style={{ position: "absolute", right: 0, width: "25px" }}
          src={`/images/svg/${mode}_mode.svg`}
          onClick={toggleTheme}
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
          {contacts.map((contact) => {
            return (
              <a href={`https://${contact.link}/`} target="_blank">
                <img
                  style={{ width: "30px" }}
                  src={`/images/svg/${contact.image}_${mode}.svg`}
                />
              </a>
            );
          })}
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
            }}
          >
            {"Resume"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
