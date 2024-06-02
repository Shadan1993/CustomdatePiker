import { GetYear } from "./DateTime";

export function DatepickerDataYaer() {
  let year = [];
  var date = new Date();
  var dateArrayMi = new Date(date.setDate(date.getDate()));
  for (let y = -20; y <= 2; y++) {
    let a = parseInt(GetYear(dateArrayMi));
    year.push({ value: String(a + y), label: String(a + y) });
  }
  return year;
}

export function DatepickerData() {
  const opttt = {
    day: [
      { value: "01", label: "01" },
      { value: "02", label: "02" },
      { value: "03", label: "03" },
      { value: "04", label: "04" },
      { value: "05", label: "05" },
      { value: "06", label: "06" },
      { value: "07", label: "07" },
      { value: "08", label: "08" },
      { value: "09", label: "09" },
      { value: "10", label: "10" },
      { value: "11", label: "11" },
      { value: "12", label: "12" },
      { value: "13", label: "13" },
      { value: "14", label: "14" },
      { value: "15", label: "15" },
      { value: "16", label: "16" },
      { value: "17", label: "17" },
      { value: "18", label: "18" },
      { value: "19", label: "19" },
      { value: "20", label: "20" },
      { value: "21", label: "21" },
      { value: "22", label: "22" },
      { value: "23", label: "23" },
      { value: "24", label: "24" },
      { value: "25", label: "25" },
      { value: "26", label: "26" },
      { value: "27", label: "27" },
      { value: "28", label: "28" },
      { value: "29", label: "29" },
      { value: "30", label: "30" },
      { value: "31", label: "31" },
    ],
    month: [
      { value: "01", label: "فروردین" },
      { value: "02", label: "اردیبهشت" },
      { value: "03", label: "خرداد" },
      { value: "04", label: "تیر" },
      { value: "05", label: "مرداد" },
      { value: "06", label: "شهریور" },
      { value: "07", label: "مهر" },
      { value: "08", label: "آبان" },
      { value: "09", label: "آذر" },
      { value: "10", label: "دی" },
      { value: "11", label: "بهمن" },
      { value: "12", label: "اسفند" },
    ],
    year: [],
  };
  var date = new Date();
  var dateArrayMi = new Date(date.setDate(date.getDate()));

  for (let y = -10; y <= 1; y++) {
    let a = parseInt(GetYear(dateArrayMi));
    opttt.year.push({ value: String(a + y), label: String(a + y) });
  }
  return opttt;
}
