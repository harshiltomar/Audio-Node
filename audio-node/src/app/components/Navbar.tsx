import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <Link href="/" className='flex align-middle ml-32'>
        <nav className=" py-5">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <div className='flex m-4 font-thin text-2xl'>
                    <span role="img" className='mr-2' aria-label="wave">👋</span>{' '}
                    <div className='font-semibold'>Audio</div>-Node
                    </div>
                </Link>
            </div>
        </nav>
    </Link>
  );
};

export default Navbar;
