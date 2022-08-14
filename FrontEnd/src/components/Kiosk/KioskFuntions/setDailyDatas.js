const setDailyDatas = (data, date, type) => {
  const useMuscle = new Set();
  const dailyData = [];
  for (const excercise of data) {
    if (excercise.excerciseDay === date) {
      dailyData.push({
        title: excercise.excerciseName,
        volume: excercise.weightNow * excercise.countNow,
        reps: excercise.countNow,
        time: excercise.excerciseTime,
      });
      useMuscle.add(excercise.excerciseEnglishStimulate.split(', '));
    }
  }
  const newArr = new Set();
  for (const arr of useMuscle) {
    if (arr[0]) {
      newArr.add(...arr);
    }
  }
  return [Array.from(newArr), dailyData];
};
export default setDailyDatas;
