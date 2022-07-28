import moment from "moment";

function isSelected(day, value) {
  return value.isSame(day, "day");
}

export function beforeToday(day) {
  return day.isBefore(new Date(), "day");
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
    if (day.isSame(moment(iterator.date), "day")) {
      return iterator;
    }
  }
}

function dayStyles(day, value, events) {
  const event = isEvent(day, events);
  if (isToday(day)) {
    return { style: "today" };
  }
  if (event) {
    return {
      style: "events",
      volume: event.volume,
      calorie: event.calorie,
      type: event.type,
    };
  }
  if (beforeMonth(day, value)) return { style: "before" };
  if (afterMonth(day, value)) return { style: "before" };
  if (isSelected(day, value)) return { style: "selected" };
  return "";
}

export default dayStyles;
