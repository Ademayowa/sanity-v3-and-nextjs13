import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className='flex justify-between items-center space-x-2 bold px-10 py-10'>
      <div className='flex items-center space-x-2 '>
        <Image
          src='https://www.charismedhospital.com/static/media/logo.869d55e1.png'
          alt='logo'
          className='object-cover'
          width={80}
          height={80}
        />
      </div>
    </header>
  );
}

export default Header;
