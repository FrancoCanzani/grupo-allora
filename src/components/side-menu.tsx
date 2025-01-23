import { Separator } from './ui/separator';
import Link from 'next/link';

export default function SideMenu() {
  return (
    <nav className='w-full static lg:sticky top-3 lg:w-1/3 lg:h-[95vh] h-fit flex flex-col items-center justify-start text-balance text-center space-y-8'>
      <Link href={'/'} className='font-bold text-4xl text-red-950'>
        Patagonia
      </Link>
      <Separator />
      <span className='font-medium'>
        Carrer del Pont, 19, 03700 Dénia, Alicante
      </span>
      <Separator />
      <div className='flex-row text-base h-full justify-between lg:text-xl flex items-center space-x-4 lg:space-x-0 lg:flex-col lg:space-y-3'>
        <div className='flex-row text-base h-full justify-start lg:text-xl flex items-center space-x-4 lg:space-x-0 lg:flex-col lg:space-y-3'>
          <Link
            href='/historia'
            className='font-medium text-red-950 hover:text-black hover:font-medium'
          >
            Historia
          </Link>
          <a
            href='#contacto'
            className='font-medium text-red-950 hover:text-black hover:font-medium'
          >
            Contacto
          </a>
        </div>
        <a
          className='font-medium text-red-950 hover:text-black hover:font-medium'
          href='https://www.instagram.com/alloramagazinos/'
          target='_blank'
        >
          Instagram
        </a>
      </div>
    </nav>
  );
}
