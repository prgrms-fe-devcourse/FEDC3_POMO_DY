import { CategoryInfoType } from '@components/home/types';

export interface PostDetailType {
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  iteration: string;
}

export interface PostType {
  _id: string;
  likes: Participant[];
  title: string;
  channel: CategoryInfoType;
  createdAt: string;
}

interface Participant {
  id: string;
  userId: string;
}
