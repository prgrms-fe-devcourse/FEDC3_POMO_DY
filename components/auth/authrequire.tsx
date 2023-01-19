import { checkToken } from './checkToken';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { getLocalstorage } from './localstorage';
import { AuthRequiredProps } from './types';

export const AuthRequired: FC<AuthRequiredProps> = ({ children }) => {
  const router = useRouter();
  const token = typeof window !== 'undefined' ? getLocalstorage('JWT_TOKEN') : null;

  useEffect(() => {
    if (token === null) {
      router.replace('/login');
    } else {
      checkToken(token);
    }
  }, [router, token]);

  return <>{children}</>;
};
