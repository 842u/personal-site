import './globals.css';

import type { Metadata } from 'next';

import { NavBar } from '@/components/ui/NavBar';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light text-dark transition-colors dark:bg-dark dark:text-light">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
