import { Button } from "@mui/material";
import { useThemeContext } from "../common/ThemeContext";

export const Hero = () => {
  const { theme, toggleTheme } = useThemeContext();
  const mode = theme.palette.mode;

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        gap: "20px",
        height: "100dvh",
        minHeight: "500px",
      }}
      id="hero"
    >
      <div style={{ position: "relative" }}>
        <img
          style={{ maxWidth: "200px" }}
          src="https://harris-johnsen.netlify.app/assets/hero-img-Cqh1d5RO.png"
        />
        <img
          style={{ position: "absolute", right: 0, width: "25px" }}
          src={`/images/svg/${mode}_mode.svg`}
          onClick={toggleTheme}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <h1 style={{ lineHeight: "1.2" }}>
          Harris
          <br />
          Johnsen
        </h1>
        <h2>Frontend Developer</h2>
        <span
          style={{
            display: "flex",
            gap: "25px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a style={{ margin: 0 }} href="https://x.com/" target="_blank">
            <img
              style={{ width: "30px" }}
              src={`/images/svg/twitter_${mode}.svg`}
            />
          </a>
          <a style={{ margin: 0 }} href="https://github.com/" target="_blank">
            <img
              style={{ width: "30px" }}
              src={`/images/svg/github_${mode}.svg`}
            />
          </a>
          <a style={{ margin: 0 }} href="https://linkedin.com/" target="_blank">
            <img
              style={{ width: "30px" }}
              src={`/images/svg/linkedin_${mode}.svg`}
            />
          </a>
        </span>
        <p style={{ maxWidth: "24ch", alignSelf: "center" }}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a
          style={{ width: "fit-content", alignSelf: "center" }}
          href="cv.pdf"
          download
        >
          <Button
            sx={{
              borderRadius: "20px",
              width: "126px",
              height: "50px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
            variant="contained"
          >
            Resume
          </Button>
        </a>
      </div>
    </section>
  );
};
