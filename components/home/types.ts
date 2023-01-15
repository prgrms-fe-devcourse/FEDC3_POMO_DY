export interface UserInfoType {
  isOnline: boolean;
  _id: string;
  fullName: string;
}

export interface CategoryInfoType {
  _id: string;
  name: string;
  posts: [];
}
