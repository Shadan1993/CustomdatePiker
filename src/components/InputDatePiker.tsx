import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Basecolor, Dark_Green, Natural } from "./Color";
import { ReactNode } from "react";
type TInputDatePiker = {
  title?: string;
  type?: string;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  defValue: string;
  value?: string | undefined;
  disabled?: boolean;
  onClickEvent?: any | undefined;
  onChangeEvent?: any | undefined;
  size?: string;
};
const InputDatePiker = ({
  title = "",
  type = "text",
  endIcon = "",
  startIcon = "",
  defValue = "",
  value = undefined,
  disabled = false,
  onClickEvent = undefined,
  onChangeEvent = undefined,
  size = "46px",
}: TInputDatePiker) => {
  return (
    <>
      <FormControl>
        <InputLabel
          color="info"
          variant="outlined"
          htmlFor="outlined-adornment-amount"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            margin: "16px 0px 0px 34px",
            width: "100%",
            color: Dark_Green[400],
            fontSize: "14px",
            ":disabled": {
              color: Basecolor[100],
              background: Natural[600],
            },
            "::slotted": {
              color: Dark_Green[500],
            },
          }}
        >
          {title}
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          //   variant={"outlined"}
          fullWidth
          type={type}
          sx={{
            maxHeight: size,
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "26px",
            paddingTop: "20px",
            borderColor: "#CBCBCB",
            ".MuiInputAdornment-root": {
              alignItems: "end",
            },
            "&.Mui-focused > .MuiOutlinedInput-notchedOutline": {
              borderColor: "NavyBlue",
            },
            "&.Mui-hover > .MuiOutlinedInput-notchedOutline": {
              borderColor: "#CBCBCB",
            },
          }}
          disabled={disabled}
          value={value !== undefined ? value : defValue}
          startAdornment={
            <InputAdornment position="start" sx={{ color: Basecolor[100] }}>
              {startIcon}
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">{endIcon}</InputAdornment>
          }
          onClick={(e) => (onClickEvent !== undefined ? onClickEvent() : e)}
          onChange={(e) => (onChangeEvent !== undefined ? onChangeEvent(e) : e)}
        />
      </FormControl>
    </>
  );
};
export default InputDatePiker;
