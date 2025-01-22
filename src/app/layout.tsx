import type { Metadata } from 'next';
import { Cinzel_Decorative } from 'next/font/google';
import './globals.css';
import SideMenu from '@/components/side-menu';

const cinzel = Cinzel_Decorative({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Grupo Allora - Authentic Argentine and Lebanese Cuisine',
  description:
    'Experience the rich flavors of Argentina and Lebanon at Grupo Allora. Enjoy gourmet empanadas, Argentine grills, and authentic Lebanese dishes in a vibrant setting.',
  keywords: [
    'Grupo Allora',
    'Argentine cuisine',
    'Lebanese cuisine',
    'empanadas',
    'gourmet grills',
    'Denia restaurants',
    'Els Magazinos',
  ],
  authors: [{ name: 'Grupo Allora', url: 'https://grupoallora.com' }],
  openGraph: {
    title: 'Grupo Allora - Authentic Argentine and Lebanese Cuisine',
    description:
      'Experience the rich flavors of Argentina and Lebanon at Grupo Allora. Enjoy gourmet empanadas, Argentine grills, and authentic Lebanese dishes in a vibrant setting.',
    url: 'https://grupoallora.com',
    siteName: 'Grupo Allora',
    images: [
      {
        url: 'https://grupoallora.com/og-image.jpg', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Grupo Allora - Authentic Argentine and Lebanese Cuisine',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grupo Allora - Authentic Argentine and Lebanese Cuisine',
    description:
      'Experience the rich flavors of Argentina and Lebanon at Grupo Allora. Enjoy gourmet empanadas, Argentine grills, and authentic Lebanese dishes in a vibrant setting.',
    // images: ['https://grupoallora.com/twitter-image.jpg'], // Replace with your actual Twitter image URL
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${cinzel.className} antialiased w-full p-3`}>
        <main className='flex w-full items-start justify-between gap-3 flex-col lg:flex-row'>
          <SideMenu />
          {children}
        </main>
      </body>
    </html>
  );
}
