import { CategoryInfoType } from '@components/home/types';

export interface postDetailType {
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  iteration: string;
}

export interface postType {
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
