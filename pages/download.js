import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Download() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const isSession = () => {
      if (!session && status !== 'loading') {
        router.push('/signIn');
      }
    };

    isSession();
  }, [session, status]);

  if (status === 'loading' || !session) {
    return <h1>Loading...</h1>;
  }

  return (
    <h1>{session ? `${session.user.name}, ` : ''} Your Download is Ready</h1>
  );
}

export default Download;
