import { Post } from '../types';
import { calcTodayDateKST } from './date';
import { calcCurrentTimeKST } from './time';

const isTodayCurrentTimeAfter = (date: string, time: string) => {
  const today = calcTodayDateKST();
  const curTime = calcCurrentTimeKST();

  return today <= date && curTime < time;
};

export const validatePostCreateForm = ({ title, date, startTime, endTime, content, channelId }: Post) => {
  if (!isTodayCurrentTimeAfter(date, startTime)) {
    return { isValid: false, msg: '뽀모 시작 시간을 현재 시각 이후로 변경해 주세요!' };
  }

  if (!title || !date || !startTime || !endTime || !content || !channelId) {
    return { isValid: false, msg: '빈 값이 있어요!' };
  }

  return { isValid: true, msg: '' };
};
