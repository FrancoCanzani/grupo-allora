import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { MoveUpRight } from 'lucide-react';
import ReviewCarousel from '@/components/review-carousel';
import Footer from '@/components/footer';

export default function Home() {
  const images = [
    { src: '/asado2.jpg', alt: 'Placeholder 2' },
    { src: '/choripan.jpg', alt: 'Placeholder 3' },
    { src: '/choripan2.jpg', alt: 'Placeholder 3' },
    { src: '/entrecot.jpeg', alt: 'Placeholder 3' },
    { src: '/provoleta.jpg', alt: 'Placeholder 2' },
    { src: '/ensalada.jpg', alt: 'Placeholder 3' },
  ];
  const images2 = [
    { src: '/tabbule.jpg', alt: 'Placeholder 3' },
    { src: '/hummus.jpg', alt: 'Placeholder 3' },
    { src: '/panini.jpg', alt: 'Placeholder 3' },
    { src: '/mollete.jpg', alt: 'Placeholder 3' },
    { src: '/empanada1.jpg', alt: 'Placeholder 3' },
    { src: '/empanada2.jpg', alt: 'Placeholder 3' },
  ];

  return (
    <div className='w-full space-y-8'>
      <div className='grid w-full flex-1 grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
        {images.map((image, index) => (
          <div
            key={index}
            className='w-full aspect-[4/3] relative overflow-hidden shadow'
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes='100vw'
              className='object-cover'
            />
          </div>
        ))}
      </div>

      <Separator />
      <ReviewCarousel />
      <Separator />

      <div className='grid w-full flex-1 grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
        {images2.map((image, index) => (
          <div
            key={index}
            className='w-full aspect-[4/3] relative overflow-hidden shadow'
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes='100vw'
              className='object-cover'
            />
          </div>
        ))}
      </div>
      <div className='grid w-full flex-1 grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
        <div className='space-y-8 flex flex-col'>
          <h2 className='lg:text-3xl text-xl text-red-950 italic'>
            Dónde estamos
          </h2>
          <p className='font-medium text-balance'>
            Nos encuentras en Els Magazinos, el mercado gastronómico y cultural
            de Dénia.
          </p>
          <a
            href='https://maps.app.goo.gl/yDbMbs4VYxrZKD689'
            target='_blank'
            className='p-3 border flex items-center justify-between border-red-950 hover:bg-accent'
          >
            Google Maps
            <MoveUpRight className='w-4 h-4' />
          </a>
        </div>
        <div className='w-full aspect-[4/3] relative overflow-hidden shadow'>
          <Image
            src={'/magazinos.jpg'}
            alt={'Els Magazinos, Denia, Alicante'}
            fill
            sizes='100vw'
            className='object-cover'
          />
        </div>
      </div>
      <Separator />
      <div
        id='contacto'
        className='grid w-full flex-1 grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'
      >
        <div className='w-full aspect-[4/3] relative overflow-hidden shadow'>
          <Image
            src={'/magazinos2.jpeg'}
            alt={'Els Magazinos, Denia, Alicante'}
            fill
            sizes='100vw'
            className='object-cover'
          />
        </div>
        <div className='space-y-8 flex flex-col'>
          <h2 className='lg:text-3xl text-xl text-red-950 italic'>Contacto</h2>
          <p className='font-medium text-balance'>
            ¿Tienes alguna pregunta o necesitas más información? ¡Estamos aquí
            para ayudarte!
          </p>
          <p>
            Contáctanos al <strong>+34 645 06 82 42</strong> y estaremos
            encantados de atenderte.
          </p>
        </div>
      </div>

      <Separator />
      <Footer />
    </div>
  );
}
