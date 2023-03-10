import { CATEGORY_NAME_MAP } from '@components/post/constants';
export interface Post {
  id: string;
  title: string;
  participants: User[];
  date: string;
  startTime: string;
  endTime: string;
  iteration: number;
  description: string;
  category: Category;
  comments: Comment[];
  host: User;
}

export interface User {
  id: string;
  name: string;
  image?: string;
}

interface Category {
  id: string;
  name: CategoryName;
}

export interface Comment {
  id: string;
  content: string;
  authorId: string;
}

export type CategoryNameInDB = 'study' | 'develop' | 'job' | 'reading' | 'hobby' | 'etc';

export type CategoryName = '공부' | '개발' | '취업' | '독서' | '취미' | '기타';

export const isCategoryNameInDB = (name: string): name is CategoryNameInDB => {
  return CATEGORY_NAME_MAP.hasOwnProperty(name);
};

export type PomoStatus = 'focus' | 'rest' | 'finished' | 'waiting';

export interface NextTime {
  nextStatus: PomoStatus;
  nextTime: Date | null;
}
