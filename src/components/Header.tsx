import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wider text-white hover:opacity-80 transition-opacity">
          MUSEUM<span className="font-light opacity-70">OR</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#" className="hover:text-accent transition-colors">VISIT</Link>
          <Link href="#" className="hover:text-accent transition-colors">EXHIBITIONS</Link>
          <Link href="#" className="hover:text-accent transition-colors">EVENTS</Link>
          <Link href="#" className="hover:text-accent transition-colors">ABOUT</Link>
        </nav>

        <button className="px-4 py-2 text-xs font-bold bg-white text-black hover:bg-gray-200 transition-colors rounded-full">
          ENTER VR
        </button>
      </div>
    </header>
  );
}
