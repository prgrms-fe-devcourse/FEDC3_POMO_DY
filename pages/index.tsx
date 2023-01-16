import { AuthRequired } from '@components/auth/authrequire';

export default function Home() {
  return (
    <AuthRequired>
      <></>
    </AuthRequired>
  );
}
