export const getIsInProgress = (date: string, startTime: string, endTime: string) => {
  const startT = new Date(`${date} ${startTime}`).getTime();

  let endT;
  const endTimeHour = parseInt(endTime.split(':')[0]);
  if (endTimeHour > 24) {
    const newEndT = `${endTimeHour - 24}:${endTime.split(':')[1]}`; // 24시간 뺀 시간
    const newDate = new Date(new Date(date).setDate(new Date(date).getDate() + 1)).toDateString(); // 하루 더한 날짜

    endT = new Date(`${newDate} ${newEndT}`).getTime();
  } else {
    endT = new Date(`${date} ${endTime}`).getTime();
  }
  const nowT = Date.now();

  if (nowT >= startT && nowT <= endT) return true;
  else return false;
};

export const getElapsedTimeStr = (createdAt: string) => {
  const dateObj = new Date(createdAt).getTime();
  const elapsedTime = Date.now() - dateObj;
  const elapsedHour = Math.floor(elapsedTime / 1000 / 60 / 60);
  const elapsedDay = Math.floor(elapsedHour / 24);
  if (elapsedHour > 24) return `${elapsedDay}일 전`;
  else if (elapsedHour < 1) return `${Math.floor(elapsedTime / 1000 / 60)}분 전`;
  else return `${elapsedHour}시간 전`;
};

export const isEnd = (endDate: string) => {
  const end = new Date(endDate).getTime();

  if (isNaN(end) || !end) return true;
  return end < Date.now();
};

export const changeMaxText = (text = '', length: number) => {
  if (text.length > length) return `${text.substring(0, length - 2)}...`;
  else return text;
};
