import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  type PaletteMode,
} from "@mui/material";
import { type ReactNode, useMemo } from "react";
import { useAppSelector } from "../store/hooks";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const rootElement = useMemo(() => {
    return document.getElementById("root");
  }, []);

  const theme = useAppSelector((state) => state.theme) as PaletteMode;

  const muiTheme = useMemo(() => {
    return createTheme({
      direction: "rtl",
      palette: {
        mode: theme,
      },
      components: {
        MuiPopover: {
          defaultProps: {
            container: rootElement,
          },
        },
        MuiPopper: {
          defaultProps: {
            container: rootElement,
          },
        },
        MuiDialog: {
          defaultProps: {
            container: rootElement,
          },
        },
        MuiModal: {
          defaultProps: {
            container: rootElement,
          },
        },
      },
    });
  }, [theme]);

  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
};
export default ThemeProvider;
