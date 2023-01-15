import { CategoryName, CategoryNameInDB } from './types';

export const CategoryNameMap: Record<CategoryNameInDB, CategoryName> = {
  study: '공부',
  develop: '개발',
  job: '취업',
  reading: '독서',
  hobby: '취미',
  etc: '기타',
};
