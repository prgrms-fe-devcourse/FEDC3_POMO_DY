import { useRouter } from 'next/router';
import { getLocalstorage } from '@components/auth/localstorage';
import { useOnce } from 'hooks/useOnce';
import { FC, ReactNode } from 'react';

interface AuthRequiredProps {
  children: ReactNode;
}

export const AuthRequired: FC<AuthRequiredProps> = ({ children }) => {
  const router = useRouter();
  useOnce(() => {
    if (getLocalstorage('JWT_TOKEN') === null && router.query.id !== 'sign') {
      router.push('/login');
    }
  });

  return <>{children}</>;
};
