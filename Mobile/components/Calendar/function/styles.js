import moment from "moment";

function isSelected(day, value) {
  return value.isSame(day, "day");
}

export function beforeMonth(day, value) {
  return day.isBefore(value.clone().startOf("month"), "day");
}

export function afterMonth(day, value) {
  return day.isAfter(value.clone().endOf("month"), "day");
}

function isToday(day) {
  return day.isSame(new Date(), "day");
}

function isEvent(day, events) {
  for (const iterator of events) {
    if (day.isSame(moment(`20${iterator.excerciseday}`), "day")) {
      return true;
    }
  }
}

function dayStyles(day, value, events) {
  if (isSelected(day, value)) return { style: "selected" };
  if (isToday(day)) {
    return { style: "today" };
  }
  if (isEvent(day, events)) {
    return {
      style: "event",
    };
  }
  if (beforeMonth(day, value)) return { style: "other" };
  if (afterMonth(day, value)) return { style: "other" };
  return "";
}

export default dayStyles;
