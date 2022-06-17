import { createTheme } from "@mui/material/styles";

export const themeOptions = {
    palette: {
      type: 'light',
      primary: {
        main: '#21897E',
      },
      secondary: {
        main: '#3BA99C',
      },
      info: {
        main: '#69D1C5',
      },
      error: {
        main: '#7EBCE6',
      },
      success: {
        main: '#8980F5',
      },
      warning: {
        main: '#F7B2AD',
      },
    },
    overrides: {
      MuiAppBar: {
        colorInherit: {
          
          color: '#69D1C5',
        },
      },
    },
    components: {
      MuiAppBar:{
          styleOverrides:{
              colorPrimary:{
                  backgroundImage:"url(https://allieweigh.files.wordpress.com/2019/09/istock-482582027.jpg)"
              }
          }
      }
    },
  };

  const theme=createTheme(themeOptions);
  export default theme