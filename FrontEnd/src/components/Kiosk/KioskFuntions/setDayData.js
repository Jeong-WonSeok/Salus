const setDayData = (datas, date) => {
  for (const data of datas) {
    if (data.excerciseDay === date) {
      return data;
    }
  }
};
export default setDayData;
