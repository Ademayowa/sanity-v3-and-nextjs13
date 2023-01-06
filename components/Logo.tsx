import Image from 'next/image';

function Logo(props: any) {
  return (
    <div>
      <Image
        src='https://www.charismedhospital.com/static/media/logo.869d55e1.png'
        alt='logo'
        className='object-cover'
        width={80}
        height={80}
      />
    </div>
  );
}

export default Logo;
