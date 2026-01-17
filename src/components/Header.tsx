import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/80 border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wider text-white hover:opacity-80 transition-opacity">
          MUSEUM<span className="font-light opacity-70">OR</span>
        </Link>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          <Link href="#" className="hover:text-purple-400 transition-colors">ABOUT</Link>
          <Link href="#" className="hover:text-purple-400 transition-colors">HOST AN EVENT</Link>
          <Link href="#" className="hover:text-purple-400 transition-colors">BLOG</Link>
          <Link href="#" className="hover:text-purple-400 transition-colors">ARTISTS</Link>
          <Link href="#" className="hover:text-purple-400 transition-colors">COLLECTION</Link>
        </nav>

        <button className="px-6 py-2.5 text-xs font-bold bg-white text-black hover:bg-purple-500 hover:text-white transition-colors rounded-full uppercase tracking-widest">
          Download
        </button>
      </div>
    </header>
  );
}
