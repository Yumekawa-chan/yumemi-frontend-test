import type { Metadata } from 'next';
import './globals.css';
import { JSX } from 'react';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Yumemi Frontend Coding Test',
};

const dotGothic16 = localFont({
  src: [
    {
      path: '../../public/DotGothic16-Regular.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-dotgothic16',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ja">
      <body
        className={`${dotGothic16.className}`}
      >
        {children}
      </body>
    </html>
  );
}