import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Light_Green, Light_Tusi } from "./Color";
// region this is button custom
type Tbtn = {
  colorbase?: string;
  bgcolor?: string;
  hoverbgcolor?: string;
  borderstyle?: string;
};
export const Btn = styled(Button)(
  ({ colorbase, bgcolor, hoverbgcolor, borderstyle }: Tbtn) => ({
    color: colorbase ? colorbase : Light_Tusi[700],
    background: bgcolor ? bgcolor : Light_Green[700],
    margin: "0px 0px 0px 0px",
    width: "100%",
    borderRadius: "4px",
    border: borderstyle ? borderstyle : "0px",
    ":hover": {
      background: hoverbgcolor ? hoverbgcolor : Light_Green[400],
    },
    ":disabled": {
      background: hoverbgcolor ? hoverbgcolor : Light_Green[400],
    },
  })
);
