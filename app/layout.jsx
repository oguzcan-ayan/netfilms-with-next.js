import '@/styles/reset.css';
import '@/styles/global.css';

import { Inter } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';

const interFont = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFont.className}>
      <body className="container">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 
