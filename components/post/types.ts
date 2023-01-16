import { CategoryNameMap } from '@components/post/constants';
export interface Post {
  id: string;
  title: string;
  participants: Participant[];
  date: string;
  startTime: string;
  endTime: string;
  iteration: number;
  description: string;
  category: Category;
}

interface Participant {
  id: string;
  userId: string;
}

interface Category {
  id: string;
  name: CategoryName;
}

export type CategoryNameInDB = 'study' | 'develop' | 'job' | 'reading' | 'hobby' | 'etc';

export type CategoryName = '공부' | '개발' | '취업' | '독서' | '취미' | '기타';

export const isCategoryNameInDB = (name: string): name is CategoryNameInDB => {
  return CategoryNameMap.hasOwnProperty(name);
};
