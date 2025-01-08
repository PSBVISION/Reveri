import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href={"/"} className="inline-flex items-center"> 
          <Image
            src={"/logo.png"}
            width={60}
            height={35}
            alt={"reveri logo"}
            className="w-auto object-contain"
          />
          <h1 className="text-4xl mx-2 text-gray-700 font-bold font-serif">Reveri</h1>
        </Link>
        <div className="flex items-center gap-4">
          login
        </div>
      </nav>
    </header>
  );
};

export default Header;
