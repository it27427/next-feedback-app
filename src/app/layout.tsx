import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import './globals.css';

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
      <body className={sourcesans.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
