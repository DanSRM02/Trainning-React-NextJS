import React from 'react';

export default function PasswordCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="password-checker-container">
      {children}
    </div>
  );
}
