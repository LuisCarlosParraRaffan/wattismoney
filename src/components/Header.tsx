import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[rgb(249,255,165)] flex justify-center items-center z-50">
      <Image
        src="/images/WiM_Logo.svg"
        alt="WattIsMoney Logo"
        width={80}
        height={80}
        className="h-auto w-auto"
      />
    </header>
  );
};

export default Header; 