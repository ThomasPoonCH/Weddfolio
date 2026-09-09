import type { Metadata } from 'next';
import { Geist, Italiana } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const italiana = Italiana({
  variable: '--font-italiana',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'WEDDFOLIO — Your wedding, beautifully told.',
  description:
    'Bespoke digital wedding experiences, individually designed around your story and celebration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${italiana.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
