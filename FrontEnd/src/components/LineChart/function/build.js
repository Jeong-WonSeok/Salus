const setChartData = (data) => {
  const dataSet = [];
  for (const [index, dailyData] of data.entries()) {
    dataSet.push({
      label: `${dailyData.month}월`,
      x: index,
      y: dailyData.averageVolume,
    });
  }
  return dataSet;
};

export default setChartData;
