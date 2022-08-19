import { createGlobalStyle } from "styled-components";

export const LightTheme = {};

export const DarkTheme = {
  body: "#000",
  fontColor: "white",
  background: "rgb(36, 32, 32)",
  boxshadow: `rgba(255, 254, 254, 0.02) 0px 1px 3px 0px,
  rgba(255, 255, 255, 0.15) 0px 0px 0px 1px;`,
  icons: "white",
};

export const GlobalStyles = createGlobalStyle`

body{
    background-color:${(props) => props.theme.body};
    color:${(props) => props.theme.fontColor};
}


.left .sidebar {
    background-color:${(props) => props.theme.body};
    box-shadow:${(props) => props.theme.boxshadow};
  }
  
  main .conta .left .profile {
    background-color:${(props) => props.theme.body};
    box-shadow:${(props) => props.theme.boxshadow};
  }

.left .sidebar .menu-item:hover {
    background-color:${(props) => props.theme.background};
  }

  .icons{
    color:${(props) => props.theme.icons};
  }
  
  .middle .create-post{
    background-color:${(props) => props.theme.body};
    box-shadow:${(props) => props.theme.boxshadow};
  }

  .story{
    box-shadow:${(props) => props.theme.boxshadow};
  }

  .middle .feeds .feed{
    background-color:${(props) => props.theme.body};
    box-shadow:${(props) => props.theme.boxshadow};
  }

  .containerMessage:hover {
    background-color:${(props) => props.theme.background};
  }

  .right .request{
    background-color:${(props) => props.theme.body};
    box-shadow:${(props) => props.theme.boxshadow};
  }

  .right .messages{
    background-color:${(props) => props.theme.body};
    box-shadow:${(props) => props.theme.boxshadow};
  }

  .Message-Input{
    background-color:${(props) => props.theme.body};
  }
  

`;
