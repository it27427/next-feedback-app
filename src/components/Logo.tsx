'use client';
import Image from 'next/image';
import BrandLogo from '/logo/logo.webp';

const Logo = () => {
  return <Image src={BrandLogo} alt='Brand-Logo' />;
};

export default Logo;
