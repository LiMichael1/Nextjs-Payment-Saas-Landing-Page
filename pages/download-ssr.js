import { getSession, useSession } from 'next-auth/react';

function DownloadSSR({ downloads }) {
  const { data: session } = useSession();

  return (
    <h1>
      Your SSR Download is Ready {session ? `, ${session.user.name}` : ''}
      <br />
      {downloads}
    </h1>
  );
}

export default DownloadSSR;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination:
          '/api/auth/signin?callbackUrl=http://localhost:3000/download-ssr',
        permanent: false,
      },
    };
  }

  return {
    props: {
      downloads: 'List of Downloads',
      session,
    },
  };
}
