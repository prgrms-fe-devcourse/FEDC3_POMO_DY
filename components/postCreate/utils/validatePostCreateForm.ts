import { Post } from '../types';

export const validatePostCreateForm = ({ title, date, startTime, endTime, content, channelId }: Post) => {
  if (!title || !date || !startTime || !endTime || !content || !channelId) {
    return { isValid: false, msg: '빈 값이 있어요!' };
  }

  return { isValid: true, msg: '' };
};
