import { checkToken } from './checkToken';
import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect } from 'react';
import { getLocalstorage } from './localstorage';

interface AuthRequiredProps {
  children: ReactNode;
}

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
