import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
const iranSans = localFont({ src: '../public/iranSans.ttf' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" dir="rtl">
      <body className={iranSans.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
