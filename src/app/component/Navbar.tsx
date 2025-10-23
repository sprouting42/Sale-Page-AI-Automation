import Image from 'next/image';

export default function Navbar() {

  return (
    <nav className="bg-white dark:bg-black shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Sprouting Tech Academy Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white kanit-bold">
              Sprouting Tech Academy
            </span>
          </div>
      </div>
      </div>
    </nav>
  );
}
