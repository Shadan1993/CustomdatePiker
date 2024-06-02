import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import DateObject from "react-date-object";
import persian_en from "react-date-object/locales/persian_en";
export function GergorianToPersian(date, format = "DD MMMM YYYY") {
    if (date === null || date === undefined) return "";
    if (typeof date == "string") date = new Date(date);
    let paramsObject = { date, format };
    let persiantemp = new DateObject(paramsObject).convert(persian, persian_fa).format();

    return persiantemp;
}
export function GergorianToPersianBefor(date, format = "DD MMMM YYYY", dDate = "month") {
    console.log(date, "eeeee");
    if (date === null || date === undefined) return "";
    if (typeof date == "string") date = new Date(date);
    let paramsObject = { date, format };
    let persiantemp = new DateObject(paramsObject)
        .subtract(dDate === "month" ? 1 : 1, dDate)
        .convert(persian, persian_fa)
        .format("YYYY/MM/DD");

    return persiantemp;
}
export function PersianToGergorian(date, format = "YYYY-M-DD") {
    const dateeeee = new DateObject({
        date: date,
        calendar: persian,
        locale: persian_fa,
        format: format,
    });
    if (date === null || date === undefined) return "";
    let gregorianTemp = new DateObject(dateeeee).convert(gregorian, gregorian_en).format();
    return gregorianTemp;
}
export function UTCTimeToPersianTime(date, time, format = "YYYY/MM/DD HH:mm") {
    if (time === null || time === undefined || date === null || date === undefined) return "";
    date = new Date(date + " " + time + " UTC");
    let paramsObject = { date, format };
    let persianDateTime = new DateObject(paramsObject).convert(gregorian, persian_fa).format();
    return persianDateTime;
}

export function MixDateTimeUTC(date, utcTime) {
    if (utcTime === null || utcTime === undefined || date === null || date === undefined) return "";
    return new Date(date + " " + utcTime + " UTC");
}
export function GetYear(date, format = "YYYY") {
    if (date === null || date === undefined) return "";
    let paramsObject = { date, format };
    let gregorianTemp = new DateObject(paramsObject).convert(persian, persian_en).format();
    return gregorianTemp;
}
export function LocaleTimeToUTC(h, m) {
    let persiantemp = new DateObject({ calendar: persian, locale: persian_fa }).setHour(h).setMinute(m);
    let utc = new Date(persiantemp).getUTCHours() + ":" + new Date(persiantemp).getUTCMinutes();
    return utc;
}
export function DateFormater(date, format = "YYYY-M-DD") {
    if (date === null || date === undefined) return "";
    let aa = PersianToGergorian(date);
    console.log(aa, "aaaaa");
    let gregorianTemp = new DateObject(aa).format(format);
    // .convert(gregorian, gregorian_en)
    return gregorianTemp;
}

export function GergorianToPersianAfter(date, format = "DD MMMM YYYY", dDate = "month") {
    console.log(date, "eeeee");
    if (date === null || date === undefined) return "";
    if (typeof date == "string") date = new Date(date);
    let paramsObject = { date, format };
    let persiantemp = new DateObject(paramsObject)
        .add(dDate === "month" ? 9 : 1, dDate)
        .convert(persian, persian_fa)
        .format("YYYY/MM/DD");

    return persiantemp;
}
export function DateFormat(date, format = "YYYY-M-DD") {
    const dateeeee = new DateObject({
        date: date,
        calendar: persian,
        locale: persian_fa,
        format: format,
    });
    if (date === null || date === undefined) return "";
    let gregorianTemp = new DateObject(dateeeee).convert().format(format);
    console.log(dateeeee, "gregorianTemp");
    return gregorianTemp;
}
