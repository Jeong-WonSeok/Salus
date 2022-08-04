const setChartData = (data) => {
  const dataSet = new Array();
  for (const [index, dailyData] of data.reverse().entries()) {
    dataSet.push({
      label: `${dailyData.month}월`,
      x: index,
      y: dailyData.totalWeight,
    });
  }
  return dataSet;
};

export default setChartData;
