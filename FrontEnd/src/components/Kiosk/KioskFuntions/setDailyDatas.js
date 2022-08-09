const setDailyDatas = (data, date, type) => {
  const useMuscle = new Set();
  const dailyData = new Array();
  for (const excercise of data) {
    if (excercise.excerciseDay === date) {
      dailyData.push({
        title: excercise.excerciseName,
        volume: excercise.weightNow * excercise.countNow,
        reps: excercise.countNow,
      });
      useMuscle.add(excercise.excerciseEnglishStimulate.split(', '));
    }
  }
  return [Array.from(useMuscle)[0], dailyData];
};
export default setDailyDatas;
