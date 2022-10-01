// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  theme: {
    // 1100: "#B",
    1000: "#F2F2F2",
    990: "#E0E0E0",
    950: "#BDBDBD",
    900: "#828282",
    800: "#4F4F4F",
    700: "#F6F2FF",
    600: "#EDE5FF",
    500: "#CCB6FF",
    400: "#E87BF8",
    300: "#8456EC",
    200: "#501FC1",
    100: "#240D57",
  },
};
// 3. extend the theme
const theme = extendTheme({ colors, config });

export default theme;
