'use client';
import Image from 'next/image';
import Link from 'next/link';
import BrandLogo from '/public/logo/logo.webp';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src={BrandLogo} alt='Brand-Logo' width={48} height={48} />
    </Link>
  );
};

export default Logo;
