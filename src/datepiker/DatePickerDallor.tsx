import React, { useState } from "react";
import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
import InputDatePiker from "../components/InputDatePiker";
import { ColorNew, Light_Tusi, Natural } from "../components/Color";
import { Btn } from "../components/btn";
import { CalendarThree, CheckSmall, Close } from "@icon-park/react";
import { DatePickerDesin } from "../components/DatePickerDesin";

type TdateProps = {
  year: string;
  month: string;
  day: string;
};
type Tdate = {
  dateDollar: string;
  setDateDollar: React.Dispatch<React.SetStateAction<string>>;
};
const DatePickerDallor = ({ dateDollar, setDateDollar }: Tdate) => {
  const [darwerOpenDateEnd, setDarwerOpenDateEnd] = useState(false);
  const [datePickData, setDatePickData] = useState(undefined);
  const checkClickInputDateEnd = () => {
    setDarwerOpenDateEnd(true);
  };
  let datee: string = "";
  const dataDatePiker = (date: TdateProps) => {
    console.log(date, "bbbbbb");
    datee = `${date.year}/${date.month}/${date.day}`;
    setDatePickData(datee);
  };
  const handleDatePicker = () => {
    setDateDollar(datePickData);
    setDarwerOpenDateEnd(false);
  };
  return (
    <Box sx={{ padding: "16px 16px 0px 16px" }}>
      <InputDatePiker
        title="تاریخ"
        type="text"
        size="56px"
        endIcon={<CalendarThree size="24" style={{ height: "24px" }} />}
        defValue={dateDollar}
        value={dateDollar}
        onClickEvent={checkClickInputDateEnd}
      />
      <Drawer
        anchor="bottom"
        open={darwerOpenDateEnd}
        onClose={() => setDarwerOpenDateEnd(false)}
      >
        <Grid container sx={{ display: "flex" }}>
          <Grid
            item
            xs={12}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              display: "flex",
              margin: "16px",
              borderBottom: `1px solid var(--natural-ededed,${Natural[500]} )`,
            }}
          >
            <Grid item>
              <Typography variant="button"> تاریخ</Typography>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => setDarwerOpenDateEnd(!darwerOpenDateEnd)}
              >
                <Close theme="outline" size="24" style={{ height: "24px" }} />
              </IconButton>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DatePickerDesin date={dataDatePiker} />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Btn
              sx={{
                height: "56px",
                ".MuiButton-startIcon": {
                  marginX: "0px",
                },
              }}
              colorbase={Light_Tusi[700]}
              bgcolor={ColorNew[200]}
              hoverbgcolor={ColorNew[300]}
              startIcon={
                <CheckSmall
                  theme="outline"
                  style={{ height: "24px" }}
                  size="24"
                />
              }
              onClick={handleDatePicker}
            >
              ثبت
            </Btn>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
};

export default DatePickerDallor;
