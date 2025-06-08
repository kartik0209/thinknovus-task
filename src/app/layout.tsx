import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Exclusive - Premium E-commerce Store',
  description: 'Discover premium products at exclusive prices. Shop electronics, fashion, beauty, and more with free delivery and 24/7 customer support.',
  keywords: 'e-commerce, shopping, electronics, fashion, beauty, premium products',
  authors: [{ name: 'Exclusive Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
