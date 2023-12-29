import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import '@/app/ui/globals.css';
import { Providers } from '../providers';
import Header from '@/app/ui/layout/header/Header';
import Footer from '@/app/ui/layout/footer/Footer';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SevenTy',
  description: 'Software development for any buisness cases',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} main`}>
        <Providers>
          <div className="gradient"></div>
          <div className="app">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
