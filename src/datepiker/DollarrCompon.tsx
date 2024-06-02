import { Grid } from "@mui/material";
import { useState } from "react";
import DatePickerDallor from "../PickerMobile/DatePickerDallor";
import { P2e } from "../utils/ConvertCountFaToEn";
import { GergorianToPersian } from "../utils/DateTime";

const DollarrCompon = () => {
  const [dateDollar, setDateDollar] = useState(
    P2e(GergorianToPersian(new Date(), "YYYY/MM/DD"))
  );
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DatePickerDallor
          dateDollar={dateDollar}
          setDateDollar={setDateDollar}
        />
      </Grid>
    </>
  );
};

export default DollarrCompon;
