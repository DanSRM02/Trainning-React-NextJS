import React from 'react';
import Link from 'next/link';

// Exportamos el componente con el nombre 'Header'
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
