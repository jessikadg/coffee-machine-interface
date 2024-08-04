import { Lato } from "next/font/google";

const latoBold = Lato({ weight: ["400"], subsets: ["latin"] });
const latoBolder = Lato({ weight: ["900"], subsets: ["latin"] });

export const theme = {
  colors: {
    primary: "#aed6a1",
    secondary: "#219753",
  },
  fonts: {
    bold: latoBold.style.fontFamily,
    bolder: latoBolder.style.fontFamily,
  },
};

export default theme;
