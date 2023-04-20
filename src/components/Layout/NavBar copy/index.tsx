import Link from "next/link";

const Navbar = () => (
  <div className='bg-blue-500 p-4 flex justify-between text-white mb-4'>
    <Link href='/'>Home</Link>
    <Link href='/trending'>Trending</Link>
    <Link href='/account'>Account</Link>
  </div>
);

export default Navbar;
