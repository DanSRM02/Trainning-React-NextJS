import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="futuristic-header">
      <div className="logo">
        <Link href="/">
          SECURE-CHECK
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/password-checker" className="active">
              Checker
            </Link>
          </li>
          <li>
            <Link href="#">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
