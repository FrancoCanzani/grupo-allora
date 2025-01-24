'use client';

import type React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Peter McLK',
    rating: 5,
    comment:
      'What a great little place. Service was fantastic, so helpful and do accommodating with nothing too difficult - even inly happy to explain everything on the menu  The great service was accompanied by good food bd a pleasant ambience - full Marks sad worth a visit',
  },
  {
    id: 2,
    name: 'Oscar S',
    rating: 5,
    comment:
      'My favourite place in Els Magazinos. The staff are always friendly, and allow you to speak Spanish to them. The food is consistently of a high quality, and the whole menu is well priced. You are able to order from 3 cuisines from your table which is also nice.',
  },
  {
    id: 3,
    name: 'Paula Romero Quesada',
    rating: 5,
    comment: `Buen ambiente.

El personal agradable, rápido y atento.
Decidimos pedir tapas en diferentes sitios para probar variedad y todo para compartir.
Aquí nos pareció curioso las empanadas y pedimos 2 diferentes y su masa y relleno... mmmmm`,
  },
  {
    id: 4,
    name: 'Rafael Muñoz',
    rating: 5,
    comment: `Buen sitio argentino en Els Magazinos de Denia.
Las empanadas argentinas buenísimas todas y la entraña con especias espectacular, para secarse las lágrimas.`,
  },
  {
    id: 5,
    name: 'Kiko 283',
    rating: 5,
    comment: `Muy buen sitio para probar comida argentina, a buen precio y una buena calidad, el trato cercano y atento, mos buscaron sitio en seguida, nos informaron incluso de cortes de carne que no tenian en carta, el chimichurri espectacular, nada que ver con el de los supermercados, casero…. Las raciones amplias, y todo muy bien presentado, eso si esta en magazinos y tienes que comer en mesa alta, pero si eso te va esta genial!!!!!`,
  },
  {
    id: 6,
    name: 'Jon Reyes Gonzalez',
    rating: 5,
    comment: `Buena comida, buen trato. Lugar perfecto si pillas sitio en el mercado Els Magasinos. A destacar las bravas y las empanadas.`,
  },
  {
    id: 7,
    name: 'Roberto Garcia Peña',
    rating: 5,
    comment: `Rapidez para atenderte y en traerte la comida, productos caseros y deliciosos.
Atencion muy buena por parte de las camareras.`,
  },
  {
    id: 8,
    name: 'Fer M',
    rating: 5,
    comment: `Muy lindo lugar, la comida de buena calidad y a mí parecer los precios son normales. Los empleados muy amables.`,
  },
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <Card className='w-full max-w-sm mx-auto rounded-none'>
    <CardContent className='p-6'>
      <div className='flex items-center mb-4'>
        <div className='flex items-center justify-start space-x-3'>
          <h3 className='font-semibold'>{review.name}</h3>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill={i < review.rating ? 'currentColor' : 'none'}
              />
            ))}
          </div>
        </div>
      </div>
      <p className='text-gray-600 text-sm'>{review.comment}</p>
    </CardContent>
  </Card>
);

export default function ReviewCarousel() {
  return (
    <div className='space-y-3'>
      <a
        href='https://www.google.com/maps/place/PATAGONIA/@38.844238,0.109217,17.02z/data=!4m18!1m9!3m8!1s0x129e1bdd194d5ff1:0xfb2c3964d1b6d6ef!2sPATAGONIA!8m2!3d38.8442243!4d0.1092155!9m1!1b1!16s%2Fg%2F11r_tgdx5z!3m7!1s0x129e1bdd194d5ff1:0xfb2c3964d1b6d6ef!8m2!3d38.8442243!4d0.1092155!9m1!1b1!16s%2Fg%2F11r_tgdx5z?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D'
        target='_blank'
        className='hover:underline text-red-950 italic lg:text-3xl text-xl'
      >
        Reseñas (4.3/5) en Google
      </a>
      <Carousel className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto'>
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id}>
              <ReviewCard review={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
