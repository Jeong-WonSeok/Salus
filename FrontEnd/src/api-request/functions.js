import moment from "moment";

//회원들의 평균 유산소 운동 시간 대비 나의 유산소 운동 시간
const getAerobicRatio = (userInfo, totalInfo) => {
  const aerobic = userInfo.find((item) => {
    return item.excerciseCategory === "유산소";
  });
  const totalAerobic = totalInfo.find((item) => {
    return item.excerciseCategory === "유산소";
  });
  if (totalAerobic && aerobic) {
    return [
      aerobic.userTotalCategoryTime / totalAerobic.AllTotalCategoryTime,
      aerobic.userTotalCategoryTime,
    ];
  } else {
    return [0, 0];
  }
};

//회원들의 평균 상체 운동 시간 대비 나의 상체 운동 시간
const getUpperbodyRatio = (userInfo, totalInfo) => {
  const upper = userInfo.find((item) => {
    return item.excerciseCategory === "상체";
  });
  const totalUpper = totalInfo.find((item) => {
    return item.excerciseCategory === "상체";
  });

  if (totalUpper && upper) {
    return upper.userTotalCategoryTime / totalUpper.AllTotalCategoryTime;
  } else {
    return 0;
  }
};

//회원들의 평균 하체 운동 시간 대비 나의 하체 운동 시간
const getLowerbodyRatio = (userInfo, totalInfo) => {
  const lower = userInfo.find((item) => {
    return item.excerciseCategory === "하체";
  });
  const totalLower = totalInfo.find((item) => {
    return item.excerciseCategory === "하체";
  });
  if (totalLower && lower) {
    return lower.userTotalCategoryTime / totalLower.AllTotalCategoryTime;
  } else {
    return 0;
  }
};

//방문한 시간 대비 실제 운동 시간
const getExerciseTimeRatio = (userInfo, timeTotal) => {
  const totalUserExercise = userInfo.reduce((acc, cur) => {
    return acc + parseInt(cur.userTotalCategoryTime);
  }, 0);
  if (timeTotal) {
    return (totalUserExercise / timeTotal);
  } else {
    return 0;
  }
};


//차트 데이터 계산
export const ChartCalc = (userInfo, totalInfo, timeTotal) => {
  return [
    getAerobicRatio(userInfo, totalInfo),
    getUpperbodyRatio(userInfo, totalInfo),
    getLowerbodyRatio(userInfo, totalInfo),
    getExerciseTimeRatio(userInfo, timeTotal.totalExcerciseTime),
  ];
};



//5일치 없는 날짜의 데이터 처리하는 함수
export const WeekData = (datas) => {
  const arrWeekly = [];
  for (let i = 1; i < 6; i++) {
    arrWeekly.push({
      excerciseDay: moment().subtract(i, "day").format("YY-MM-DD").toString(),
      excerciseCategory: "-",
    });
  }

  for (let data of datas) {
    for (let daily of arrWeekly) {
      if (
        (daily.excerciseCategory === "상체" &&
          data.excerciseCategory === "하체") ||
        (daily.excerciseCategory === "하체" &&
          data.excerciseCategory === "상체")
      ) {
        daily.excerciseCategory = "전신";
        break;
      }

      if (daily.excerciseDay === data.excerciseDay) {
        if (
          (daily.excerciseCategory === "상체") ||
          (daily.excerciseCategory === "하체") ||
          (daily.excerciseCategory === '전신')
        ) {
          continue;
        } else {
          daily.excerciseCategory = data.excerciseCategory;
        }
      }
    }
  }
  return arrWeekly;
  //날짜가 같은 데이터는 걸러줌
};


//각 운동의 월별 볼륨 차트 데이터를 걸러주는 함수
export const getMonthlyVolume = (datas, title) => {
  const specificExercise = datas.filter((item) => {
    return item.equipmentName === title
  })

  return specificExercise
}