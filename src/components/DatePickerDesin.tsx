import { useEffect, useState } from "react";
import Picker from "react-scrollable-picker";
import { Grid } from "@mui/material";
import { GergorianToPersian } from "./DateTime";
import { P2e } from "./ConvertCountFaToEn";
import { DatepickerData } from "./DataDatePiker";

export const DatePickerDesin = ({ date, dateDef }) => {
  console.log(typeof date, "type date");
  console.log(typeof dateDef, "type datedef");
  if (dateDef === undefined) {
    dateDef = GergorianToPersian(new Date(), "YYYY/MM/DD").split("/");
  } else {
    dateDef = dateDef.split("/");
  }
  console.log(dateDef, ":dddddd");

  const [dateRang, setDateRang] = useState({
    day: P2e(dateDef[2]),
    month: P2e(dateDef[1]),
    year: P2e(dateDef[0]),
  });
  console.log(dateRang, "dateRang");

  const [optionGroup, setOptionGroup] = useState({});
  useEffect(() => {
    setOptionGroup(DatepickerData);
  }, []);
  const handleChange = (name, value) => {
    setDateRang({
      ...dateRang,
      [name]: value,
    });
    date({ ...dateRang, [name]: value });
  };

  return (
    <>
      <Grid container sx={{ fontSize: "14px" }} className="ss02">
        <Picker
          optionGroups={optionGroup}
          valueGroups={dateRang}
          onChange={handleChange}
          height={180}
        />
      </Grid>
    </>
  );
};
