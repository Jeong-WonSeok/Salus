export const todayFormal = () => {
  let now = new Date();
  let todayMonth = now.getMonth() + 1 > 9 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1);
  let todayDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  let dayOfWeek = week[now.getDay()];
  return todayMonth + '월 ' + todayDate + '일 ' + dayOfWeek + '요일';
};
