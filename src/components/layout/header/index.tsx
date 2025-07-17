import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="futuristic-header">
      <div className="logo">
        <Link href="/password-checker">
          SECURE-CHECK
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/password-checker">
              Checker
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
