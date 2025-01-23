import type { Metadata } from 'next';
import { Cinzel_Decorative } from 'next/font/google';
import './globals.css';
import SideMenu from '@/components/side-menu';

const cinzel = Cinzel_Decorative({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Patagonia - Cocina Argentina y Libanesa en Denia, Alicante',
  description:
    'Descubre Patagonia, un restaurante único en Denia, Alicante. Disfruta de auténticos sabores argentinos y libaneses: empanadas gourmet, parrillas y platos tradicionales en un ambiente encantador.',
  keywords: [
    'Patagonia Denia',
    'restaurante en Denia',
    'comida argentina en Denia',
    'comida libanesa en Denia',
    'empanadas en Denia',
    'parrilla argentina',
    'restaurantes Denia Alicante',
    'cocina argentina y libanesa',
    'Els Magazinos Denia',
    'mejores restaurantes en Denia',
  ],
  authors: [{ name: 'Patagonia Denia', url: 'https://patagoniadenia.com' }],
  twitter: {
    card: 'summary_large_image',
    title: 'Patagonia - Cocina Argentina y Libanesa en Denia, Alicante',
    description:
      'Descubre Patagonia, un restaurante único en Denia, Alicante. Disfruta de auténticos sabores argentinos y libaneses: empanadas gourmet, parrillas y platos tradicionales en un ambiente encantador.',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={`${cinzel.className} antialiased w-full p-3`}>
        <main className='flex w-full items-start justify-between gap-3 space-y-8 lg:space-y-0 flex-col lg:flex-row'>
          <SideMenu />
          {children}
        </main>
      </body>
    </html>
  );
}
