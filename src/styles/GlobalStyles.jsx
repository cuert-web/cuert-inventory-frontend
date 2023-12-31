import { GlobalStyles as Global } from "@mui/material";

const GlobalStyles = () => {
  return (
    <Global
      styles={`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    body {
      font-family: "Inter", sans-serif;
      min-height: 100vh;
    }
    input,
    button,
    textarea,
    select {
      font: inherit;
      color: inherit;
    }
    button {
      cursor: pointer;
    }

    *:disabled {
      cursor: not-allowed;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    ul {
      list-style: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
      hyphens: auto;
    }
  `}
    />
  );
};

export default GlobalStyles;
