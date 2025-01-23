import type { Metadata } from 'next';
import { Cinzel_Decorative } from 'next/font/google';
import './globals.css';
import SideMenu from '@/components/side-menu';

const cinzel = Cinzel_Decorative({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Grupo Allora - Cocina Argentina y Libanesa Auténtica',
  description:
    'Disfruta de los sabores auténticos de Argentina y Líbano en Grupo Allora. Empanadas gourmet, parrillas argentinas y platos libaneses tradicionales en un ambiente vibrante.',
  keywords: [
    'Grupo Allora',
    'Allora Denia',
    'Patagonia Denia',
    'Allora Magazinos',
    'comida argentina',
    'comida argentina en Denia',
    'comida argentina en Alicante',
    'comida libanesa',
    'comida libanesa en Denia',
    'empanadas argentinas',
    'parrillas gourmet',
    'restaurantes en Denia',
    'Els Magazinos',
    'Els Magazinos Denia',
  ],
  authors: [{ name: 'Grupo Allora', url: 'https://grupoallora.com' }],
  openGraph: {
    title: 'Grupo Allora - Cocina Argentina y Libanesa Auténtica',
    description:
      'Disfruta de los sabores auténticos de Argentina y Líbano en Grupo Allora. Empanadas gourmet, parrillas argentinas y platos libaneses tradicionales en un ambiente vibrante.',
    url: 'https://grupoallora.com',
    siteName: 'Grupo Allora',
    images: [
      {
        url: 'https://grupoallora.com/og-image.jpg', // Reemplaza con la URL de tu imagen OG
        width: 1200,
        height: 630,
        alt: 'Grupo Allora - Cocina Argentina y Libanesa Auténtica',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grupo Allora - Cocina Argentina y Libanesa Auténtica',
    description:
      'Disfruta de los sabores auténticos de Argentina y Líbano en Grupo Allora. Empanadas gourmet, parrillas argentinas y platos libaneses tradicionales en un ambiente vibrante.',
    // images: ['https://grupoallora.com/twitter-image.jpg'],
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
