import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function SignIn() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const isSignIn = () => {
      if (session) {
        router.push('/');
      }
    };

    isSignIn();
  }, [session, status]);

  if (status === 'loading' || session) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Link href='/api/auth/signin'>
        <a
          onClick={(e) => {
            e.preventDefault();
            signIn('github');
          }}
        >
          Sign In With Github
        </a>
      </Link>
      <hr />
      <Link href='/api/auth/signout'>
        <a
          onClick={(e) => {
            e.preventDefault();
            signIn('google');
          }}
        >
          Sign In with Google
        </a>
      </Link>
    </>
  );
}

export default SignIn;
