'use client';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from './button';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  const router = useRouter();
  const handleLogout = () => {};
  return (
    <div
      className={twMerge(
        'h-fit bg-gradient-to-b from-emerald-800 p-6',
        className
      )}
    >
      <div className="flex w-full items-center justify-between mb-4">
        <div className="hidden md:flex items-center gap-x-3">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center  hover:opacity-70 transition bg-black rounded-full "
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="flex items-center justify-center  hover:opacity-70 transition bg-black rounded-full "
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden items-center gap-x-2">
          <button className="rounded-full bg-white flex justify-center items-center p-2 hover:opacity-75 transition">
            <HiHome size={20} className="text-black" />
          </button>
          <button className="rounded-full bg-white flex justify-center items-center p-2 hover:opacity-75 transition">
            <BiSearch size={20} className="text-black" />
          </button>
        </div>
        <div className="flex items-center justify-between">
            <>
            <Button className='text-neutral-300 bg-transparent font-medium'>Sign Up</Button>
            <Button className='bg-white px-2 py-2'>Sign In</Button>
            </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
