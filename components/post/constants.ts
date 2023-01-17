import { CategoryName, CategoryNameInDB, Post } from './types';

export const CATEGORY_NAME_MAP: Record<CategoryNameInDB, CategoryName> = {
  study: '공부',
  develop: '개발',
  job: '취업',
  reading: '독서',
  hobby: '취미',
  etc: '기타',
};

export const DEFAULT_POST: Post = {
  id: '',
  title: '',
  startTime: '',
  endTime: '',
  participants: [],
  date: '',
  iteration: -1,
  description: '',
  category: { id: '', name: '공부' },
  comments: [],
};
