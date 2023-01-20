import { NextRouter } from 'next/router';

export interface LoginApiProps {
  email: string;
  password: string;
  router: NextRouter;
}
