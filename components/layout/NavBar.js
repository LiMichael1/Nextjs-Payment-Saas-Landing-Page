import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

import Logo from './Logo';

const NavBar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className='navbar'>
      <div className='leftNav'>
        <Logo />
        <ul className='navLinks lightText'>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/features'>
              <a>Features</a>
            </Link>
          </li>
          <li>
            <Link href='/how'>
              <a>How It Works</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='rightNav'>
        {/* No One is Logged In Yet */}
        {status !== 'loading' && !session && (
          <li className='lightText'>
            <Link href='/signIn'>
              <a>Sign In</a>
            </Link>
          </li>
        )}

        {/* User is Already Logged In */}
        {session && (
          <ul className='navLinks lightText'>
            <li>
              <Link href='/download' className='mr-10'>
                <a>Download</a>
              </Link>
            </li>

            <li>
              <Link href='/download-ssr'>
                <a>Download SSR</a>
              </Link>
            </li>

            <li>
              <Link href='/api/auth/signout'>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  SignOut
                </a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
