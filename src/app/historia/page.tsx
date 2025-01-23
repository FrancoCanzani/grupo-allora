import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/footer';

export default function History() {
  return (
    <div className='w-full space-y-8'>
      <div className='space-y-6'>
        <h2 className='lg:text-3xl text-xl text-red-950 italic'>
          Nuestra Historia
        </h2>
        <p className='text-lg'>
          Corría el año 1983, cuando Argentina recuperaba la democracia, y el 10
          de diciembre comenzaba nuestra travesía gastronómica. Con el paso del
          tiempo, hemos crecido hasta contar con cinco restaurantes en La Plata,
          Gonnet, City Bell y Los Hornos.
        </p>
        <p className='text-lg'>
          Fuimos pioneros en servicios de entrega a domicilio en la capital
          Buenos Aires, vendiendo más de 10,000 pizzas y 7,000 docenas de
          empanadas. Con un equipo dedicado de 65 empleados, expandimos nuestro
          alcance a Paterna, Valencia, presentando con gran éxito Allora Heron
          City.
        </p>
        <p className='text-lg'>
          Y, por supuesto, no podíamos dejar de estar presentes en Denia,
          designada por la UNESCO como Ciudad Creativa de la Gastronomía.
          Nuestras propuestas abarcan tres conceptos distintos dentro del
          mercado Els Magazinos: Allora, especializado en empanadas y
          bocadillos; Patagonia, ofreciendo parrillas gourmet argentinas; y
          Fayiz, dedicado a la auténtica cocina árabe.
        </p>
      </div>

      <Separator />

      <h2 className='lg:text-3xl text-xl text-red-950 italic'>
        Nuestros Conceptos
      </h2>
      <div className='flex items-center justify-start flex-col gap-4 space-y-4'>
        <div className='grid w-full flex-1 grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 space-y-8'>
          <div className='w-full aspect-[4/3] relative overflow-hidden shadow'>
            <Image
              src={'/empanada1.jpg'}
              alt={'Empanadas Argentinas'}
              fill
              sizes='100vw'
              className='object-cover'
            />
          </div>
          <div className='space-y-8 flex flex-col'>
            <h2 className='lg:text-3xl text-xl text-red-950 italic'>
              Allora L&apos;Originale
            </h2>
            <p className='text-lg'>
              Disfruta de los auténticos sabores de Argentina, elaborados
              frescos cada día con un cuidado artesanal. Nuestras empanadas
              estrella lucen rellenos tentadores como cebolla y provolone, cerdo
              y ciruela, ternera y especias, o mozzarella y vegetales asados.
            </p>
          </div>
        </div>

        <Separator />

        <div className='grid w-full flex-1 grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 space-y-8'>
          <div className='space-y-8 flex flex-col'>
            <h2 className='lg:text-3xl text-xl text-red-950 italic'>
              Patagonia
            </h2>
            <p className='text-lg'>
              En nuestro local, somos verdaderos maestros de las carnes, como
              buenos argentinos. Aquí disfrutarás de carnes extremadamente
              tiernas, preparadas con cortes argentinos y acompañadas de nuestra
              exquisita salsa casera.
            </p>
          </div>
          <div className='w-full aspect-[4/3] relative overflow-hidden shadow'>
            <Image
              src={'/entrecot.jpeg'}
              alt={'Entrecot Patagonia'}
              fill
              sizes='100vw'
              className='object-cover'
            />
          </div>
        </div>

        <Separator />

        <div className='grid w-full flex-1 grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 space-y-8'>
          <div className='w-full aspect-[4/3] relative overflow-hidden shadow'>
            <Image
              src={'/hummus.jpg'}
              alt={'Fayiz Lebanon'}
              fill
              sizes='100vw'
              className='object-cover'
            />
          </div>
          <div className='space-y-8 flex flex-col'>
            <h2 className='lg:text-3xl text-xl text-red-950 italic'>
              Fayiz Lebanon
            </h2>
            <p className='text-lg'>
              Cocina del Mediterráneo Oriental, sobre todo del Líbano. Los
              inmigrantes libaneses en Argentina estuvieron ligados a nuestra
              niñez, y compartimos sus costumbres y comidas. Descubre platos
              como el kofta, hummus, shawarma y falafel.
            </p>
          </div>
        </div>
      </div>
      <Separator />
      <Footer />
    </div>
  );
}
