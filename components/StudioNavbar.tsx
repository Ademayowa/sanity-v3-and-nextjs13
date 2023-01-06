import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';

function StudioNavbar(props: any) {
  return (
    <div>
      <div className=''>
        <Link href='/' className='text-blue-500 flex items-center'>
          <BsArrowLeft className='h-6 w-6 text-red-500 mr-2' />
          Go to website
        </Link>
        <>{props.renderDefault(props)}</>
      </div>
    </div>
  );
}

export default StudioNavbar;
