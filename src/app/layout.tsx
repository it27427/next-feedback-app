import '@/assets/css/globals.css';
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';

import AuthProvider from '@/context/AuthProvider';

const sourcesans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Feedback App',
  description: 'Next feedback full stack app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <AuthProvider>
        <body className={sourcesans.className} suppressHydrationWarning={true}>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
