'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHotel } from "react-icons/fa";

const Logo = () => {
  const router = useRouter();

  return ( 
    // <Image
    //   onClick={() => router.push('/')}
    //   className="hidden md:block cursor-pointer" 
    //   src="/images/logo.png" 
    //   height="100" 
    //   width="100" 
    //   alt="Logo" 
    // />
    <Link href={'/'}  className="text-primary hidden md:flex cursor-pointer gap-2 items-center">
      <FaHotel className="text-2xl" />
      <p className="text-lg font-bold">Nginep</p>
    </Link>
   );
}
 
export default Logo;
