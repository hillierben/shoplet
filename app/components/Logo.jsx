import Image from 'next/image';
import LogoImage from '../components/shoplet-cropped.png';

export default function Logo() {
  return (
    <div className='min-w-[120px]'>
      <Image
        src={LogoImage}
        alt='logo'
        width={120}
        height={50}
        className='pt-1'
      />
      {/* <h1>Shoplet</h1> */}
    </div>
  )
}
