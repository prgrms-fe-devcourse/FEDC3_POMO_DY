import { CategoryNameInDB } from '@components/post/types';
import { PostType } from '@components/posts/types';

export interface UserInfoType {
  isOnline: boolean;
  _id: string;
  fullName: string;
}

export interface CategoryInfoType {
  _id: string;
  name: CategoryNameInDB;
  posts: PostType[];
}
