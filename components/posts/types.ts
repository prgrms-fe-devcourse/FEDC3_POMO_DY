import { CategoryInfoType } from '@components/home/types';

export interface PostDetailType {
  channelId: string;
  title: string;
  content: string;
  date: string;
  startTime: string;
  endTime: string;
  interval: string;
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
