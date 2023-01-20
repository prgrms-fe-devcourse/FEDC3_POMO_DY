export interface Post {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  interval: number;
  content: string;
  channelId: string;
}

export interface PostFormData {
  [key: string]: any;
  title: string;
  image: Blob | null;
  channelId: string;
}
