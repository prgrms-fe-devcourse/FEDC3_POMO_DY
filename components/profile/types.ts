export interface ProfileProps {
  followers: [];
  following: [];
  email: string;
  userName: string;
  isMyInfo: boolean;
}

export interface LikeItemProps {
  followers: string;
  following: string;
  title: string;
  isMyInfo: boolean;
}

export type Id = string;

export interface FollowingIdData {
  _id: string;
  user: string;
  follower: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface LikeListProps {
  list: [];
  title: string;
  isMyInfo: boolean;
}

export type PromptType = string | null;
