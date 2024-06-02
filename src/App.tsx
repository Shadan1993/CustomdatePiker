import { useState } from "react";
import "./App.css";
import { Grid } from "@mui/material";
import DatePickerDallor from "./datepiker/DatePickerDallor";
import { P2e } from "./components/ConvertCountFaToEn";
import { GergorianToPersian } from "./components/DateTime";

function App() {
  const [dateDollar, setDateDollar] = useState<string>(
    P2e(GergorianToPersian(new Date(), "YYYY/MM/DD"))
  );
  return (
    <Grid container>
      <DatePickerDallor dateDollar={dateDollar} setDateDollar={setDateDollar} />
    </Grid>
  );
}

export default App;
