import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "../ui/theme-toggle";
export function Navbar() {
  return (
    <nav className="w-full py-5 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-1 text-3xl font-bold"><Image src="/logo.png" alt="Logo" width={40} height={40} /> Reveri</Link>
        <div className="flex items-center gap-2">
<Link className={buttonVariants({variant:"ghost"})} href="/">Home</Link>
<Link className={buttonVariants({variant:"ghost"})} href="/blog">Blog</Link>
<Link className={buttonVariants({variant:"ghost"})} href="/create">Create</Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link href="/auth/sign-up" className={buttonVariants()}>Sign Up</Link>
        <Link href="/auth/login" className={buttonVariants({variant:"outline"})}>Log In</Link>
        <ThemeToggle/>
      </div>
    </nav>
  );
}
