import { useRouter } from 'next/router';
import { getLocalstorage } from '@components/auth/localstorage';
import { useOnce } from 'hooks/useOnce';

export const AuthRequired = ({ children }) => {
  const router = useRouter();
  useOnce(() => {
    if (getLocalstorage('JWT_TOKEN') === null) {
      router.push('/login');
    }
  });

  return <>{children}</>;
};
