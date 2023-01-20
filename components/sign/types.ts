import { NextRouter } from 'next/router';
export interface PostSignProps {
  email: string;
  fullName: string;
  password: string;
  router: NextRouter;
}
